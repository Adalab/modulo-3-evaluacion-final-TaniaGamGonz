import "../styles/components/Filters.scss";
import PropTypes from "prop-types";

const Filters = ({
  setSelectedHouse,
  selectedHouse,
  setFilterName,
  filterName,
  selectedAncestry,
  setSelectedAncestry,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleInput = (ev) => {
    setFilterName(ev.currentTarget.value);
  };

  const handleSelectHouses = (ev) => {
    setSelectedHouse(ev.currentTarget.value);
  };
  const handleSelectAncestry = (ev) => {
    setSelectedAncestry(ev.currentTarget.value);
  };
  const handleReset = () => {
    setFilterName("");
    setSelectedHouse("gryffindor");
  };

  return (
    <section className="filters">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name" className="form__label">
          Buscar por personaje
          <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            onChange={handleInput}
            value={filterName}
            placeholder="Harry Potter"
          />
        </label>
        <label htmlFor="houses" className="form__label">
          Buscar por casa
          <select
            className="form__select"
            name="houses"
            id="houses"
            onChange={handleSelectHouses}
            value={selectedHouse}
          >
            <option value="gryffindor">Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="hufflepuff">Hufflepuff</option>
            <option value="ravenclaw">Ravenclaw</option>
          </select>
        </label>
        <label htmlFor="ancestry" className="form__label">
          Buscar por ancestros
          <select
            className="form__select"
            name="ancestry"
            id="ancestry"
            onChange={handleSelectAncestry}
            value={selectedAncestry}
          >
            <option value="">Cualquiera</option>
            <option value="pure-blood">Sangre pura</option>
            <option value="half-blood">Sangre mestiza</option>
            <option value="muggleborn">Sangre sucia</option>
          </select>
        </label>
        <button type="reset" onClick={handleReset} className="btn">
          Reinicia la búsqueda
        </button>
      </form>
    </section>
  );
};

Filters.defaultProps = {
  selectedHouse: "gryffindor",
};
Filters.propTypes = {
  setSelectedHouse: PropTypes.func.isRequired,
  selectedHouse: PropTypes.string.isRequired,
  setFilterName: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default Filters;
