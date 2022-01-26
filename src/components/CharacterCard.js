//import PropTypes from 'prop-types';

const CharacterCard = ({ photo, name, specie }) => {
  return (
    <a>
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
    </a>
  );
};

//CharacterCard.propTypes = {};

export default CharacterCard;
