'use strict';

import { useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion'; 
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// import temp1 from '../../assets/images/temp/houseimg1.jpg';
// import temp2 from "../../assets/images/temp/houseimg2.jpg";
// import temp3 from "../../assets/images/temp/houseimg3.jpg";
// import temp4 from "../../assets/images/temp/houseimg4.jpg";
// import temp5 from "../../assets/images/temp/houseimg5.jpg";
// import temp6 from "../../assets/images/temp/houseimg6.jpg";


// const images = [
//   { id: 1, src: temp1 },
//   { id: 2, src: temp2 },
//   { id: 3, src: temp3 },
//   { id: 4, src: temp4 },
//   { id: 5, src: temp5 },
//   { id: 6, src: temp6 },
// ];

type Image = {
  id: number;
  src: string;
};

type CarouselProps = {
  images: Image[];
  text: string;
};

const ServiceSelector = ({images, text}: CarouselProps) => {
  let [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full bg-black">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center rounded-xl">
          <div className="relative overflow-hidden rounded-t-md">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  className="aspect-[6/5] object-cover"
                />
              ))}
            </motion.div>
            <p className="font-vibes text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl font-poiret stroke-white stroke-1">
              {text}
            </p>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}

export default ServiceSelector;

// const ServiceSelector = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth < 1410) {
//       setIsMobile(true);
//     }

//     window.addEventListener("resize", () => {
//       if (window.innerWidth < 1410) {
//         setIsMobile(true);
//       } else {
//         setIsMobile(false);
//       }
//     });

//     return () => {
//       window.removeEventListener("resize", () => {
//         if (window.innerWidth < 1410) {
//           setIsMobile(true);
//         } else {
//           setIsMobile(false);
//         }
//       });
//     };
//   }, []);

//   const handleClickLeft = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 3 : prevIndex - 1
//     );
//   };

//   const handleClickRight = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 3 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative -mr-2 top-0 -z-10">
//       <div className="absolute top-1/2 -mt-6 z-10">
//         <button
//           onClick={handleClickLeft}
//           className="bg-white w-10 h-10 ml-8 text-gray-500 hover:text-gray-700 focus:outline-none"
//         >
//           <motion.svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="icon icon-tabler icon-tabler-chevron-left"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="#2c3e50"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             whileHover={{
//               scale: 1.3,
//               transition: { type: "spring", stiffness: 600, damping: 25 },
//             }}
//           >
//             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//             <polyline points="15 6 9 12 15 18" />
//           </motion.svg>
//         </button>
//       </div>
//       <div className="overflow-hidden relative">
//         {isMobile ? (
//           <div
//             className="flex transition-all duration-500 ease-in-out h-72"
//             style={{ transform: `translateX(-${currentIndex * 50}%)` }}
//           >
//             {images.map((image) => (
//               <img
//                 key={image.id}
//                 src={image.src}

//                 className="w-1/2 object-cover flex-none p-2 rounded-2xl"
//               />
//             ))}
//           </div>
//         ) : (
//           <div
//             className="flex transition-all duration-500 ease-in-out h-72"
//             style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
//           >
//             {images.map((image) => (
//               <img
//                 key={image.id}
//                 src={image.src}

//                 className="w-1/3 object-cover flex-none p-2 rounded-2xl"
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="absolute top-1/2 -mt-6 right-0 z-10">
//         <button
//           onClick={handleClickRight}
//           className="bg-white w-10 h-10 mr-8 text-base-200 hover:text-gray-700 focus:outline-none"
//         >
//           <motion.svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="icon icon-tabler icon-tabler-chevron-right"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="#2c3e50"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             whileHover={{
//               scale: 1.3,
//               transition: { type: "spring", stiffness: 600, damping: 25 },
//             }}
//           >
//             <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//             <polyline points="9 6 15 12 9 18" />
//           </motion.svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceSelector;