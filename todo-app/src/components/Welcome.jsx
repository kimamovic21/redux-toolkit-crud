import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div>
        <h1 className="text-4xl mb-4">Welcome to my Redux Toolkit Todo App</h1>
        <Link to='/todos' className="text-blue-700">Go to my Todos</Link>
    </div>
  )
}

export default Welcome