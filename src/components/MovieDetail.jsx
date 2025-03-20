import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// This component will display the selected movie's description and trailer
const MovieDetail = ({ movies }) => {
    const { title } = useParams();
    const navigate = useNavigate();

    // Find the selected movie
    const movie = movies.find(m => m.title.toLowerCase() === title.toLowerCase());

    if (!movie) {
        return <h2 className="text-white text-center">Movie not found</h2>;
    }

    return (
        <div className="flex flex-col items-center p-6">
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            <p className="text-gray-300 mt-2">{movie.description}</p>
            <iframe
                className="mt-4 w-full max-w-2xl h-64"
                src={movie.trailer.replace("watch?v=", "embed/")}
                title="Movie Trailer"
                allowFullScreen
            ></iframe>
            <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg">
                Back to Home
            </button>
        </div>
    );
};

export default MovieDetail;
