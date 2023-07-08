import { motion, AnimatePresence } from "framer-motion";

import { Dispatch, SetStateAction } from "react"; // import Dispatch and SetStateAction types

interface ImageModalProps {
  imageSrc: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>; // add type to setIsOpen prop
}

const ImageModal = ({ imageSrc, isOpen, setIsOpen }: ImageModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            className="max-h-[80%] object-cover relative max-w-[90%]"
          >
            <motion.img
              className="max-h-full max-w-full object-cover rounded-lg z-50"
              src={imageSrc}
              alt=""
            />
            <motion.div
              whileHover={{ scale: 1.3 }}
              className="absolute top-2 right-5 text-white text-4xl cursor-pointer opacity-70 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              ×
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
