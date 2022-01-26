const getByHouse = (selectedHouse) => {
  return fetch(
    `http://hp-api.herokuapp.com/api/characters/house/${selectedHouse}`
  )
    .then((response) => response.json())
    .then((response) => {
      const infoCleaned = response.map((character) => {
        const characterInfo = {
          photo: character.image,
          name: character.name,
          specie: character.species,
          house: character.house,
          isAlive: character.alive,
          gender: character.gender,
        };
        return characterInfo;
      });
      return infoCleaned;
    });
};

export default getByHouse;
