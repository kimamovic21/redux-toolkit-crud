import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="mt-6 text-center">
      <h1 className="text-4xl">Welcome to my Redux Toolkit Users App</h1>
      <Link to='/users'>See Users</Link>
    </div>
  )
}

export default Welcome