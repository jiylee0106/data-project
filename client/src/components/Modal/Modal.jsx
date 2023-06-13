import "./modal.css";

const Modal = ({
  buttonText,
  isConfirm,
  closeModal,
  handleAction,
  children,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mx-4 md:mx-0 ${
          isConfirm && "bg-white p-8 rounded-lg z-10 relative bg-transition"
        }`}
      >
        <div className="mb-4">{children}</div>
        <div className="flex justify-end">
          <div>
            <button
              className={`text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 ${
                isConfirm && "hidden"
              }`}
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center ml-2"
              onClick={handleAction}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
