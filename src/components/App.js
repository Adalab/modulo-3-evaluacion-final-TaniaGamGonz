import "../styles/App.scss";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import getByHouse from "../services/callToApi";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import logo from "../images/logoHarry.png";
import NotFound from "./NotFound";

function App() {
  //States
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState("gryffindor");
  const [filterName, setFilterName] = useState("");
  const [selectedAncestry, setSelectedAncestry] = useState("");
  //UseEffect
  useEffect(() => {
    getByHouse(selectedHouse).then((response) => {
      setListOfCharacters(response);
    });
  }, [selectedHouse]);

  const charactersFiltered = listOfCharacters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (selectedAncestry !== "") {
        return character.ancestry === selectedAncestry;
      }
      return character;
    });

  //Render functions
  const renderCharacterDetail = (props) => {
    const routeId = props.match.params.name;
    const foundCharacter = listOfCharacters.find(
      (character) => character.name === routeId
    );
    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <NotFound />;
    }
  };
  //Handler functions

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="titulo" className="header__logo" />
        <h1>Buscador de personajes de la saga </h1>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Filters
              setSelectedHouse={setSelectedHouse}
              selectedHouse={selectedHouse}
              filterName={filterName}
              setFilterName={setFilterName}
              selectedAncestry={selectedAncestry}
              setSelectedAncestry={setSelectedAncestry}
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
