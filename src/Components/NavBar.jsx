import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav className="navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/allBeers">All Beers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/randomBeer">Random Beer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/newBeer">New Beer</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar;


