import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { Link } from "react-router-dom";

import lashedBanner from '../../assets/images/lashedinkbannerblack.png';

const LayoutNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleClickLink = () => {
    if (isMobile) {
      toggleOpen();
    }
  };

  const toggleOpenBooking = () => {
    window.open('https://square.site/book/ZD47SF4KTBRZS/lashed-ink-englewood-co', '_blank');
    if (isMobile) {
      toggleOpen();
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-7 shadow-lg"
        style={{ backgroundColor: "rgba(0, 0, 0)" }}
      >
        <div className="flex flex-row justify-between">
          <motion.button
            className="ml-2"
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <Link to="/">
              <img src={lashedBanner} alt="Lashed.Ink" className="w-44" />
            </Link>
          </motion.button>
        </div>
        {!isMobile ? (
          <div className="flex flex-row justify-between items-center font-sans">
            <Link to="/">
              <motion.button
                className="text-white md:text-md text-xl px-4 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                Home
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="text-white md:text-md text-xl px-4 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                About
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="text-white md:text-md text-xl px-4 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                Services
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="text-white md:text-md text-xl px-4 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                Contact
              </motion.button>
            </Link>
            <Link to="/faq">
              <motion.button
                className="text-white md:text-md text-xl px-4 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                FAQ
              </motion.button>
            </Link>
            <motion.button
              className="mx-auto bg-white text-black ml-8 mr-6 px-6 pt-2 font-cursive text-3xl rounded-lg shadow-lg hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
              style={{
                textShadow: "0.75px 0.75px 1.25px rgba(255, 20, 147, 0.5)",
              }}
              initial={{ backgroundColor: "white", color: "black" }}
              whileHover={{
                // backgroundColor: "pink",
                // color: "white",
                scale: 1.15,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: 0,
                  backgroundColor: "pink",
                  color: "white",
                },
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggleOpenBooking()}
            >
              Book Now
            </motion.button>
          </div>
        ) : (
          <button
            className="focus:outline-none pr-3 pt-1"
            onClick={() => toggleOpen()}
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M 2 2.5 L 20 2.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                d="M 2 9.423 L 20 9.423"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                d="M 2 16.346 L 20 16.346"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                variants={{
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              />
            </motion.svg>
          </button>
        )}
        {/* <MenuToggle toggle={() => toggleOpen()} /> */}
      </nav>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* DARK BACKGROUND */}
            <motion.div
              className="fixed inset-0 z-40 bg-black top-[90px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggleOpen()} // Close the menu when the background is clicked
            />
            {/* MENU CONTENT */}
            <motion.div
              className="font-sans tracking-tight rounded-b-lg p-10 pt-5 px-6 h-screen z-50 fixed left-0 right-0"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 30,
                    delay: 0.1,
                  },
                },
                closed: {
                  y: 0,
                  opacity: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              transition={{ duration: 0.2 }}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              ref={containerRef}
              exit="closed"
            >
              <motion.nav
                className="flex justify-evenly pb-5 items-center w-full"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.1,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <Link to="/" onClick={handleClickLink}>
                  <motion.button
                    className="tracking-tight font-sans text-white text-xl px-10 font-bold hover:drop-shadow-lg rounded-full"
                    whileHover={{ scale: [null, 1.4, 1.3] }}
                    transition={{ duration: 0.3 }}
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    Home
                  </motion.button>
                </Link>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-5 items-center w-full pt-3"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.15,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <Link to="/about" onClick={handleClickLink}>
                  <motion.button
                    className="tracking-tight font-sans text-white text-xl px-10 font-bold hover:drop-shadow-lg rounded-full"
                    whileHover={{ scale: [null, 1.4, 1.3] }}
                    transition={{ duration: 0.3 }}
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    About
                  </motion.button>
                </Link>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-5 items-center w-full pt-3"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.2,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <Link to="/services" onClick={handleClickLink}>
                  <motion.button
                    className="tracking-tight font-sans text-white text-xl px-10 font-bold hover:drop-shadow-lg rounded-full"
                    whileHover={{ scale: [null, 1.4, 1.3] }}
                    transition={{ duration: 0.3 }}
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    Services
                  </motion.button>
                </Link>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-5 items-center w-full pt-3"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.25,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <Link to="/contact" onClick={handleClickLink}>
                  <motion.button
                    className="tracking-tight font-sans text-white text-xl px-10 font-bold hover:drop-shadow-lg rounded-full"
                    whileHover={{ scale: [null, 1.4, 1.3] }}
                    transition={{ duration: 0.3 }}
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    Contact
                  </motion.button>
                </Link>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-5 items-center w-full pt-3"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.3,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <Link to="/faq" onClick={handleClickLink}>
                  <motion.button
                    className="tracking-tight font-sans text-white text-xl px-10 font-bold hover:drop-shadow-lg rounded-full"
                    whileHover={{ scale: [null, 1.4, 1.3] }}
                    transition={{ duration: 0.3 }}
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    FAQ
                  </motion.button>
                </Link>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-5 items-center w-full pt-3"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.35,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <motion.button
                  className="mx-auto bg-white text-black ml-8 mr-6 px-6 pt-2 font-cursive text-2xl rounded-lg shadow-lg hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
                  style={{
                    textShadow: "0.75px 0.75px 1.25px rgba(255, 20, 147, 0.5)",
                  }}
                  initial={{ backgroundColor: "white", color: "black" }}
                  whileHover={{
                    // backgroundColor: "pink",
                    // color: "white",
                    scale: 1.15,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0,
                      backgroundColor: "pink",
                      color: "white",
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => toggleOpenBooking()}
                >
                  Book Now
                </motion.button>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-5 items-center w-full"
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                      delay: 0.4,
                    },
                  },
                  closed: {
                    y: "-70%",
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  },
                }}
                transition={{ duration: 0.3 }}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                ref={containerRef}
                exit="closed"
              >
                <ul className="mt-5 flex justify-center items-center gap-6 md:gap-8">
                  <li>
                    <a
                      href="https://www.facebook.com/lashed.ink/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-pink-300"
                      onClick={handleClickLink}
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
                      className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-pink-300"
                      onClick={handleClickLink}
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
                      className="text-white transition hover:text-zinc-700 dark:text-white dark:hover:text-pink-300"
                      onClick={handleClickLink}
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
                      className="text-white transition hover:text-zinc-700 dark:text-white dark:hover:text-pink-300"
                      onClick={handleClickLink}
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
              </motion.nav>
              {/* <div className="flex justify-center">
                <button className="mx-auto bg-black text-white py-2 px-6 font-poiret text-xl rounded-lg shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">
                  Book Now
                </button>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LayoutNav;
