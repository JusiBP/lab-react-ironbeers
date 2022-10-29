import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import AllBeers from './Pages/AllBeers';
import RandomBeer from './Pages/RandomBeer';
import NewBeer from './Pages/NewBeer';
import SingleBeer from './Pages/SingleBeer';

function App() {

  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/allBeers" element={ <AllBeers /> } />
      <Route path="/randomBeer" element={ <RandomBeer /> } />
      <Route path="/newBeer" element={ <NewBeer /> } />
      <Route path="/:idBeer" element={ <SingleBeer /> } />
    </Routes>
    </div>
  );
}

export default App;
