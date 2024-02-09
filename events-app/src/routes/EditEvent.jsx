import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEvent } from '../redux/eventsSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const event = useSelector((state) => state.events.events.find((e) => e.id === id));

  const [eventData, setEventData] = useState(event);

  useEffect(() => {
    setEventData(event);
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(updateEvent({ id, updatedEvent: eventData }));
    navigate('/events');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md mb-4">
      <Link 
        className='text-blue-500 hover:underline'
        to='/events' 
      >
        Back to Events
      </Link>
      <h2 className="mt-4 text-2xl font-semibold mb-4">Edit Event</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Event Title
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          placeholder="Event Title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
          Event Location
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          placeholder="Event Location"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Event Date
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          placeholder="Event Date"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          Event Image URL
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          name="image"
          value={eventData.image}
          onChange={handleChange}
          placeholder="Event Image URL"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Event Description
        </label>
        <textarea
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          placeholder="Event Description"
        ></textarea>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={handleSubmit}
      >
        Update Event
      </button>
    </div>
  );
};

export default EditEvent;
