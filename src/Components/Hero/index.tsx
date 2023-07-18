import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

import heroBanner from "../../assets/images/marble2.jpg";

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
  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

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
      <header className="mt-24" ref={ref}>
        <div
          className="relative overflow-hidden bg-black w-screen mb-10 pt-24"
          style={{ height: "90vh" }}
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
          {/* <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center"
            style={{
              y: yPos,
              width: "150%",
              left: "-25%",
              overflow: "visible",
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enable-background="new 0 0 1000 1000"
              className="fill-black"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                top: 15,
                left: 0,
              }}
            >
              <g>
                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                  <path d="M100,4334.8c0-7.2,564.1-989.6,1252.5-2182.3c688.4-1192.7,1785.5-3093,2438-4223.6C4443.1-3201.7,4988-4126.7,5000-4126.7s253.4,399.2,533,884.4c482.8,836.6,1130.6,1960,3391.8,5872.8c535.4,929.8,975.2,1697.1,975.2,1704.2s-2203.8,12-4900,12C2306.2,4346.7,100,4341.9,100,4334.8z M9190.1,3849.5C8162.3,2056.9,5009.6-3395.3,5000-3395.3c-7.2,0-303.6,506.7-659.7,1128.2c-511.5,886.8-3540,6135.8-3587.8,6214.6c-4.8,9.6,1905,16.7,4247.5,16.7h4254.6L9190.1,3849.5z" />
                </g>
              </g>
            </svg>
          </motion.div> */}
          {/* <div className="absolute inset-0 bg-black opacity-50" />  */}

          <div className="absolute inset-0 flex flex-col justify-center items-center -mt-10">
            <h1
              style={{
                textShadow: "2px 2px 3px rgba(0, 0, 0, 0.9)",
              }}
              className="font-london text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-pink-200 text-center mx-32 sm:mx-10 md:-mt-10"
            >
              Embrace the Artistry
            </h1>
            <p
              className="max-w-5xl font-sans font-normal text-white text-lg sm:text-lg md:text-xl xl:text-2xl mt-8 text-center mx-10"
              style={{
                textShadow: "2px 2px 3px rgba(0, 0, 0, 0.95)",
              }}
            >
              As a permanent makeup artist and eyelash specialist, I am passionate about
              helping you look and feel your best.
              <br />
              <br />
              From impeccably voluminous lashes to meticulously crafted brows, I
              am here to enhance your natural beauty and give you the confidence
              you deserve.
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
    </>
  );
};

export default HeroBanner;
