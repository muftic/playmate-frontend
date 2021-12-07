import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";
import { apiUrl } from "../../config/constants";
export default function PetProfile() {
  const id = Number(useParams().petId);
  const [imageData, setImageData] = useState();
  const sendImage = async () => {
    try {
      const response = await axios.post(`${apiUrl}/photos/`, {
        imageUrl: imageData,
        petId: id,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        //dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        //dispatch(setMessage("danger", true, error.message));
      }
    }
  };
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "c5h84nci");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/muftic/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImageData(file.url); //put the url in local state, next step you can send it to the backend
    /*     try {
      const response = await axios.post(`${apiUrl}/photos/`, {
        imageUrl: imageData,
        petId: id,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        //dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        //dispatch(setMessage("danger", true, error.message));
      }
    } */
  };
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
        <div
          style={{
            display: "inline-block",
            border: "1px solid black",
            width: "50%",
          }}
        >
          <input type="file" onChange={uploadImage} />
          <div style={{ textAlign: "center" }}>
            <Image
              id="thisOne"
              crossOrigin="anonymous"
              style={{ height: "50px", width: "50px" }}
              src={
                imageData
                  ? imageData
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              }
            />
          </div>
          // <Button onClick={() => sendImage()}>SUBMIT</Button>
        </div>{" "}
      </div>
    </div>
  );
}
