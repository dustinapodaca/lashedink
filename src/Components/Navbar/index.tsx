import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { Link } from "react-router-dom";

import lashedBanner from '../../assets/images/lashedinkbannerblack.png';

const LayoutNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleClickLink = () => {
    toggleOpen();
  };

  const toggleOpenBooking = () => {
    window.open('https://square.site/book/ZD47SF4KTBRZS/lashed-ink-englewood-co', '_blank');
    toggleOpen();
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

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-5 pl-8 py-8 border-b border-white shadow-lg"
        style={{ backgroundColor: "rgba(0, 0, 0)" }}
      >
        <div className="flex flex-row justify-between">
          {/* <h2 className="md:text-2xl text-2xl font-extrabold text-white drop-shadow-lg">
            Lashed.Ink
          </h2> */}
          <img src={lashedBanner} alt="lashed.ink" className="w-52" />
        </div>
        {!isMobile ? (
          <div className="flex flex-row justify-between">
            <Link to="/">
              <motion.button
                className="text-white md:text-md text-xl md:px-3 px-10 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                Home
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="text-white md:text-md text-xl md:px-3 px-10 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                Services
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="text-white md:text-md text-xl md:px-3 px-10 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                About
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="text-white md:text-md text-xl md:px-3 px-10 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                Contact
              </motion.button>
            </Link>
            <Link to="/faq">
              <motion.button
                className="text-white md:text-md text-xl md:px-3 px-10 font-light hover:drop-shadow-lg rounded-full"
                whileHover={{ scale: [null, 1.1, 1.1] }}
                transition={{ duration: 0.3 }}
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              >
                FAQ
              </motion.button>
            </Link>
            <motion.button
              className="mx-auto bg-white text-black ml-8 mr-6 px-6 font-poiret text-xl rounded-lg shadow-lg hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
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
            {/* Add this new motion.div for the dark background */}
            <motion.div
              className="fixed inset-0 z-40 bg-black opacity-50 top-[6.5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => toggleOpen()} // Close the menu when the background is clicked
            />

            {/* Update the motion.div wrapping your menu items */}
            <motion.div
              className="rounded-b-lg p-10 px-6 h-full z-50 fixed top-[5.5rem] left-0 right-0"
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
                className="flex justify-evenly pb-6 items-center w-full"
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
                    className="text-white md:text-md text-2xl md:px-3 px-10 font-extrabold hover:drop-shadow-lg rounded-full"
                    whileHover={{ scale: [null, 1.4, 1.3] }}
                    transition={{ duration: 0.3 }}
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    Home
                  </motion.button>
                </Link>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-6 items-center w-full pt-3"
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
                <motion.button
                  className="text-white md:text-md text-2xl md:px-3 px-10 font-extrabold hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.4, 1.3] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  About
                </motion.button>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-6 items-center w-full pt-3"
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
                    className="text-white md:text-md text-2xl md:px-3 px-10 font-extrabold hover:drop-shadow-lg rounded-full"
                    whileHover={{ scale: [null, 1.4, 1.3] }}
                    transition={{ duration: 0.3 }}
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    Services
                  </motion.button>
                </Link>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-6 items-center w-full pt-3"
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
                <motion.button
                  className="text-white md:text-md text-2xl md:px-3 px-10 font-extrabold hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.4, 1.3] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  Contact
                </motion.button>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-6 items-center w-full pt-3"
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
                <motion.button
                  className="text-white md:text-md text-2xl md:px-3 px-10 font-extrabold hover:drop-shadow-lg rounded-full"
                  whileHover={{ scale: [null, 1.4, 1.3] }}
                  transition={{ duration: 0.3 }}
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  FAQ
                </motion.button>
              </motion.nav>
              <motion.nav
                className="flex justify-evenly pb-6 items-center w-full pt-3"
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
                <motion.button
                  className="mx-auto bg-white text-black ml-8 mr-6 px-6 font-poiret text-xl rounded-lg shadow-lg hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
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
