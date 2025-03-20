import React from 'react';
import { Link } from 'react-router-dom';

// This component displays a movie card with its title, description, poster, and rating
const MovieCard = ({ movie }) => {
    return (
        <div className="flex flex-col sm:flex-row bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg w-full max-w-xl p-4">
            {/* Left: Movie Poster */}
            <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full sm:w-40 h-60 object-cover rounded-lg"
            />

            {/* Right: Movie Info */}
            <div className="sm:ml-8 mt-4 sm:mt-0 flex flex-col justify-between w-full p-4">
                <Link to={`/movie/${encodeURIComponent(movie.title)}`} className="text-xl font-bold text-blue-400 hover:underline">
                    {movie.title}
                </Link>
                <p className="text-sm text-gray-300 mt-2">{movie.description}</p>
                <span className="text-yellow-400 font-semibold mt-2">⭐ {movie.rating}</span>
            </div>
        </div>
    );
};

export default MovieCard;
