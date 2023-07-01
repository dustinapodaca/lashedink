import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

import ImageModal from "../ImageModal";

import { imageData } from './imagesData';
// import InstagramProfile from "../InstagramEmbed";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null); // updated state type
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
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img1}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img1)}
          />
          <ImageModal
            imageSrc={imageData.img1}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img1} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationMiddle1 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img2}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img2)}
          />
          <ImageModal
            imageSrc={imageData.img2}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img2} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationBottom1 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationBottom1 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img3}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img3)}
          />
          <ImageModal
            imageSrc={imageData.img3}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img3} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
      </div>
      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationTop2 }}
        >
          <motion.img
            className="h-auto w-full rounded-lg"
            src={imageData.img4}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img4)}
          />
          <ImageModal
            imageSrc={imageData.img4}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img4} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationMiddle2 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img5}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img5)}
          />
          <ImageModal
            imageSrc={imageData.img5}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img5} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationBottom2 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img6}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img6)}
          />
          <ImageModal
            imageSrc={imageData.img6}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img6} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
      </div>
      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationTop3 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img7}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img7)}
          />
          <ImageModal
            imageSrc={imageData.img7}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img7} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationMiddle3 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img8}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img8)}
          />
          <ImageModal
            imageSrc={imageData.img8}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img8} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationBottom3 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img9}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img9)}
          />
          <ImageModal
            imageSrc={imageData.img9}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img9} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
      </div>
      <div className="grid gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationTop4 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img10}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img10)}
          />
          <ImageModal
            imageSrc={imageData.img10}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img10} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationMiddle4 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img11}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img11)}
          />
          <ImageModal
            imageSrc={imageData.img11}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img11} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: transitionDurationBottom4 }}
        >
          <motion.img
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src={imageData.img12}
            alt=""
            whileHover={{ scale: [null, 1.04, 1.04] }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 15,
              stiffness: 400,
            }}
            onClick={() => setZoomedImage(imageData.img12)}
          />
          <ImageModal
            imageSrc={imageData.img12}
            isOpen={zoomedImage !== null && zoomedImage === imageData.img12} // updated isOpen condition
            setIsOpen={() => setZoomedImage(null)} // updated setIsOpen function
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
