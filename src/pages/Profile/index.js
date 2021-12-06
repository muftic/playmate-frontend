import React from "react";
//import { useEffect } from "react";
export default function Profile() {
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
        <p>
          <input type="text"></input>
        </p>
      </div>
    </div>
  );
}

/* name: name,
    imageUrl: imageUrl,
    gender: gender,
    age: age,
    species: species,
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: req.user.id, */
