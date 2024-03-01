import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import SocialLinks from '../SocialLinks';

export default function Footer () {
  return (
    <footer className="bottom-0 select-none">
      <div
        className="relative mt-24 md:mt-16 border-t border-zinc-300"
        style={{
          backgroundColor: "hsla(0,0%,100%,1)",
          backgroundImage: `radial-gradient(at 50% 48%, hsla(0,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 86% 3%, hsla(188,100%,97%,1) 0px, transparent 50%),
                      radial-gradient(at 0% 50%, hsla(185,100%,99%,1) 0px, transparent 50%),
                      radial-gradient(at 100% 45%, hsla(339,100%,96%,1) 0px, transparent 50%),
                      radial-gradient(at 0% 100%, hsla(333,100%,97%,1) 0px, transparent 50%),
                      radial-gradient(at 72% 98%, hsla(240,100%,97%,1) 0px, transparent 50%),
                      radial-gradient(at 0% 0%, hsla(340,100%,96%,1) 0px, transparent 50%)`,
        }}
      >
        {/* <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-zinc-100"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg> */}
        <div className="font-sans pt-8 mx-auto max-w-5xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link to="/">
              <motion.p
                className="font-london text-zinc-700 text-6xl"
                whileHover={{ scale: [null, 1.1, 1.1], rotate: 360 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  damping: 12,
                  stiffness: 120,
                }}
              >
                L
              </motion.p>
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link to="/about">
                <motion.button
                  className="text-zinc-700 text-sm md:text-md font-light tracking-tight"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  ABOUT
                </motion.button>
              </Link>
            </li>

            <li>
              <Link to="/services">
                <motion.button
                  className="text-zinc-700 text-sm md:text-md font-light tracking-tight"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  SERVICES
                </motion.button>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <motion.button
                  className="text-zinc-700 text-sm md:text-md font-light tracking-tight"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  CONTACT
                </motion.button>
              </Link>
            </li>

            <li>
              <Link to="/faq">
                <motion.button
                  className="text-zinc-700 text-sm md:text-md font-light tracking-tight"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  FAQ
                </motion.button>
              </Link>
            </li>
          </ul>

          <hr className="max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto mt-4 pb-1 border-gray-500" />
          <SocialLinks />
          <div>
            <p className="mx-auto mt-10 max-w-xl text-center leading-relaxed text-zinc-600 text-sm">
              © Copyright 2023 Lashed.Ink. <br /> All rights reserved.
            </p>
            <p className="mx-auto mt-8 max-w-xl text-center leading-relaxed">
              <a
                href="https://linkedin.com/in/dustinapodaca"
                className="text-zinc-600 text-sm hover:text-zinc-500 hover:ease-in-out duration-150 transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                dev@dustinapodaca
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};