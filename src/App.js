import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {useQuery} from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Navbarr} from "./Components/Navbar";
import { HomeScreen } from './Pages/homeScreen';
import { DetailsScreen } from './Pages/detailsScreen';
import { Invoice } from './Pages/invoice';

const apiKey = process.env.REACT_APP_SECRET_KEY;

const getMovies = async () => {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=Marvel`);
  return res.json();
};


function App() {
  const {data, error, isLoading} = useQuery('movies', getMovies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log('API Response:', data);

  
  return ( 
    <div className="App">
<Router>
  <Navbarr />
  <Routes>
    <Route path='/' element={<HomeScreen moviesData={data} />} />
    <Route path="/detailsScreen/:imdbID" element={<DetailsScreen />} />
    <Route path="/invoice" element={<Invoice />} />
  </Routes>
</Router>

    </div>

  );
}

export default App;
