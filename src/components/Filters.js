import PropTypes from "prop-types";

const Filters = ({
  setSelectedHouse,
  selectedHouse,
  setFilterName,
  filterName,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleInput = (ev) => {
    setFilterName(ev.currentTarget.value);
  };

  const handleSelect = (ev) => {
    setSelectedHouse(ev.currentTarget.value);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Buscar por personaje
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInput}
            value={filterName}
          />
        </label>
        <select
          name="houses"
          id="houses"
          onChange={handleSelect}
          value={selectedHouse}
        >
          Selecciona la casa
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
        </select>
      </form>
    </section>
  );
};

Filters.propTypes = {};

export default Filters;
