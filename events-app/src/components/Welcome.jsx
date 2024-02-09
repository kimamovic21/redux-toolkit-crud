import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center ">
        <h1 className="text-4xl">Welcome to my ReactJS Redux Toolkit Events App</h1>
        <Link 
          to='/events' 
          className="mt-10 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-200"
        >
          See all events
        </Link>
    </div>
  )
}

export default Welcome