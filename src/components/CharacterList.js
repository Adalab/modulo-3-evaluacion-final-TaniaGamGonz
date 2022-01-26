import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  const renderCharacters = () => {
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
  };

  return (
    <section>
      <ul>{renderCharacters()}</ul>
    </section>
  );
};

//CharacterList.propTypes = {};

export default CharacterList;
