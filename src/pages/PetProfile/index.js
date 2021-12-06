import React from "react";
import { useParams } from "react-router";
export default function PetProfile() {
  const id = Number(useParams().petId);
  return (
    <div>
      {" "}
      <div>
        <p>
          name <input type="text"></input>
        </p>
        <p>
          age <input type="text"></input>
        </p>
        <p>
          gender <input type="text"></input>
        </p>
        <p>
          species <input type="text"></input>
        </p>

        <button>Change</button>
      </div>
    </div>
  );
}
