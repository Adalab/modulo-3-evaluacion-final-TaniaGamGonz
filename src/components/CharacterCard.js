import "../styles/components/CharacterCard.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterCard = ({ photo, name, specie }) => {
  return (
    <Link to={`/character/${name}`}>
      <article className="character-card">
        <div className="character-card__img--container">
          <img
            src={
              photo ||
              `https://via.placeholder.com/210x295/ffffff/666666/?text=${name}`
            }
            alt={name}
            title={name}
            className="character-card__img"
          />
        </div>
        <section className="character-card__info">
          <p className="character-card__text">{name}</p>
          <p className="character-card__text">{specie}</p>
        </section>
      </article>
    </Link>
  );
};

CharacterCard.defaultProps = {
  photo:
    "https://via.placeholder.com/210x295/ffffff/666666/?text=Información no disponible",
  name: "Información no disponible",
  specie: "Información no disponible",
};
CharacterCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string,
};

export default CharacterCard;
