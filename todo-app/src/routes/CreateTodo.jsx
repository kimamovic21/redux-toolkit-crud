import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

const CreateTodo = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = { 
        id: new Date().getTime().toString(),
        title: title, 
        completed: false, 
    };
    dispatch(addTodo(newTodo));
    navigate('/todos');
  };

  return (
    <div>
      <Link to='/todos' className='text-blue-700'>Back to Todo List</Link>
      <h2 className='mt-4'>Create Todo</h2>
      <form onSubmit={handleSubmit} className='mt-4'>
        <label className='mr-2'>Title:</label>
        <input 
          className='mr-2 p-2 rounded-md'
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required 
        />
        <button 
          type="submit" 
          className=' bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600'
        >
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
