const Modal = ({ isVisible, onYes, onNo }) => { 
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-gray-700 mb-4">Are you sure you want to delete this event?</p>
        <div className="flex justify-end">
          <button className="text-red-500 mr-2" onClick={onYes}>
            Yes
          </button>
          <button className="text-blue-500" onClick={onNo}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;