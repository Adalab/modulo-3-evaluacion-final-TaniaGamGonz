import "../styles/components/Filters.scss";
import PropTypes from "prop-types";

const Filters = ({
  setSelectedHouse,
  selectedHouse,
  setFilterName,
  filterName,
  filterSpecie,
  setFilterSpecie,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleInput = (ev) => {
    setFilterName(ev.currentTarget.value);
  };
  const handleInputSpecie = (ev) => {
    setFilterSpecie(ev.currentTarget.value);
  };

  const handleSelect = (ev) => {
    setSelectedHouse(ev.currentTarget.value);
  };
  const handleReset = () => {
    setFilterName("");
    setSelectedHouse("gryffindor");
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="form">
        <div>
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
          <label htmlFor="specie" className="form__label">
            Buscar por personaje
            <input
              className="form__input"
              type="text"
              name="specie"
              id="specie"
              onChange={handleInputSpecie}
              value={filterSpecie}
              placeholder="Human"
            />
          </label>

          <label htmlFor="houses" className="form__label">
            Buscar por casa
            <select
              className="form__select"
              name="houses"
              id="houses"
              onChange={handleSelect}
              value={selectedHouse}
            >
              <option value="gryffindor">Gryffindor</option>
              <option value="slytherin">Slytherin</option>
              <option value="hufflepuff">Hufflepuff</option>
              <option value="ravenclaw">Ravenclaw</option>
            </select>
          </label>
          <button type="reset" onClick={handleReset} className="btn">
            Reinicia la búsqueda
          </button>
        </div>
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
