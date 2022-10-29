import '../App.css';
import beerServ from "../Services/BeerServices"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function SingleBeer(){

    const {idBeer} = useParams();
    const [beer, setBeer] = useState({})
    

    useEffect(()=>{
        beerServ.getBeer(idBeer)
        .then (result =>{
            setBeer(result.data)
        })
    }, [])
   

    return(
        <div className="row singleBeer align-items-center justify-content-center" >
            <div className="col-6">
                <img src={beer.image_url} className="card-img-top cardImageSingle" alt={beer.name}/>
            </div>
            <div className="card-body col-6 singleBeerCard">
                <h4 className="card-title"><b>{beer.name}</b></h4>
                <p className="card-text "><small>{beer.tagline}</small></p>
                <p className="card-text"><b>Description:</b> {beer.description}</p>
                <p className="card-text"><b>First Brewed:</b> {beer.first_brewed}</p>
            </div>
        </div>
    );
}

export default SingleBeer;

