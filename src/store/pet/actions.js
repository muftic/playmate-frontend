import axios from "axios";

export function addPets(pets) {
  return {
    type: "pet_ADD_PETS",
    payload: pets,
  };
}

export async function fetchPets(dispatch, getState) {
  try {
    console.log("Entra al FetchPets?");
    const response = await axios.get(`http://localhost:4000/pets`);
    console.log("Pets in actions ", response);
    dispatch(addPets(response));
  } catch (e) {
    console.log(e);
  }
}
