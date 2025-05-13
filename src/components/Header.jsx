import { Link } from "react-router-dom";
import pop from "../Imgs/pop.jfif";

const Header = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col center">
          <img src={pop} alt="The Simpsons" width={100} />
        </div>
        <div className="col center">
          <ul className="list-unstyled d-flex gap-3 m-0">
            <li>
              <Link to="/" className="text-decoration-none btn btn-outline-light">Home</Link>
            </li>
            <li>
              <Link to="/Family" className="text-decoration-none btn btn-outline-light">Family</Link>
            </li>
            <li>
              <Link to="/History" className="text-decoration-none btn btn-outline-light">History</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
