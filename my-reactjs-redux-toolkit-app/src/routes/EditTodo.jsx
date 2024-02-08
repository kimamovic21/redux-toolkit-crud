import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { editTodo } from '../redux/todosSlice';

const EditTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const todos = useSelector(state => state.todos);
  const todo = todos.find(todo => todo.id === id);

  const [title, setTitle] = useState(todo?.title);

  if (!todo) {
    return <div>Todo not found</div>;
  }

  const handleSubmit = e => {
    e.preventDefault();
    const updatedTodo = { ...todo, title };
    dispatch(editTodo({ id, updatedTodo }));
    navigate('/todos');
  };

  return (
    <div>
      <Link to='/todos' className='text-blue-700'>Back Todo List</Link>
      <h2 className='mt-4'>Edit Todo</h2>
      <form onSubmit={handleSubmit} className='mt-4'>
        <label className='mr-2'>Title:</label>
        <input 
          className='p-2 mr-2 rounded-md'
          type="text" 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          required 
        />
        <button 
          type="submit"
          className=' bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600'
        >
            Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
