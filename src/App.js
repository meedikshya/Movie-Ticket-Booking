import './App.css';
import {useQuery} from 'react-query';
import { MovieProvider } from './Components/Context';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import {Navbarr} from "./Components/Navbar";
import { HomeScreen } from './Pages/homeScreen';
import { DetailsScreen } from './Pages/detailsScreen';
import { Invoice } from './Pages/invoice';
import { Receipt } from './Pages/receipt';
import {Footer} from "./Components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

const apiKey = process.env.REACT_APP_SECRET_KEY;



const getMovies = async () => {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=Marvel`);

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
    <MovieProvider>
  <Router>
  <Navbarr />

  
  <Routes>
    <Route path='/' element={<HomeScreen moviesData={data} />} />
    <Route path="/detailsScreen/:imdbID" element={<DetailsScreen moviesData={data} />} />
    <Route path="/invoice/:imdbID/:selectedMovieName/:totalPrice/:ticketQuantity" element={<Invoice moviesData={data}/>} />
    <Route path='/receipt' element={<Receipt />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
  <Footer />
</Router>
</MovieProvider>
    </div>
  );
}
export default App;
