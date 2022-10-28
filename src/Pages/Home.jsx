import image1 from "../assets/beers.png"
import image2 from "../assets/random-beer.png"
import image3 from "../assets/new-beer.png"
import { Link } from "react-router-dom";
import '../App.css';

function Home(){
    return(
        <div className = "home">
            <div className = "divHome">
                <Link to="/allBeers"><img className = "imgHome" src = {image1} alt= "All Beers"/></Link>
                <Link className="text-decoration-none" to="/allBeers"><h2 className = "titleHome">All Beers</h2></Link>
                <p>Discover all the beers we have!</p>
            </div>
            <div className = "divHome">
                <Link to="/randomBeer"><img className = "imgHome" src = {image2} alt= "Random Beer"/></Link>
                <Link className="text-decoration-none" to="/randomBeer"><h2 className = "titleHome">Random Beer</h2></Link>
                <p>Discover all the beers we have!</p>
            </div>
            <div className = "divHome">
                <Link to="/newBeer"><img className = "imgHome" src = {image3} alt= "New Beer"/></Link>
                <Link className="text-decoration-none" to="/newBeer"><h2 className = "titleHome">New Beer</h2></Link>
                <p>Discover all the beers we have!</p>
            </div>
        </div>
    );
}

export default Home;