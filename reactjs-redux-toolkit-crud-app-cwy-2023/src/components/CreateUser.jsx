import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";

const CreateUser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email}));
    navigate('/');
  };

  return (
    <div>
        <h3>Add New User</h3>
        <Link to='/' style={{ textDecoration: 'none' }}>Back to Home</Link>
        <form onSubmit={handleSubmit} style={{ margin: '10px'}}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter Your Name..."
                  onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <label htmlFor="email">Email:</label>
                <input 
                  type="text" 
                  name="email" 
                  placeholder="Enter Your Email..." 
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div> 
            <br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CreateUser