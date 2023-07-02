import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

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
        <div className="mx-auto max-w-5xl px-4 pt-4 pb-14 sm:px-6 lg:px-8">
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
          <hr className="w-full mt-8 border-zinc-500" />

          <ul className="mt-8 flex justify-center items-center gap-6 md:gap-8">
            <li>
              <a
                href="https://www.facebook.com/lashed.ink/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/lashed.ink/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@lashed.ink"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:text-zinc-700 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">TikTok</span>
                <svg
                  fill="currentColor"
                  width="800px"
                  height="800px"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                  id="icons"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com/search?q=lashed+ink&hl=en"
                rel="noreferrer"
                target="_blank"
                className="text-white transition hover:text-zinc-700 dark:text-white dark:hover:text-white/75"
              >
                <span className="sr-only">Google Business</span>
                <svg
                  fill="currentColor"
                  height="700px"
                  width="700px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 210 210"
                  className="w-5 h-5"
                >
                  <path d="M0,105C0,47.103,47.103,0,105,0c23.383,0,45.515,7.523,64.004,21.756l-24.4,31.696C133.172,44.652,119.477,40,105,40c-35.841,0-65,29.159-65,65s29.159,65,65,65c28.867,0,53.398-18.913,61.852-45H105V85h105v20c0,57.897-47.103,105-105,105S0,162.897,0,105z" />
                </svg>
              </a>
            </li>
          </ul>

          <p className="mx-auto mt-8 max-w-xl text-center leading-relaxed text-gray-500 dark:text-gray-400">
            © Copyright 2023 Lashed.Ink and Dustin Apodaca. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};