import React from 'react';
import MovieCard from './MovieCard';

// This component maps through the movies array and renders MovieCard component for each movie
const MovieList = ({ movies }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg px-5 sm:px-0 py-8">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
