import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [selectedMovieData, setSelectedMovieData] = useState({
    selectedMovieName: '',
    totalPrice: 0,
    ticketQuantity: 0,
    imdbID: '',
  });

  const updateSelectedMovieData = (data) => {
    setSelectedMovieData(data);
  };

  return (
    <MovieContext.Provider value={{ selectedMovieData, updateSelectedMovieData }}>
      {children}
    </MovieContext.Provider>
  );
};

