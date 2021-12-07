const initialState = { petWithUser: "martinaplaceres1@gmail.com" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addPetWithUser": {
      return { ...state, petWithUser: action.payload };
    }
    default:
      return state;
  }
}
