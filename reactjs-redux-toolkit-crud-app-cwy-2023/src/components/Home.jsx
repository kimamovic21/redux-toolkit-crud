import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "../redux/userSlice";
import { FaUserAlt } from "react-icons/fa";

const Home = () => {
  const users = useSelector((state) => state.users); console.log(users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
    navigate('/');
  };

  return (
    <div>
        <h2>Redux Toolkit Crud App</h2>
        <Link to='/create' style={{ background: '#03a230c7', padding: '5px 10px',  textDecoration: 'none', color: 'white' }}>Create User <FaUserAlt/></Link>
        <table style={{ margin: '10px' }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td style={{ display: 'flex', gap: '5px' }}>
                                <Link 
                                    to={`/edit/${user.id}`} 
                                    style={{ backgroundColor: '#0929fa', color: '#fff', textDecoration: 'none', padding: '4px 7px' }}
                                >
                                    Edit
                                </Link>
                                <button 
                                    style={{ backgroundColor: 'red', color: 'white', border: 'none' , padding: '5px 10px' }}
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home