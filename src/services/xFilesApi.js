export const getXFiles =  () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters')
    .then(res => res.json())
    .then(characters => characters.map(({ name, status, occupation, image, description }) => ({
      name,
      status,
      occupation,
      image,
      description
    })));
};
