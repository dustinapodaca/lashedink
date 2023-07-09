import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import SocialLinks from '../SocialLinks';

export default function Footer () {
  return (
    <footer className="bottom-0">
      <div className="relative mt-24 md:mt-32 bg-zinc-900">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-zinc-900"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        <div className="mx-auto max-w-5xl px-4 pt-4 pb-8 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link to="/">
              <motion.p
                className="font-london text-zinc-300 text-6xl"
                style={{
                  textShadow: "2px 2px 3px rgba(0, 0, 0, 0.8)",
                }}
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

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link to="/about">
                <motion.button
                  className="text-zinc-200 text-md md:text-lg font-light hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  About
                </motion.button>
              </Link>
            </li>

            <li>
              <Link to="/services">
                <motion.button
                  className="text-zinc-200 text-md md:text-lg font-light hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  Services
                </motion.button>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <motion.button
                  className="text-zinc-200 text-md md:text-lg font-light hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  Contact
                </motion.button>
              </Link>
            </li>

            <li>
              <Link to="/faq">
                <motion.button
                  className="text-zinc-200 text-md md:text-lg font-light hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.1, 1.1] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  FAQ
                </motion.button>
              </Link>
            </li>
          </ul>
          
          <hr className="max-w-xs md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto mt-8 pb-1 border-zinc-500" />
          <SocialLinks />
          <div>
            <p
              className="mx-auto mt-10 max-w-xl text-center leading-relaxed text-zinc-400 text-sm"
              style={{
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
              }}
            >
              © Copyright 2023 Lashed.Ink. <br /> All rights reserved.
            </p>
            <p className="mx-auto mt-8 max-w-xl text-center leading-relaxed">
              <a
                href="https://linkedin.com/in/dustinapodaca"
                className="text-zinc-600 text-sm hover:text-zinc-500 hover:ease-in-out duration-150 transition-colors"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)",
                }}
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