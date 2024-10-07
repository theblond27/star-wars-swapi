import { getPilot } from '@/adapters/people';
import ButtonPreviousPage from '@/components/DS/ButtonPreviousPage';
import Spinner from '@/components/DS/Spinner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Pilote = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pilot, setPilote] = useState();

  useEffect(() => {
    getPilot(id).then((data) => {
      setPilote(data);
      setIsLoading(false);
    })
  }, []);

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {isLoading ? (
        <Spinner />
        ) : (
        <div className='p-6'>
          <ButtonPreviousPage />
          <div className='flex justify-center items-center'>
            <Card key={pilot.name} className='w-[380px] text-center h-[400px] bg-gray-800 rounded-lg shadow-lg border border-yellow-500'>
              <CardHeader className='p-4'>
                <CardTitle className='text-yellow-300 text-2xl'>{pilot.name}</CardTitle>
              </CardHeader>
              <CardContent className='text-gray-300 space-y-2'>
                <p>Height: {pilot.height}</p>
                <p>Mass: {pilot.mass}</p>
                <p>Eye Color: {pilot.eye_color}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
};

export default Pilote;
