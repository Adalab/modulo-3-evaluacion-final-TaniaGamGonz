import "../styles/components/CharacterCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import noFoto from "../images/invisible.png";
import translateSpecie from "../services/translateSpecies";

const CharacterCard = ({ photo, name, specie, gender }) => {
  return (
    <Link to={`/character/${name}`}>
      <article className="character-card">
        <div className="character-card__img--container">
          <img
            src={photo}
            alt={name}
            title={name}
            className="character-card__img"
          />
        </div>
        <section className="character-card__info">
          <p className="character-card__text">{name}</p>
          <p className="character-card__text">
            {translateSpecie(specie, gender)}
          </p>
        </section>
      </article>
    </Link>
  );
};

CharacterCard.defaultProps = {
  photo: noFoto,
  name: "Información no disponible",
  specie: "Información no disponible",
};
CharacterCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string,
};

export default CharacterCard;
