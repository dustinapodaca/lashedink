'use strict';

import { useState } from 'react';
import { motion, MotionConfig, AnimatePresence } from 'framer-motion'; 
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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
            <p
              className="font-cursive text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-4xl font-poiret stroke-white stroke-1"
              style={{
                textShadow: "2px 2px 3px rgba(0, 0, 0, 0.4)",
              }}
            >
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
