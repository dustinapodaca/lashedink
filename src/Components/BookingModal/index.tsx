import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hasModalBeenOpened = sessionStorage.getItem("hasModalBeenOpened");
    if (!hasModalBeenOpened) {
      setIsOpen(true);
      sessionStorage.setItem("hasModalBeenOpened", "true");
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        className="mx-auto bg-white text-black ml-8 mr-6 px-6 pt-2 pb-1 font-cursive text-xl md:text-3xl rounded-lg shadow-lg"
        style={{
          textShadow: "0.75px 0.75px 1.25px rgba(255, 20, 147, 0.5)",
        }}
        initial={{ backgroundColor: "white", color: "black" }}
        whileHover={{
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
        onClick={openModal}
      >
        Before You Book
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{
                maxWidth: "100%",
                maxHeight: "90%",
                overflow: "auto",
              }}
              className="mx-6 my-2 md:mx-20 lg:mx-32 xl:mx-56 xl:my-32 rounded-xl bg-black shadow-xl shadow-black"
            >
              <div className="relative rounded-lg bg-black px-2">
                <div className="flex items-center justify-between p-4 border-b rounded-t border-zinc-700">
                  <span></span>
                  {!isMobile ? (
                    <h3
                      className="text-5xl text-center font-bold font-london text-white"
                      style={{
                        textShadow: "2px 2px 3px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      Before You Book
                    </h3>
                  ) : (
                    <h3
                      className="text-center font-bold font-london text-white"
                      style={{
                        textShadow: "2px 2px 3px rgba(0, 0, 0, 0.8)",
                        fontSize: "2.3rem",
                        lineHeight: "2.95rem",
                      }}
                    >
                      Before You Book
                    </h3>
                  )}

                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-zinc-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="px-4 py-5 sm:px-6 text-white">
                  {!isMobile ? (
                    <div className="flex justify-between items-center mb-5">
                      <h2
                        className="font-london text-4xl font-bold mb-1"
                        style={{
                          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
                        }}
                      >
                        Are You a Candidate?
                      </h2>
                      <p className="font-sans w-full text-zinc-500 italic text-sm lg:max-w-3xl text-right">
                        Please be advised that we have a 24-hour cancellation
                        policy. If you need to cancel or reschedule your
                        appointment, please do so at least 24 hours in advance.
                        Failure to do so will result in a 50% charge of the
                        scheduled service.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="w-full text-zinc-500 italic text-sm lg:max-w-3xl text-center mb-3">
                        Please be advised that we have a 24-hour cancellation
                        policy. If you need to cancel or reschedule your
                        appointment, please do so at least 24 hours in advance.
                        Failure to do so will result in a 50% charge of the
                        scheduled service.
                      </p>
                      <h2 className="font-london text-3xl font-bold mb-4 text-center">
                        Are You a Candidate?
                      </h2>
                    </>
                  )}
                  <hr className="w-full mt-5 mb-5 border-zinc-700" />
                  <p className="font-sans mb-4">
                    Permanent makeup, also known as micro-pigmentation, is a
                    cosmetic tattooing technique that involves the implantation
                    of pigment into the skin to create long-lasting,
                    semi-permanent makeup effects. The duration of permanent
                    makeup can vary from several months to years, depending on
                    the area of the body, the client's skin type, and aftercare.
                  </p>

                  <p className="font-sans mb-4">
                    Unfortunately, not everyone is a candidate for permanent
                    makeup. The following list contains contraindications that
                    disqualify you from receiving permanent makeup:
                  </p>

                  <ul className="font-sans list-disc list-inside mb-8">
                    <li>Under 18 years of age</li>
                    <li>Currently pregnant or breastfeeding</li>
                    <li>
                      Health concerns: sickness (cold, virus, infection, etc.),
                      cancer/chemotherapy, heart conditions, diabetes (consult
                      for doctor's approval), skin disease, uncontrolled
                      thyroid, healing disorders, hemophilia
                    </li>
                    <li>
                      Use of Accutane in the last year or Retin-A in the last 6
                      months
                    </li>
                    <li>
                      Hypertrophic scarring, keloids, skin irritations (rash,
                      sunburn, acne), psoriasis, or eczema near the treated area
                    </li>
                    <li>
                      Have HIV, Hepatitis, or any other infectious or viral
                      diseases
                    </li>
                  </ul>

                  <hr className="w-full mt-7 mb-4 border-zinc-700" />
                  {!isMobile ? (
                    <h2
                      className="font-london text-4xl font-bold mb-2"
                      style={{
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      Permanent Makeup Preparation
                    </h2>
                  ) : (
                    <h2
                      className="text-center font-london text-3xl font-bold mb-4"
                      style={{
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      Permanent Makeup Preparation
                    </h2>
                  )}
                  <hr className="w-full mt-6 md:mt-5 mb-4 border-zinc-700" />
                  <p className="font-sans mb-4">
                    All permanent makeup appointments must be approved by the
                    artist before scheduling to ensure you are a good candidate.
                  </p>

                  <p className="font-sans mb-4">
                    If you have previous permanent makeup, please schedule an
                    in-person consultation to have your old work assessed and
                    ensure it can be corrected. If you are unable to schedule an
                    in-person consultation (preferred), please send in clear
                    photos with no makeup or filters on of your previous
                    permanent makeup.
                  </p>

                  <p className="font-sans mb-4">
                    Follow these guidelines to prepare for your permanent makeup
                    appointment:
                  </p>

                  <ul className="font-sans list-disc list-inside mb-8">
                    <li>
                      No botox or fillers 3 weeks prior to your appointment
                    </li>
                    <li>
                      Discontinue all blood thinners (fish oil,
                      anti-inflammatory medications, allergy medication,
                      alcohol, etc.) 48 hours prior to your appointment
                    </li>
                    <li>No caffeine 24 hours prior to your appointment</li>
                    <li>
                      No chemical peels, laser skin resurfacing, retinols, or
                      other intensive skincare treatments/ingredients for at
                      least 4 weeks prior to your appointment
                    </li>
                  </ul>

                  <p className="font-sans mb-4 font-extrabold">
                    For Lip Blush Only:
                  </p>

                  <p className="font-sans mb-4">
                    If you have the simplex virus herpes, the lip blush
                    procedure can awaken an outbreak following the treatment. It
                    is highly recommended to take an antiviral medication for 5
                    days leading up to the day of the treatment, and then 5 days
                    after or as advised by your doctor.
                  </p>

                  <p className="font-sans mb-0">
                    Do not get lip injections for 4 weeks before and after this
                    procedure.
                  </p>
                </div>

                <div className="flex justify-center items-center py-6 space-x-2 rounded-b border-t border-zinc-700">
                  <button
                    onClick={closeModal}
                    className="font-sans tracking-normal font-extrabold flex items-center justify-center bg-zinc-900 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white rounded-lg text-white text-xl px-5 py-2.5 dark:hover:bg-white dark:hover:text-black dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-offset-black dark:focus:ring-white"
                    type="button"
                  >
                    Service Menu
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookingModal;
