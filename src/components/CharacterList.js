import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  const renderCharacters = () => {
    if (characters.length > 0) {
      return characters.map((character, index) => {
        return (
          <li key={index}>
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
      <ul>{renderCharacters()}</ul>
    </section>
  );
};

//CharacterList.propTypes = {};

export default CharacterList;
