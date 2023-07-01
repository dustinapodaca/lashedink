import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
// import placeholder from "../../assets/images/placeholder.jpeg";

import { imageData } from './imagesData';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("gallery");
      if (targetElement) {
        const { top, bottom } = targetElement.getBoundingClientRect();
        const isInView = top < window.innerHeight && bottom >= 0;
        setIsVisible(isInView);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const transitionDuration1 = Math.random() * 1.3 + 0.8;
  const transitionDuration2 = Math.random() * 1.5 + 0.8;
  const transitionDuration3 = Math.random() * 1.4 + 1.5;
  const transitionDuration4 = Math.random() * 1.6 + 1.8;
  const transitionDuration5 = Math.random() * 1.8 + 1.2;
  const transitionDuration6 = Math.random() * 2.0 + 2.2;
  const transitionDuration7 = Math.random() * 2.3 + 2.2;
  const transitionDuration8 = Math.random() * 1.9 + 2.2;
  const transitionDuration9 = Math.random() * 2.6 + 2.8;
  const transitionDuration10 = Math.random() * 2.9 + 2.8;
  const transitionDuration11 = Math.random() * 2.5 + 2.6;
  const transitionDuration12 = Math.random() * 2.7 + 2.9;

  return (
    <div
      id="gallery"
      className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4"
    >
      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration1 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img1}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration2 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img2}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration3 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img3}
            alt=""
          />
        </motion.div>
      </div>
      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration4 }}
        >
          <img
            className="h-auto w-full rounded-lg"
            src={imageData.img4}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration5 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img5}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration6 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img6}
            alt=""
          />
        </motion.div>
      </div>
      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration7 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img7}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration8 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img8}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration9 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img9}
            alt=""
          />
        </motion.div>
      </div>
      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration10 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img10}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration11 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img11}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDuration12 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img12}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
