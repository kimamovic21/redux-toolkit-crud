import { Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from './redux/store';
import Home from './components/Home'
import UserListing from './components/UserListing'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <div>
            <Link to={'/'} style={{ marginRight: '10px' }}>Home</Link>
            <Link to={'/user'}>User</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='/user' element={<UserListing />}/>
            <Route path='/user/add' element={<AddUser />}/>
            <Route path='/user/edit/:code' element={<UpdateUser />}/>
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </Provider>
  )
}

export default App
