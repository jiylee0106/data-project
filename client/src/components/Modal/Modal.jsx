import { useEffect, useRef, useState } from "react";
import "./modal.css";

const Modal = ({
  buttonText,
  isConfirm,
  color,
  closeModal,
  handleAction,
  children,
}) => {
  const [countdown, setCountdown] = useState(3);

  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    let intervalId;

    if (isConfirm && countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isConfirm, countdown]);

  // isConfirm이 false일 경우 모달을 그냥 반환합니다.
  if (!isConfirm) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center filter backdrop-blur">
        <div
          className={`bg-${color} dark:bg-gray-800 rounded-lg shadow-lg p-8 mx-4 md:mx-0`}
          ref={modalRef}
        >
          <div className="mb-4">{children}</div>
          <div className="flex justify-center">
            <div>
              <button
                className="text-gray-500 bg-white mr-2 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2 pt-3 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={closeModal}
              >
                취소
              </button>
              <button
                className="text-white bg-[#CD9894] hover:bg-[#A36560] focus:ring-4 focus:outline-none focus:ring-[#F2CDCA] dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2 pt-3 text-center"
                onClick={handleAction}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // isConfirm이 true이고 countdown이 0보다 큰 경우 카운트다운을 보여줍니다.
  if (countdown > 0) {
    return (
      <div className="bg-transition fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mx-4 md:mx-0 flex flex-col items-center justify-center">
          <p>{children}</p>
          <p>{countdown}</p>
        </div>
      </div>
    );
  }

  // isConfirm이 true이고 countdown이 0인 경우 모달 내용을 보여줍니다.
};

export default Modal;
