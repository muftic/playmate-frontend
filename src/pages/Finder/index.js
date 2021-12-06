import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import TinderCard from "react-tinder-card";
import "../../Card.css";

function Finder() {
  const [currentIndex, setCurrentIndex] = useState(null);
  // const [lastDirection, setLastDirection] = useState();
  const [allPets, setAllPets] = useState([]);
  const user = useSelector(selectUser);
  const currentIndexRef = useRef(currentIndex);
  // const [characterId, setCharacterId] = useState("");

  console.log("the user", user);
  // const childRefs = useMemo(
  //   () =>
  //     Array(allPets.length)
  //       .fill(0)
  //       .map((i) => React.createRef()),
  //   [allPets]
  // );

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:4000/pets`);
        // console.log("All pets:", response.data);
        setAllPets(response.data.pets);
        setCurrentIndex(response.data.pets.length - 1);
        //currentIndexRef.current = response.data.pets.length - 1;
        console.log(`CIREF ${currentIndexRef}, CI: ${currentIndex}`);
      } catch (e) {
        console.log("error:", e);
      }
    })();
  }, []);

  // console.log("We getting here?", childRefs);
  // console.log("Our pets", allPets);

  // const updateCurrentIndex = (val) => {
  //   console.log("Am I getting here?", currentIndexRef, val);
  //   setCurrentIndex(val);
  //   currentIndexRef.current = val;
  // };

  // const canGoBack = currentIndex < allPets.length - 1;

  // console.log("the current index", currentIndex);
  // const canSwipe = currentIndex >= 0;

  // const outOfFrame = (name, idx) => {
  //   console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
  //   // handle the case in which go back is pressed before card goes outOfFrame
  //   currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  //   // TODO: when quickly swipe and restore multiple times the same card,
  //   // it happens multiple outOfFrame events are queued and the card disappear
  //   // during latest swipes. Only the last outOfFrame event should be considered valid
  // };

  // // set last direction and decrease current index
  // const swiped = async (direction, characterId) => {
  //   if (canSwipe) {
  //     console.log(`user Id ${user.id}, recieverId: ${characterId}`);
  //     if (direction === "right") {
  //       await axios.post(`http://localhost:4000/likes`, {
  //         giverId: user.id,
  //         receiverId: characterId,
  //         type: "play",
  //       });
  //     }
  //     // updateCurrentIndex(currentIndex - 1);
  //   }
  // };

  // const swipe = async (dir) => {
  //   if (canSwipe && currentIndex < allPets.length - 1) {
  //     setLastDirection(dir);
  //     // updateCurrentIndex(currentIndex - 1);
  //     await childRefs[currentIndex].current.swipe(dir);
  //     if (dir === "right") {
  //       await axios.post(`http://localhost:4000/likes`, {
  //         giverId: user.id,
  //         receiverId: characterId,
  //         type: "play",
  //       });
  //     }
  //   }
  // };

  // // increase current index and show card
  // const goBack = async () => {
  //   if (!canGoBack) return;
  //   const newIndex = currentIndex + 1;
  //   // updateCurrentIndex(newIndex);
  //   await childRefs[newIndex].current.restoreCard();
  // };

  //console.log("Can I swipe?", canSwipe);
  return (
    <h1>Fidner</h1>
    // <div className="finderPage">
    //   <div></div>
    //   <link
    //     href="https://fonts.googleapis.com/css?family=Damion&display=swap"
    //     rel="stylesheet"
    //   />
    //   <link
    //     href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
    //     rel="stylesheet"
    //   />
    //   <h1 className="titletext">Find your Pet/Mate!</h1>
    //   <div className="cardContainer">
    //     {allPets
    //       ? allPets.map((character, index) => (
    //           <div key={index}>
    //             {canSwipe ? (
    //               <TinderCard
    //                 ref={childRefs[index]}
    //                 className="swipe"
    //                 key={character.id}
    //                 onSwipe={(dir) => {
    //                   swiped(dir, character.id);
    //                   // setCharacterId(character.id);
    //                 }}
    //               >
    //                 {character.photos.length > 0 ? (
    //                   <div
    //                     style={{
    //                       backgroundImage: `url("${character.photos[0].url}")`,
    //                     }}
    //                     className="card"
    //                   >
    //                     <h3 className="h3">{character.name}</h3>
    //                   </div>
    //                 ) : (
    //                   <div
    //                     style={{
    //                       backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png")`,
    //                     }}
    //                     className="card"
    //                   >
    //                     <h3 className="h3">{character.name}</h3>
    //                   </div>
    //                 )}
    //               </TinderCard>
    //             ) : (
    //               "Ran out of cards"
    //             )}
    //             {/* {canSwipe
    //               ? (onCardLefWtScreen = () => outOfFrame(character.name, index))
    //               : null} */}
    //           </div>
    //         ))
    //       : null}
    //   </div>
    //   <div className="buttons">
    //     <button
    //       style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
    //       onClick={() => swipe("left")}
    //     >
    //       Swipe left!
    //     </button>
    //     <button
    //       style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
    //       onClick={() => goBack()}
    //     >
    //       Undo swipe!
    //     </button>
    //     <button
    //       style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
    //       onClick={() => swipe("right")}
    //     >
    //       Swipe right!
    //     </button>
    //   </div>
    //   {lastDirection ? (
    //     <h2 key={lastDirection} className="infoText">
    //       You swiped {lastDirection}
    //     </h2>
    //   ) : (
    //     <h2 className="infoText">
    //       Swipe a card or press a button to get Restore Card button visible!
    //     </h2>
    //   )}
    // </div>
  );
}

export default Finder;
