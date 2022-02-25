const getByHouse = (selectedHouse) => {
  return fetch(
    `https://hp-api.herokuapp.com/api/characters/house/${selectedHouse}`
  )
    .then((response) => response.json())
    .then((response) => {
      const infoCleaned = response.map((character) => {
        const characterInfo = {
          name: character.name,
          specie: character.species,
          house: character.house,
          isAlive: character.alive,
          gender: character.gender,
          ancestry: character.ancestry,
        };
        if (character.image) {
          characterInfo.photo = character.image;
        }
        return characterInfo;
      });
      return infoCleaned;
    });
};

export default getByHouse;
