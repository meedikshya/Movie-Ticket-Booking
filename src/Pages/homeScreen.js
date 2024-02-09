import React from 'react';
import { NavLink } from 'react-router-dom';
        
export const HomeScreen = ({ moviesData }) => {
console.log(moviesData);
        
if (!moviesData || !moviesData.Search || !Array.isArray(moviesData.Search)) {
  return <div></div>;
}
        
  return (
    <div>
       <section className="home container mt-2">
          <div className="row row-cols-1 row-cols-md-4 g-4">
              {moviesData.Search.slice(0, 8).map((movie) => (
                 <div key={movie.imdbID} className="col">
                      <NavLink to={`detailsScreen/${movie.imdbID}`} className="card text-decoration-none">
                        <div className="card-body">
                          <img src={movie.Poster} alt={movie.imdbID} className="img-fluid mb-3" />
                          <h5 className="card-title">{movie.Title}</h5>
                          <p className="card-text">{movie.Year}</p>
                        </div>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          );
        };