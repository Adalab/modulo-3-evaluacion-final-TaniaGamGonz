import "../styles/components/NotFound.scss";
import { Link } from "react-router-dom";
import notFoundGif from "../images/gifHarry.gif";

const NotFound = () => {
  return (
    <section className="not-found">
      <p className="not-found__text">
        Vaya, parece ser que ninguno de nuestros personajes coincide con tu
        búsqueda, ¿porqué no lo intentas de nuevo?
      </p>
      <Link to="/" className="not-found__link link">
        Volver al inicio
      </Link>
      <img src={notFoundGif} alt="not found" className="not-found__img" />
    </section>
  );
};

NotFound.propTypes = {};

export default NotFound;
