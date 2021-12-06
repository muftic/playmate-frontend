export const selectPets = (reduxState) => {
  const pets = reduxState.pet.pets;
  return pets;
};
