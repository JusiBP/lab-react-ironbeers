import axios from 'axios';

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

class BeerService {
    getBeers(){
        return axios.get(apiUrl); 
     }

    getBeer(idBeer){
        return axios.get(apiUrl + "/" + idBeer)
    }

    randomBeer(){
        return axios.get(apiUrl + "/random")
    }
 }

 
 const beerServ = new BeerService();
 

 export default beerServ;