import beerServ from "../Services/BeerServices"
import { useEffect } from "react";
import { useState } from "react";

function RandomBeer(){

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(()=>{
        beerServ.randomBeer()
        .then (result => {
            setRandomBeer (result.data)
        })
    }, [])

    return(
        <div className="row singleBeer align-items-center justify-content-center" >
            <div className="col-6">
                <img src={randomBeer.image_url} className="card-img-top cardImageSingle" alt={randomBeer.name}/>
            </div>
            <div className="card-body col-6 singleBeerCard">
                <h4 className="card-title"><b>{randomBeer.name}</b></h4>
                <p className="card-text "><small>{randomBeer.tagline}</small></p>
                <p className="card-text"><b>Description:</b> {randomBeer.description}</p>
                <p className="card-text"><b>First Brewed:</b> {randomBeer.first_brewed}</p>
            </div>
        </div>
    );
}

export default RandomBeer;