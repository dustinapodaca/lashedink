import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import GalleryViewer from "../GalleryViewer";
import ReviewViewer from "../ReviewViewer";

import heroBanner from "../../assets/images/marbletriangle.jpg";

// import heroImg from "../../assets/images/hero2.png";
// import heroImg2 from "../../assets/images/hero1.png";
// import heroImg2 from "../../assets/images/img9lashed.jpeg";

const HeroBanner = () => {
  // const { scrollY } = useScroll();

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  // useEffect(() => {
  //   const updatePosition = () => {
  //     const { scrollTop } = document.documentElement;
  //     const yPos = scrollTop / 2;
  //     scrollY.set(yPos);
  //   };

  //   window.addEventListener("scroll", updatePosition);

  //   return () => {
  //     window.removeEventListener("scroll", updatePosition);
  //   };
  // }, [scrollY]);

  return (
    <>
      <header ref={ref}>
        <div
          className="relative overflow-hidden bg-black w-screen mb-10 mt-24"
          style={{ height: "80vh" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroBanner})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              y: yPos,
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1
              style={{
                textShadow: "2px 2px 3px rgba(0, 0, 0, 0.9)",
              }}
              className="font-london text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-pink-200 text-center mx-20 sm:mx-10"
            >
              Embrace the Artistry
            </h1>
            <p
              className="max-w-5xl font-normal text-white text-md sm:text-lg lg:text-xl xl:text-2xl mt-8 text-center mx-6"
              style={{
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.95)",
              }}
            >
              Welcome to my little corner of the beauty world! As a permanent makeup artist and eyelash specialist, I am passionate about helping you look and feel your best.
              <br />
              <br />
              From impeccably voluminous lashes to meticulously crafted brows, I am here to enhance your natural beauty and give you the confidence you deserve.
            </p>
          </div>
        </div>
      </header>

      <h2 className="pt-12 px-10 text-center mx-auto text-4xl font-cursive tracking-tight leading-none md:text-5xl lg:text-6xl xl:text-7xl text-white">
        Radiate Confidence
      </h2>
      <h3 className="pt-1 pb-12 px-10 text-center mx-auto mb-6 text-xl font-light tracking-tight leading-none md:text-2xl lg:text-3xl xl:text-4xl text-pink-200 italic">
        "Enhance Your Look with Expert Touches"
      </h3>
      <GalleryViewer />

      <ReviewViewer />
    </>
  );
};

export default HeroBanner;
