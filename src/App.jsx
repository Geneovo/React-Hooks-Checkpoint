import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import Inception from './assets/Inception.jpg';
import Interstellar from './assets/Interstellar.jpg';

const App = () => {
  // Movie list state
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A 2010 science fiction action thriller film directed by Christopher Nolan, starring Leonardo DiCaprio as a thief who steals information by infiltrating the subconscious through shared dream states, who is then tasked with the reverse, planting an idea into a target's mind.",
      poster: Inception,
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      rating: 4.8
    },
    {
      title: "Interstellar",
      description: "A 2014 science fiction epic film directed by Christopher Nolan, set in a future where Earth is facing environmental collapse, and a team of explorers, led by a former NASA pilot, must embark on a journey through a wormhole to find a new home for humanity.",
      poster: Interstellar,
      trailer: "https://www.youtube.com/watch?v=CbLTeD-Rfug",
      rating: 4.8
    }
  ]);

  // State for filtered movies
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Function to add a new movie
  const addMovie = (newMovie) => {
    const trimmedTitle = newMovie.title.trim();

    if (movies.some(movie => movie.title.trim().toLowerCase() === trimmedTitle.toLowerCase())) {
      alert("Movie already exists!");
      return;
    }

    const updatedMovies = [...movies, { ...newMovie, title: trimmedTitle }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  // Function to filter movies
  const filterMovies = (title, rating) => {
    const trimmedTitle = title.trim().toLowerCase();
    const numericRating = rating ? parseFloat(rating) : null;

    const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(trimmedTitle) &&
        (numericRating ? movie.rating >= numericRating : true)
    );

    setFilteredMovies(filtered);
};

  return (
    <div className='bg-black text-white min-h-screen flex flex-col items-center'>
    <h1 className='text-4xl font-bold mt-8 text-red-600 text-center'>Movie App</h1>
    <div className='w-full max-w-screen-xl mx-auto p-6 flex flex-col gap-6'>
      <Filter onFilter={filterMovies} />
      <AddMovie onAdd={addMovie} />
    </div>
    <Routes>
      <Route path="/" element={<MovieList movies={filteredMovies} />} />
      <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
      
    </Routes>
  </div>
  );
}

export default App;
