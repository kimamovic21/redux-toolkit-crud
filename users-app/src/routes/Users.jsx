import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/usersSlice';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteUser(selectedUserId));
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Users</h2>
        <Link to="/users/create" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 duration-200">
          Create User
        </Link>
      </div>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              <strong>{user.firstName} {user.lastName}</strong> - {user.email}
              <div className="mt-2">
                <Link to={`/users/edit/${user.id}`} className="text-blue-500 mr-2">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Users;
