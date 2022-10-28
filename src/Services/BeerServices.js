import axios from 'axios';

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";

class BeerService {
    getBeers(){
        return axios.get(apiUrl); 
     }
 }
 
 const beerServ = new BeerService();
 

 export default beerServ;