const initialState = {
  pets: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "pet_ADD_PETS": {
      return { ...state, pets: action.payload };
    }
    default:
      return state;
  }
}
