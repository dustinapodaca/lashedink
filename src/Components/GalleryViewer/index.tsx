import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import { imageData } from './imagesData';
// import InstagramProfile from "../InstagramEmbed";

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

  const transitionDurationTop1 = Math.random() * 1.3 + 0.9;
  const transitionDurationTop2 = Math.random() * 1.5 + 0.8;
  const transitionDurationTop3 = Math.random() * 1.4 + 1.2;
  const transitionDurationTop4 = Math.random() * 1.6 + 1.0;
  const transitionDurationMiddle1 = Math.random() * 2.1 + 1.8;
  const transitionDurationMiddle2 = Math.random() * 2.0 + 1.9;
  const transitionDurationMiddle3 = Math.random() * 2.3 + 2.0;
  const transitionDurationMiddle4 = Math.random() * 2.2 + 1.7;
  const transitionDurationBottom1 = Math.random() * 2.7 + 2.5;
  const transitionDurationBottom2 = Math.random() * 3.2 + 2.8;
  const transitionDurationBottom3 = Math.random() * 2.9 + 2.6;
  const transitionDurationBottom4 = Math.random() * 3.0 + 2.9;

  return (
    <div
      id="gallery"
      className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4"
    >
      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationTop1 }}
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
          transition={{ duration: transitionDurationMiddle1 }}
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
          transition={{ duration: transitionDurationBottom1 }}
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
          transition={{ duration: transitionDurationTop2 }}
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
          transition={{ duration: transitionDurationMiddle2 }}
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
          transition={{ duration: transitionDurationBottom2 }}
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
          transition={{ duration: transitionDurationTop3 }}
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
          transition={{ duration: transitionDurationMiddle3 }}
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
          transition={{ duration: transitionDurationBottom3 }}
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
          transition={{ duration: transitionDurationTop4 }}
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
          transition={{ duration: transitionDurationMiddle4 }}
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
          transition={{ duration: transitionDurationBottom4 }}
        >
          <img
            className="h-auto max-w-full rounded-lg"
            src={imageData.img12}
            alt=""
          />
        </motion.div>
      </div>

      {/* <section>
        <InstagramProfile />
      </section> */}

    </div>
  );
};

export default Gallery;
