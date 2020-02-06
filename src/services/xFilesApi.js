export const getXFiles = () => {
  // return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters')
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(({ results }) => results.map(({ name, status, occupation, image, description }) => ({
      name,
      status,
      occupation,
      image,
      description
    })));
};

export const getXfileCharacter = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      return result;
    })
    .then(([{ name, image, description, status, occupation }]) => 
      ({
        name,
        image,
        description,
        status,
        occupation
      })
    );
}; 
