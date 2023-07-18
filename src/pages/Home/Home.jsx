import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import main from "../../Coffe-img/main.png";
import "../../css/home.css";

export const Home = () => {
  return (
    <Container className="mt-4">
      <div className="home-container">
        <div className="row">
          <div>
            <h1 className="font-weight-bold">
              Start your day
              <br />
              with coffee
            </h1>
            <p className="text-grey">
              The warmth of our environment awaits you to make each cup an
              unforgettable moment
            </p>
            <Link to="/registro" className="btn btn-outline-info mt-3">
              Crea tu cuenta
            </Link>
          </div>
          <div>
            <img src={main} alt="portada1" />
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2 parrafito text-grey">
            <p>
              Aprende desarrollo web con HTML5, CSS y JavaScript. Backend con
              Python. React, Go, Laravel. Desarrollo móvil con Android, Flutter
              y mucho más. <b>Desde tu casa.</b>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
