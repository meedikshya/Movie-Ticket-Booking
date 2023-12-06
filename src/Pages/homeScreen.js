import React from 'react';
import { NavLink } from 'react-router-dom';

export const HomeScreen = ({moviesData}) => {

    console.log(moviesData)

    if (!moviesData || !moviesData.Search || !Array.isArray(moviesData.Search)) {
        return <div></div>;
      }
  return (
    <div>
    <section className='home'>
      <div className='grid grid-4-col'>
        {moviesData.Search.slice(0, 3).map((movie) => (
          <NavLink key={movie.imdbID} to={`detailsScreen/${movie.imdbID}`}>
          <div className='card'>
            <div className='cardDetails'>
            <img src={movie.Poster} alt={movie.imdbID} />
            <p>
            {movie.Title}
            <br /> 
            {movie.Year}
            </p>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </section>
  </div>
);
        }



