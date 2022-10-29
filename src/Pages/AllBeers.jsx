import beerServ from "../Services/BeerServices"
import { useEffect } from "react";
import { useState } from "react";
import BeerCard from "../Components/BeerCard";


function AllBeers(){

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        beerServ.getBeers()
        .then (result =>{
            setBeers(result.data)
        })
    },[])
   

    return(
        
        <div className="container divAllB">
            <div className="row justify-content-center">
            {beers.map(beer => {
                return <BeerCard beer={beer} key={beer._id}/>
            })}  
            </div>
        </div>
        
       
    );
}

export default AllBeers;