import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/eventsSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateEvent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addEvent({ id: new Date().getTime().toString(), ...data }));
    toast.success('Event successfully created!');
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
      <h2 className="mt-4 text-2xl font-semibold mb-4">Create Event</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Event Title
          </label>
          <input
            {...register("title", { required: true })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.title ? 'border-red-500' : 'focus:border-blue-500'}`}
            type="text"
            placeholder="Event Title"
          />
          {errors.title && <p className="text-red-500">Title is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Event Location
          </label>
          <input
            {...register("location", { required: true })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.location ? 'border-red-500' : 'focus:border-blue-500'}`}
            type="text"
            placeholder="Event Location"
          />
          {errors.location && <p className="text-red-500">Location is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Event Date
          </label>
          <input
            {...register("date", { required: true })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.date ? 'border-red-500' : 'focus:border-blue-500'}`}
            type="date"
            placeholder="Event Date"
          />
          {errors.date && <p className="text-red-500">Date is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Event Image URL
          </label>
          <input
            {...register("image", { required: true })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.image ? 'border-red-500' : 'focus:border-blue-500'}`}
            type="text"
            placeholder="Event Image URL"
          />
          {errors.image && <p className="text-red-500">Image URL is required</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Event Description
          </label>
          <textarea
            {...register("description", { required: true })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.description ? 'border-red-500' : 'focus:border-blue-500'}`}
            placeholder="Event Description"
          />
          {errors.description && <p className="text-red-500">Description is required</p>}
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-200"
          type="submit"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
