import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import Users from './routes/Users'
import CreateUser from './routes/CreateUser'
import EditUser from './routes/EditUser'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/create' element={<CreateUser />} />
        <Route path='/users/edit/:id' element={<EditUser />} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  )
}

export default App