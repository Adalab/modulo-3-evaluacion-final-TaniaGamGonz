const translateSpecie = (specie, gender) => {
  if (specie === "human" && gender === "female") {
    return "Humana";
  } else if (specie === "human" && gender === "male") {
    return "Humano";
  } else if (specie === "half-giant") {
    return "Medio gigante";
  } else if (specie === "werewolf") {
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

export default translateSpecie;
