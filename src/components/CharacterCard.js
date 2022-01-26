//import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

const CharacterCard = ({ photo, name, specie }) => {
  return (
    <Link to={`/character/${name}`}>
      <article>
        <img
          src={
            photo ||
            `https://via.placeholder.com/210x295/ffffff/666666/?text=${name}`
          }
          alt={name}
          title={name}
        />
        <section>
          <p>{name}</p>
          <p>{specie}</p>
        </section>
      </article>
    </Link>
  );
};

//CharacterCard.propTypes = {};

export default CharacterCard;
