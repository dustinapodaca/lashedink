import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import placeholder from "../../assets/images/placeholder.jpeg";
import lashedIcon from "../../../lashedIcon.svg";

const ServiceModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

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
    const hasModalBeenOpened = sessionStorage.getItem("hasModalBeenOpened");
    if (!hasModalBeenOpened) {
      setIsOpen(true);
      sessionStorage.setItem("hasModalBeenOpened", "true");
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center justify-center bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white font-bold rounded-lg text-white text-xl px-5 py-2.5 dark:bg-black dark:hover:bg-white dark:hover:text-black dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-offset-black dark:focus:ring-white"
        type="button"
      >
        Before You Book
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
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0, 0, 0, 0.8)",
              zIndex: 9999,
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{
                padding: "2rem",
                borderRadius: "0.5rem",
                maxWidth: "100%",
                maxHeight: "90%",
                overflow: "auto",
              }}
            >
              <div className="relative rounded-lg shadow dark:bg-zinc-900 p-2">
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <span></span>
                  {!isMobile ? (
                    <h3 className="text-5xl text-center font-bold font-london text-gray-900 dark:text-white">
                      Before You Book
                    </h3>
                  ) : (
                    <h3 className="text-4xl text-center font-bold font-london text-gray-900 dark:text-white">
                      Before You Book
                    </h3>
                  )}

                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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

                <div className="p-6 text-white">
                  {!isMobile ? (
                    <div className="flex justify-between items-center mb-5">
                      <h2 className="text-2xl font-bold">
                        Are You a Candidate?
                      </h2>
                      <p className="w-full text-zinc-500 italic text-sm lg:max-w-4xl text-right">
                        Please be advised that we have a 24-hour cancellation
                        policy. If you need to cancel or reschedule your
                        appointment, please do so at least 24 hours in advance.
                        Failure to do so will result in a 50% charge of the
                        scheduled service.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="w-full text-zinc-500 italic text-sm lg:max-w-4xl text-center mb-4">
                        Please be advised that we have a 24-hour cancellation
                        policy. If you need to cancel or reschedule your
                        appointment, please do so at least 24 hours in advance.
                        Failure to do so will result in a 50% charge of the
                        scheduled service.
                      </p>
                      <h2 className="text-2xl font-bold mb-3 text-center">
                        Are You a Candidate?
                      </h2>
                    </>
                  )}

                  <p className="mb-4">
                    Permanent makeup, also known as micro-pigmentation, is a
                    cosmetic tattooing technique that involves the implantation
                    of pigment into the skin to create long-lasting,
                    semi-permanent makeup effects. The duration of permanent
                    makeup can vary from several months to years, depending on
                    the area of the body, the client's skin type, and aftercare.
                  </p>

                  <p className="mb-4">
                    Unfortunately, not everyone is a candidate for permanent
                    makeup. The following list contains contraindications that
                    disqualify you from receiving permanent makeup:
                  </p>

                  <ul className="list-disc list-inside mb-8">
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

                  <hr className="w-full my-8 border-gray-300" />

                  <h2 className="text-2xl font-bold mb-2">
                    Permanent Makeup Preparation
                  </h2>

                  <p className="mb-4">
                    All permanent makeup appointments must be approved by the
                    artist before scheduling to ensure you are a good candidate.
                  </p>

                  <p className="mb-4">
                    If you have previous permanent makeup, please schedule an
                    in-person consultation to have your old work assessed and
                    ensure it can be corrected. If you are unable to schedule an
                    in-person consultation (preferred), please send in clear
                    photos with no makeup or filters on of your previous
                    permanent makeup.
                  </p>

                  <p className="mb-4">
                    Follow these guidelines to prepare for your permanent makeup
                    appointment:
                  </p>

                  <ul className="list-disc list-inside mb-8">
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

                  <p className="mb-4 font-bold">For Lip Blush Only:</p>

                  <p className="mb-4">
                    If you have the simplex virus herpes, the lip blush
                    procedure can awaken an outbreak following the treatment. It
                    is highly recommended to take an antiviral medication for 5
                    days leading up to the day of the treatment, and then 5 days
                    after or as advised by your doctor.
                  </p>

                  <p className="mb-0">
                    Do not get lip injections for 4 weeks before and after this
                    procedure.
                  </p>
                </div>

                <div className="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                  <button
                    onClick={closeModal}
                    className="flex items-center justify-center bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white font-bold rounded-lg text-white text-xl px-5 py-2.5 dark:bg-black dark:hover:bg-white dark:hover:text-black dark:focus:ring-2 dark:focus:ring-offset-2 dark:focus:ring-offset-black dark:focus:ring-white"
                    type="button"
                  >
                    Proceed to Services
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

                {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book Now
                  </button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceModal;
