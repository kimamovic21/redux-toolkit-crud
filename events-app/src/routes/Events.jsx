import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../redux/eventsSlice';
import Modal from '../components/Modal';

const Events = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDelete = (eventId) => {
    setSelectedEvent(eventId);
    setIsModalVisible(true);
  };

  const handleYes = () => {
    dispatch(deleteEvent(selectedEvent));
    setIsModalVisible(false);
  };

  const handleNo = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md mb-4">
      <div className="mb-4 flex justify-between items-center">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>

      <div className='flex justify-between items-baseline'>
        <h2 className="text-3xl font-bold mb-6">All Events</h2>
        <div className='mt-6'>
          <Link 
            className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-200'
            to='/events/create' 
          >
            Create Event
          </Link>
        </div> 
      </div>

      {events.length === 0 ? (
        <p className="text-gray-600">You don&apos;t have any events. Add some!</p>
      ) : (
        <div className="grid gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-gray-100 p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.location}</p>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <img 
                className="w-full h-48 object-cover mb-4" 
                src={event.image} 
                alt={event.title} 
              />
              <p className="text-gray-700 mb-4">{event.description}</p>

              <div className="flex justify-between items-center">
                <Link 
                  to={`/events/edit/${event.id}`} 
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-200"
                >
                  Edit Event
                </Link>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-500 text-white cursor-pointer hover:bg-red-600 rounded-md duration-200 px-4 py-2"
                >
                  Delete Event
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal 
        isVisible={isModalVisible} 
        onYes={handleYes} 
        onNo={handleNo} 
      />
    </div>
  );
};

export default Events;
