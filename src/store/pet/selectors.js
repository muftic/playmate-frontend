export const selectPets = (reduxState) => {
  const pets = reduxState.pets;
  return pets;
};

export const selectPetWithUser = (reduxState) => {
  const pets = reduxState.pet.petWithUser;
  return pets;
};
