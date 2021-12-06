import React from "react";
import { useSelector } from "react-redux";
import { selectUserPets } from "../../store/user/selectors";
//import { useEffect } from "react";
export default function Profile() {
  const myPets = useSelector(selectUserPets);
  console.log(myPets);
  return (
    <div className="myProfile">
      <h2>Edit my profile</h2>
      <div>
        <p>
          user name <input type="text"></input>
        </p>
        <p>
          location <input type="text"></input>
          <p>
            password <input type="text"></input>
          </p>
        </p>
        <button>Change</button>
      </div>
      <div className="petsProfile">
        <h2>Edit my pets</h2>
        <div className="myPets">
          {myPets
            ? myPets.map((pet, i) => (
                <div key={i}>
                  <h3>{pet.name}</h3>
                  <p>name:</p>
                  <p>age:</p>
                  <p>gender:</p>
                  <p>species:</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
