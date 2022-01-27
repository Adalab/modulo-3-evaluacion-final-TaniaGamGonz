import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";
import translateSpecie from "../services/translateSpecies";

const CharacterDetail = ({ character }) => {
  const { photo, name, isAlive, specie, gender, house } = character;

  return (
    <section className="detail">
      <div>
        <Link to="/" className="detail__link">
          Volver
        </Link>
        <article className="detail__article">
          <img src={photo} alt={name} title={name} className="detail__img" />
          <section className="detail__info">
            <p className="bold">{name}</p>
            <p>
              <span className="bold">Estatus: </span>
              {isAlive ? "Vivo" : "Muerto"}
            </p>
            <p>
              <span className="bold">Especie: </span>
              {translateSpecie(specie, gender)}
            </p>
            <p>
              <span className="bold">Genero: </span>
              {gender === "female" ? "Mujer" : "Hombre"}
            </p>
            <p>
              <span className="bold">Casa: </span>
              {house}
            </p>
          </section>
        </article>
      </div>
    </section>
  );
};

CharacterDetail.defaultProps = {
  character: {
    photo:
      "https://via.placeholder.com/210x295/ffffff/666666/?text=Información no disponible",
  },
};
CharacterDetail.propTypes = {
  character: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    isAlive: PropTypes.bool,
    specie: PropTypes.string,
    gender: PropTypes.string,
    house: PropTypes.string,
  }).isRequired,
};

export default CharacterDetail;
