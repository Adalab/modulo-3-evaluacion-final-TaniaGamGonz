import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CharacterDetail = ({ character }) => {
  const { photo, name, isAlive, specie, gender, house } = character;
  const getSpecie = (specie) => {
    if (specie === "human" && gender === "female") {
      return "Humana";
    } else if (specie === "human" && gender === "male") {
      return "Humano";
    } else if (specie === "half-giant") {
      return "Medio gigante";
    } else if (specie === "werefolf") {
      return "Licántropo";
    } else if (specie === "cat") {
      return "Gata";
    } else if (specie === "goblin") {
      return "Duende";
    } else if (specie === "owl") {
      return "Lechuza";
    } else if (specie === "ghost") {
      return "Fantasma";
    } else if (specie === "poltergeist") {
      return "Aparición";
    } else if (specie === "three-headed dog") {
      return "Cerbero";
    } else if (specie === "dragon") {
      return "Dragón";
    } else if (specie === "centaur") {
      return "Centauro";
    } else if (specie === "house-elf") {
      return "Elfo doméstico";
    } else if (specie === "acromantula") {
      return "Acromántula";
    } else if (specie === "hipogriff") {
      return "Hipogrifo";
    } else if (specie === "giant") {
      return "Gigante";
    } else if (specie === "vampire") {
      return "Vampiro";
    }
  };

  return (
    <section>
      <Link to="/">Volver</Link>
      <article>
        <img src={photo} alt={name} title={name} />
        <div>
          <p>{name}</p>
          <p>
            <span>Estatus: </span>
            {isAlive ? "Vivo" : "Muerto"}
          </p>
          <p>
            <span>Especie: </span>
            {getSpecie(specie)}
          </p>
          <p>
            <span>Genero: </span>
            {gender === "female" ? "Mujer" : "Hombre"}
          </p>
          <p>
            <span>Casa: </span>
            {house}
          </p>
        </div>
      </article>
    </section>
  );
};

//CharacterDetail.propTypes = {};

export default CharacterDetail;
