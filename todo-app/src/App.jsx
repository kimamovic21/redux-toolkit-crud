import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from "./components/Welcome"
import Todos from "./routes/Todos"
import CreateTodo from "./routes/CreateTodo"
import EditTodo from "./routes/EditTodo"

const App = () => {
  return (
    <div className="m-4">
      <Router>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/createtodo' element={<CreateTodo />} />
          <Route path='/edittodo/:id' element={<EditTodo />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App