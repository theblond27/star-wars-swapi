import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { retrieve } from '@/adapters/people';
import Spinner from '../DS/Spinner';

const Modal = ({ item }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [pilots, setPilots] = useState([]);

  const handlePilotClick = async (pilot) => {
    const pilotID = pilot.url.match(/\d+/)
    navigate(`/pilote/${pilotID[0]}`)
  };

  useEffect(() => {
    if (item.pilots && isOpen) {
      setPilots([]);
      retrieve(item.pilots).then((data) => {
        setPilots(data);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger>
        See more
      </DialogTrigger>
      {isLoading ? (
        <Spinner />
          ) : (
        <DialogContent className='min-w-max w-full max-w-md h-auto p-4 bg-gray-900 rounded-lg shadow-lg border border-yellow-500'>
          <DialogHeader>
            <DialogTitle className='text-2xl font-bold text-yellow-400'>Model: {item.model}</DialogTitle>
            <DialogDescription className='text-lg text-gray-300 mt-2'>
              <div className='space-y-1 mb-4'>
                <div>Crew: <span className='font-semibold'>{item.crew}</span></div>
                <div>Length: <span className='font-semibold'>{item.length}</span></div>
                <div>MGLT: <span className='font-semibold'>{item.MGLT}</span></div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className='overflow-auto max-h-[40vh]'>
            <ul className='pl-4 pr-4 space-y-2'>
              {pilots.map((pilot) => (
                <li key={pilot.name} className='bg-gray-800 p-3 rounded-lg shadow-md transition-transform hover:scale-105'>
                  <div onClick={() => handlePilotClick(pilot)} className='cursor-pointer'>
                    <h3 className='text-lg font-semibold text-yellow-300'>{pilot.name}</h3>
                    <div className='text-gray-300'>
                      Gender: <span className='font-semibold'>{pilot.gender}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
export default Modal;