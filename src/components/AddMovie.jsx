import React, { useState } from 'react'

// This component adds new movies to the list
const AddMovie = ({ onAdd }) => {
    const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        poster: '',
        rating: ''
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
    
        if (name === "rating") {
            value = parseFloat(value); // Convert to a number
            if (value < 1) value = 1;
            if (value > 10) value = 10;
        }
    
        setNewMovie({ ...newMovie, [name]: value });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Trim values to prevent empty spaces as input
        const trimmedMovie = {
            ...newMovie,
            title: newMovie.title.trim(),
            description: newMovie.description.trim(),
            poster: newMovie.poster.trim(),
        };
    
        if (!trimmedMovie.title || !trimmedMovie.description || !trimmedMovie.poster) {
            alert("All fields must contain valid input!");
            return;
        }
    
        onAdd(trimmedMovie);
        setNewMovie({ title: '', description: '', poster: '', rating: 1 });
    };
    

  return (
    <form 
        onSubmit={handleSubmit} 
        className='flex flex-col sm:flex-row gap-2 sm:gap-4 w-full'
    >
        <input 
            name='title'
            value={newMovie.title}
            placeholder='Title'
            onChange={handleChange}
            required
            className='bg-gray-600 text-white p-3 rounded-lg focus:outline-none w-full sm:w-auto' 
        />
        <input 
            name='description'
            value={newMovie.description}
            placeholder='Description'
            onChange={handleChange}
            required
            className='bg-gray-600 text-white p-3 rounded-lg focus:outline-none w-full sm:w-auto' 
        />
        <input 
            name='poster'
            type='url'
            value={newMovie.poster}
            placeholder='Poster URL'
            onChange={handleChange}
            required
            className='bg-gray-600 text-white p-3 rounded-lg focus:outline-none w-full sm:w-auto' 
        />
        <input 
            name='rating'
            value={newMovie.rating}
            type='number'
            placeholder='Rating'
            onChange={handleChange}
            min="1"
            max="10"
            step="0.1"
            required
            className='bg-gray-600 text-white p-3 rounded-lg focus:outline-none w-full sm:w-auto' 
        />
        <button 
            type='submit' 
            className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 w-full sm:w-auto'
        >
            Add Movie
        </button>
    </form>
  )
}

export default AddMovie