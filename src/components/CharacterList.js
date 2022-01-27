import "../styles/components/CharacterList.scss";
import PropTypes, { arrayOf } from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  const renderCharacters = () => {
    if (characters.length > 0) {
      const ordenedCharacters = characters.sort((character1, character2) => {
        if (character1.name > character2.name) {
          return 1;
        }
        if (character1.name < character2.name) {
          return -1;
        }
        return 0;
      });
      console.log(ordenedCharacters);
      return ordenedCharacters.map((character, index) => {
        return (
          <li className="card" key={index}>
            <CharacterCard
              photo={character.photo}
              name={character.name}
              specie={character.specie}
            />
          </li>
        );
      });
    } else {
      return (
        <li>
          Vaya...parece que ninguno de nuestros personajes coincide con tu
          búsqueda, prueba de nuevo con otro nombre.
        </li>
      );
    }
  };

  return (
    <section>
      <ul className="character-list">{renderCharacters()}</ul>
    </section>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string,
      name: PropTypes.string,
      isAlive: PropTypes.bool,
      specie: PropTypes.string,
      gender: PropTypes.string,
      house: PropTypes.string,
    })
  ),
};

export default CharacterList;
