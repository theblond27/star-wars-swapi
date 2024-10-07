import React from 'react'
import { useNavigate } from 'react-router-dom';

const ButtonPreviousPage = () => {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={goBack}
      className="relative px-6 py-3 mb-6 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-400 hover:text-black active:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
      Return to Previous Page
    </button>
  )
}

export default ButtonPreviousPage

