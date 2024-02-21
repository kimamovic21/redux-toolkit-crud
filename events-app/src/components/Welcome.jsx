import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl mb-6">Welcome to my ReactJS Redux Toolkit Events App</h1>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center">
        <div className="md:mr-6 mb-6 md:mb-0">
          <p className="text-lg mb-10">
            Explore a world of unforgettable experiences with our events.
          </p>
          <Link
            to="/events"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 duration-200"
          >
            See all events
          </Link>
        </div>
        <div>
          <img
            src="react-conference.jpg"
            alt="React Conference"
            className="rounded-md shadow-md max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
