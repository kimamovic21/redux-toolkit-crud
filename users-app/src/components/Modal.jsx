const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="relative z-50 bg-white w-full max-w-md p-6 rounded-md">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold">
            Are you sure you want to delete this user?
          </h3>
        </div>
        <div className="flex items-center justify-end mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600 focus:outline-none"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
