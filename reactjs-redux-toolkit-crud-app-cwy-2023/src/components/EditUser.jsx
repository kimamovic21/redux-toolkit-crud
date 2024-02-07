import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { editUser } from "../redux/userSlice";

const EditUser = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    
    const existingUser = users.filter((user) => user.id == id);    
    console.log(existingUser);
    
    const { name, email } = existingUser[0];    
    console.log(name, email);

    const [updateName, setUpdateName] = useState(name);
    const [updateEmail, setUpdateEmail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editUser({
            id: id,
            name: updateName,
            email: updateEmail
        }))
        navigate('/'); 
    };

  return (
    <div>
        <h3>Edit User</h3>
        <Link to='/' style={{ textDecoration: 'none' }}>Back to Home</Link>
        <form onSubmit={handleEdit} style={{ margin: '10px' }}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Edit Your Name..."
                  value={updateName}
                  onChange={(e) => setUpdateName(e.target.value)}
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <label htmlFor="email">Email:</label>
                <input 
                  type="text" 
                  name="email" 
                  placeholder="Edit Your Email..." 
                  value={updateEmail}
                  onChange={(e) => setUpdateEmail(e.target.value)}
                />
            </div> 
            <br />
            <button>Save Changes</button>
        </form>
    </div>
  )
}

export default EditUser