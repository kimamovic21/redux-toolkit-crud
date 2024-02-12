import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="mt-6 text-center">
      <h1 className="text-4xl mb-6">Welcome to my Redux Toolkit Users App</h1>
      <Link to='/users' className='text-2xl text-blue-700'>See Users</Link>
    </div>
  )
}

export default Welcome