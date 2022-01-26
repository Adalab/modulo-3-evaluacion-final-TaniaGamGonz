import "../styles/App.scss";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import getByHouse from "../services/callToApi";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";

function App() {
  //States
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState("gryffindor");
  const [filterName, setFilterName] = useState("");
  //UseEffect
  useEffect(() => {
    getByHouse(selectedHouse).then((response) => {
      setListOfCharacters(response);
    });
  }, [selectedHouse]);

  const charactersFiltered = listOfCharacters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  //Render functions
  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.name;
    const foundCharacter = listOfCharacters.find(
      (character) => character.name === routeId
    );
    return <CharacterDetail character={foundCharacter} />;
  };
  //Handler functions

  return (
    <div>
      <header>
        <h1>Harry Potter </h1>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Filters
              setSelectedHouse={setSelectedHouse}
              selectedHouse={selectedHouse}
              filterName={filterName}
              setFilterName={setFilterName}
            />
            <CharacterList characters={charactersFiltered} />
          </Route>
          <Route path="/character/:name" render={renderCharacterDetail}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
