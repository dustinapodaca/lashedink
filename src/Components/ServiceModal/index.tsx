import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceModalProps = {
  text: string;
};

const ServiceModal: React.FC<ServiceModalProps> = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white font-medium rounded-lg text-white text-sm px-5 py-2.5 dark:bg-black dark:hover:bg-white dark:hover:text-black dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-offset-black dark:focus:ring-white"
        type="button"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.8)",
              zIndex: 9999,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{
                padding: "2rem",
                borderRadius: "0.5rem",
                maxWidth: "90%",
                maxHeight: "90%",
                overflow: "auto",
              }}
            >
              <div className="relative rounded-lg shadow dark:bg-zinc-900 p-2">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {text}
                  </h3>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="grid gap-8 row-gap-5 lg:grid-cols-3 lg:row-gap-8 p-8 ">
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-80"
                      src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceModal;
