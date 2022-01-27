import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/components/CharacterDetail.scss";
import translateSpecie from "../services/translateSpecies";
import gryffindorLogo from "../images/gryffindor.png";
import slytherinLogo from "../images/slytherin.png";
import hufflepuffLogo from "../images/hufflepuff.png";
import ravenclawLogo from "../images/ravenclaw.png";
import noFoto from "../images/invisible.png";
import dead from "../images/rip.png";

const CharacterDetail = ({ character }) => {
  const { photo, name, isAlive, specie, gender, house } = character;
  const setIconHouse = (house) => {
    if (house === "Gryffindor") {
      return gryffindorLogo;
    } else if (house === "Slytherin") {
      return slytherinLogo;
    } else if (house === "Hufflepuff") {
      return hufflepuffLogo;
    } else if (house === "Ravenclaw") {
      return ravenclawLogo;
    } else {
      return null;
    }
  };

  return (
    <section className="detail">
      <div>
        <Link to="/" className="detail__link">
          Volver
        </Link>
        <article className="detail__article">
          <img
            src={setIconHouse(house)}
            alt=""
            className={`detail__house-icon ${house ? null : "hidden"}`}
          />
          <img
            src={dead}
            alt=""
            class={`detail__dead-icon ${isAlive ? "hidden" : null}`}
          />
          <img
            src={photo || noFoto}
            alt={name}
            title={name}
            className={`detail__img ${isAlive ? null : "dead"}`}
          />
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
