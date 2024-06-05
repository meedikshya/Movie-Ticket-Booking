import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomeScreen = ({ moviesData }) => {
  console.log(moviesData);

  if (!moviesData || !moviesData.Search || !Array.isArray(moviesData.Search)) {
    return <div></div>;
  }

  return (
    <div className="container mt-4">
      <style>
        {`
          /* Card styling */
          .movie-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: none;
          }

          .movie-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          /* Image styling */
          .card-img-top {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
            max-height: 300px;
            object-fit: cover;
          }

          /* Card body styling */
          .card-body {
            background-color: #f8f9fa;
            text-align: center;
          }

          .card-title {
            color: #333;
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }

          .card-text {
            color: #777;
            font-size: 0.9rem;
            margin-bottom: 0;
          }

          /* Responsive styling */
          @media (max-width: 768px) {
            .movie-card {
              margin-bottom: 1rem;
            }

            .card-img-top {
              max-height: 200px;
            }
          }
        `}
      </style>
      <section className="home">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {moviesData.Search.slice(0, 8).map((movie) => (
            <div key={movie.imdbID} className="col">
              <NavLink to={`detailsScreen/${movie.imdbID}`} className="card text-decoration-none movie-card">
                <img src={movie.Poster} alt={movie.imdbID} className="card-img-top img-fluid" />
                <div className="card-body">
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

export default HomeScreen;
