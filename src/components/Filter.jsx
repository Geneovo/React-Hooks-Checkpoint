import React, { useState } from 'react'

// This component filters movies by title and rating
const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleFilter = () => {
        onFilter(title.toLowerCase(), rating || 0); // Ensures case-insensitive search and prevents empty rating issues
    };

  return (
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 w-full'>
        <input
            type='text'
            placeholder='Filter by title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='bg-gray-600 text-white p-3 rounded-lg focus:outline-none w-full sm:w-auto'
        />
        <input
            type='number'
            placeholder='Filter by rating'
            value={rating}
            min="1"
            max="10"
            step="0.1"
            onChange={e => setRating(Number(e.target.value))}
            className='bg-gray-600 text-white p-3 rounded-lg focus:outline-none w-full sm:w-auto'
        />
        <button onClick={handleFilter} className='bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700 w-full sm:w-auto'>Filter</button>
    </div>
  )
}

export default Filter