import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, fetchUserObj } from '../redux/action';

const UpdateUser = () => {
  const [id, setId ] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('staff');

  const { code } = useParams();
  const userObj = useSelector((state) => state.user.userObj);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = { id, name, email, phone, role };
    dispatch(editUser(userObj, id));
    console.log(userObj);
    navigate('/user');
  };

  useEffect(() => {
    dispatch(fetchUserObj(code)) // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (userObj) {
      setId(userObj.id);
      setName(userObj.name);
      setEmail(userObj.email);
      setPhone(userObj.phone);
      setRole(userObj.role);
    }
  }, [userObj]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h2>Add User</h2>
        </div>

        <div>
          <div style={{ padding: '5px'}}>
            <label htmlFor="id">Id</label>
            <input type="text" value={id || ''} disabled/>
          </div>
          <div style={{ padding: '5px'}}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name || ''} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div style={{ padding: '5px'}}>
            <label htmlFor="email">Email</label>
            <input type="email" value={email || ''} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div style={{ padding: '5px'}}>
            <label htmlFor="number">Number</label>
            <input type="number" value={phone || ''} onChange={(e) => setPhone(e.target.value)}/>
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


export default UpdateUser