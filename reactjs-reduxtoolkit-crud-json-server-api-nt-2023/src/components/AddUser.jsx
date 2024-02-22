import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../redux/action';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('staff');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = { name, email, phone, role };
    dispatch(createUser(userObj));
    console.log(userObj);
    navigate('/user');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h2>Add User</h2>
        </div>

        <div>
          <div style={{ padding: '5px'}}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div style={{ padding: '5px'}}>
            <label htmlFor="name">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div style={{ padding: '5px'}}>
            <label htmlFor="name">Number</label>
            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div style={{ padding: '5px'}}>
            <label htmlFor="name">Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        <div>
          <button type='submit'>Submit</button>
          <Link to='/user'>Back</Link>
        </div>
      </div>
    </form>
  )
}

export default AddUser