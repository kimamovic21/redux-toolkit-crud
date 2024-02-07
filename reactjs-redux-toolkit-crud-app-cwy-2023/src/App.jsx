import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./components/Home"
import CreateUser from "./components/CreateUser"
import EditUser from "./components/EditUser"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  )
}

export default App