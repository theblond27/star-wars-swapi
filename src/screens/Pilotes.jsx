import { listPeoples } from '@/adapters/people';
import ButtonPreviousPage from '@/components/DS/ButtonPreviousPage';
import Spinner from '@/components/DS/Spinner';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Pilotes = ({ }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [peoples, setPeoples] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;

  useEffect(() => {
    fetchPeoples(currentPage)
  }, [currentPage]);

  const handlePageChange = (newPageUrl) => {
    const urlParams = new URLSearchParams(newPageUrl.split('?')[1]);
    const page = urlParams.get('page');
    setSearchParams({ page });
  };

  const fetchPeoples = async (page) => {
    setIsLoading(true);
    try {
      const data = await listPeoples(page);
      setPeoples(data.results);
      setNextPage(data.next);
      setPreviousPage(data.previous);
    } catch (error) {
      console.error('Error fetching pilotes:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 max-w-5xl rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-yellow-400 text-3xl font-bold text-center mb-4">Planets - Page {currentPage}</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className='p-6'>

            <ButtonPreviousPage />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {peoples.map((people) => (
                <li
                  key={people.name}
                  className="relative bg-gray-700 p-6 rounded-lg shadow-md border border-yellow-500 transition transform hover:scale-105 h-64 w-full lg:max-w-[350px] mx-auto"
                >
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                    {people.name}
                  </h3>
                  <p>Height: {people.height}</p>
                  <p>Mass: {people.mass}</p>
                  <p>Eye Color: {people.eye_color}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button onClick={() => previousPage && handlePageChange(previousPage)}
            className={`px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition ${!previousPage ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!previousPage}
          >
            Previous
          </button>

          <button onClick={() => nextPage && handlePageChange(nextPage)}
            className={`px-6 py-2 rounded-lg bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition ${!nextPage ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pilotes