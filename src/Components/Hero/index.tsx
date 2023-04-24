import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

import heroImg from "../../assets/images/hero3.png";
import heroImg2 from "../../assets/images/hero2.png";

const HeroBanner = () => {
  const { scrollY } = useScroll();

  useEffect(() => {
    const updatePosition = () => {
      const { scrollTop } = document.documentElement;
      const yPos = scrollTop / 2;
      scrollY.set(yPos);
    };

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [scrollY]);

  const yRange = [0, 1000];
  const yPos = useTransform(scrollY, yRange, ["0%", "-40%"]);

  return (
    <>
      <header>
        <div
          className="relative overflow-hidden bg-black w-screen mb-10 mt-20"
          style={{ height: "60vh" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              filter: "brightness(0.8)",
              y: yPos,
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="font-poiret text-4xl md:text-6xl font-bold text-white text-center">
              Enhance Your Beauty
            </h1>
          </div>
        </div>
      </header>

      <section>
        <div className="grid max-w-screen-xl px-10 pb-8 md:pt-2 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
          <div className="ml-0 md:ml-8 place-self-center lg:col-span-7">
            <h1 className="text-center md:text-start max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Where Your Eyes Get the Attention They Deserve
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200 indent-3">
              Welcome to my little corner of the beauty world! As a makeup
              artist and brow specialist, I am passionate about helping you look
              and feel your best. From perfectly arched eyebrows to glamorous
              lashes, I am here to enhance your natural beauty and give you the
              confidence you deserve.
            </p>
            <span className="block font-bold text-gray-500 dark:text-gray-300 text-2xl my-8 text-center md:text-start">
              Let us take your beauty game to the next level!
            </span>
            <div className="flex flex-row justify-center md:justify-start">
              <a
                href="#"
                className="bg-gray-700 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Book Now
              </a>

            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex p-4">
            <img
              src={heroImg2}
              className="relative w-full rounded-full"
              alt="eyelash illustration"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
