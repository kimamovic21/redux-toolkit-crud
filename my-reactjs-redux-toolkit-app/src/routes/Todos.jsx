import { Link } from 'react-router-dom';
import { FaCheck, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todosSlice';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({ id }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <Link to='/' className='text-blue-700'>
        Back to Home
      </Link>
      <h2 className='text-4xl mt-4'>Todo List</h2>
      <ul>
        {todos?.length === 0 ? (
          <li className='mt-4'>
            <p>You do not have todos. Try to add some...</p>
          </li>
        ) : (
          todos?.map((todo) => (
            <li key={todo.id} className='mt-4 border flex justify-between md:w-[70%] lg:w-[50%]'>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                className='mr-5 p-2'
              >
                {todo?.title}
              </span>

              <div className='flex justify-center items-center p-2 gap-2 '>
                <button className='mr-2' onClick={() => handleToggleComplete(todo.id)}>
                  <FaCheck color='green' size={20} />
                </button>
                <Link className='mr-2' to={`/edittodo/${todo?.id}`}>
                  <FaPencilAlt color='blue' size={20} />
                </Link>
                <button onClick={() => handleDeleteTodo(todo?.id)}>
                  <FaTrash color='red' size={20} />
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      <div className='mt-5'>
        <Link
          to='/createtodo'
          className=' bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600'
        >
          Create Todo
        </Link>
      </div>
    </div>
  );
};

export default Todos;
