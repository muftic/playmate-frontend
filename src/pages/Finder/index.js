import React, { useState, useRef } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import "../../Card.css";
import axios from "axios";
import { useEffect } from "react";
import { selectUser } from "../../store/user/selectors";
import { useSelector } from "react-redux";

function Finder() {
  const user = useSelector(selectUser);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState();
  const [allPets, setAllPets] = useState([]);
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);
  const [childRefs, setChildRefs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:4000/pets`);
        console.log("All pets:", response.data.pets);
        setAllPets(response.data.pets);
        setCurrentIndex(response.data.pets.length - 1);
        //currentIndexRef.current = response.data.pets.length - 1;
        console.log(`CIREF ${currentIndexRef}, CI: ${currentIndex}`);
      } catch (e) {
        console.log("error:", e);
      }
    })();
  }, []);

  useEffect(() => {
    setChildRefs(
      Array(allPets.length)
        .fill(0)
        .map((i) => React.createRef())
    );
  }, [allPets]);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < allPets.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < allPets.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
      console.log(allPets[currentIndex].name, allPets[currentIndex].id);
      const { id } = allPets[currentIndex];
      if (dir === "right") {
        await axios.post(`http://localhost:4000/likes`, {
          giverId: user.id,
          receiverId: id,
          type: "play",
        });
      }
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="Finder">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1 className="titletext">Your pet mate is right here!</h1>
      <div className="cardContainer">
        {allPets.map((character, index) => {
          const [firstPhoto] = character.photos;

          const firstPhotoUrl = firstPhoto
            ? firstPhoto.url
            : "https://ih1.redbubble.net/image.2083415999.7103/st,small,507x507-pad,600x600,f8f8f8.jpg";
          return (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div
                style={{
                  backgroundImage: "url(" + firstPhotoUrl + ")",
                }}
                className="card"
              >
                <p style={{ fontSize: 40, padding: 10 }}>
                  {character.name}, {character.age}
                  <br />
                  {character.gender}
                </p>
              </div>
            </TinderCard>
          );
        })}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          Swipe left!
        </button>
        <button
          style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          onClick={() => goBack()}
        >
          Undo swipe!
        </button>
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          Swipe right!
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        ""
      )}
    </div>
  );
}

export default Finder;
