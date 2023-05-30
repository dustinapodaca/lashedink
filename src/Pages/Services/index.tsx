import ServiceSelector from "../../Components/ServiceSelector";
import ServiceCard from "../../Components/ServiceCard";
import { motion } from "framer-motion";

import heroImg from "../../assets/images/hero1.png";

// import brow1 from '../../assets/images/brows/brow1.jpg';
import brow1 from '../../assets/images/brows/brow3.jpg';
import brow2 from '../../assets/images/brows/brow2.jpg';
import brow3 from '../../assets/images/brows/brow6.jpg';
import brow4 from '../../assets/images/brows/brow4.jpg';
import brow5 from '../../assets/images/brows/brow5.jpg';

// import lash1 from '../../assets/images/lashes/lash1.jpg';
import lash2 from '../../assets/images/lashes/lash2.jpg';
import lash3 from '../../assets/images/lashes/lash3.jpg';
import lash4 from '../../assets/images/lashes/lash4.jpg';
import lash5 from '../../assets/images/lashes/lash5.jpg';

const browImages = [
  { id: 1, src: brow1 },
  { id: 2, src: brow2 },
  { id: 3, src: brow3 },
  { id: 4, src: brow4 },
  { id: 5, src: brow5 },
  // { id: 6, src: brow6 },
];

const lashImages = [
  // { id: 1, src: lash1 },
  { id: 2, src: lash4 },
  { id: 3, src: lash3 },
  { id: 4, src: lash5 },
  { id: 5, src: lash2 },
];

const Services = () => {
  return (
    <>
      <div className="h-full bg-black mt-24">
        <div>
          <div
            className="bg-cover bg-center bg-zinc-900"
            // style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
              <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl pt-8">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-pink-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">Services</span>
                  </span>{" "}
                  Menu
                </h2>
                <p className="text-base text-white md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
          </div>
          <div className="relative px-4 sm:px-0">
            <div className="absolute inset-0 bg-zinc-900 h-1/2" />
            <div className="relative grid shadow-xl mx-auto overflow-hidden bg-zinc-800 divide-y rounded-lg sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
              <div className="inline-block p-8 text-center rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-black">
                  <svg
                    className="w-10 h-10 text-pink-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-xl tracking-wide text-gray-300">
                  Classic
                </p>
              </div>
              <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-black">
                  <svg
                    className="w-10 h-10 text-pink-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-xl tracking-wide text-gray-300">
                  Hybrid
                </p>
              </div>
              <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-black">
                  <svg
                    className="w-10 h-10 text-pink-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-xl tracking-wide text-gray-300">
                  Volume
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-4">
            {/* <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
              <a href="/" aria-label="Item" className="mr-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-pink-500"
                    viewBox="0 0 52 52"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <circle
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M26 3.82c-11.598 0-21.02 9.421-21.02 21 0 11.598 9.421 21 21.02 21 11.579 0 21-9.402 21-21 0-11.579-9.421-21-21-21zm0 38c-9.941 0-18-8.059-18-18s8.059-18 18-18c9.941 0 18 8.059 18 18s-8.059 18-18 18zm-7-18l3-5 3 5 5 3-5 3-3 5-3-5-5-3 5-3zm7 7h4v-2h-4v2z"
                      fill="currentColor"
                    />
                  </motion.svg>
                </div>
              </a>
              <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                <span className="inline-block mb-2 ml-2 text-white">
                  Service Menu
                </span>
                <div className="h-1 ml-auto duration-500 origin-left transform bg-zinc-500 scale-x-30 group-hover:scale-x-100" />
              </h2>
            </div> */}
            <p className="w-full text-zinc-500 lg:text-sm lg:max-w-md">
              Please be advised that we have a 24-hour cancellation policy. If
              you need to cancel or reschedule your appointment, please do so at
              least 24 hours in advance. Failure to do so will result in a 50%
              charge of the scheduled service.
            </p>
          </div>
          <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:row-gap-8">
            <div>
              <ServiceCard images={browImages} text="Microblading" />
            </div>
            <div>
              <ServiceCard images={lashImages} text="Eyelashes" />
            </div>
            <div>
              <ServiceCard images={browImages} text="Microblading" />
            </div>
            <div>
              <ServiceCard images={lashImages} text="Eyelashes" />
            </div>
            <div>
              <ServiceCard images={browImages} text="Microblading" />
            </div>
            <div>
              <ServiceCard images={lashImages} text="Eyelashes" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;



// <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
//   <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
//     <svg
//       className="absolute left-0 hidden h-full text-black transform -translate-x-1/2 lg:block"
//       viewBox="0 0 100 100"
//       fill="currentColor"
//       preserveAspectRatio="none slice"
//     >
//       <path d="M50 0H100L50 100H0L50 0Z" />
//     </svg>
//     <img
//       className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
//       src={heroImg}
//       alt="lashes and brows"
//     />
//   </div>
//   <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
//     <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
//       <h2 className="mb-5 ml-20 font-sans text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl sm:leading-none">
//         Service Menu
//       </h2>
//       <p className="pr-5 mb-5 text-base text-zinc-400 md:text-lg">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//               accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//               quae. explicabo.
//             </p>
//       <p className="my-4 text-zinc-400 md:text-md">
//         Please be advised that we have a 24-hour cancellation policy. If you
//         need to cancel or reschedule your appointment, please do so at least 24
//         hours in advance. Failure to do so will result in a 50% charge of the
//         scheduled service.
//       </p>
//       <p className="mb-3 text-zinc-400 md:text-md">
//         Please note that we operate on an appointment-only basis.
//       </p>
//       <p className="mb-3 text-zinc-400 md:text-md">
//         Please arrive on time for your scheduled appointment. If you are more
//         than 10 minutes late, we may not be able to accommodate your appointment
//         and you may be subject to a cancellation fee.
//       </p>
//       <p className="mb-3 text-zinc-400 md:text-md">
//         Please inform us of any allergies or sensitivities you may have prior to
//         your appointment. We are not responsible for any allergic reactions that
//         may occur during or after your service.
//       </p>
//     </div>
//   </div>
// </div>




    //       <h1 className="text-white text-4xl md:text-4xl font-extrabold text-center mt-10 mb-2 font-poiret">
    //         Services
    //       </h1>
    //       <div className="px-6 rounded-lg mb-8 text-sm text-white font-poiret">
    //         <p className="my-4">
    //           Please be advised that we have a 24-hour cancellation policy. If
    //           you need to cancel or reschedule your appointment, please do so at
    //           least 24 hours in advance. Failure to do so will result in a 50%
    //           charge of the scheduled service.
    //         </p>
    //         <p className="mb-3">
    //           Please note that we operate on an appointment-only basis.
    //         </p>
    //         <p className="mb-3">
    //           Please arrive on time for your scheduled appointment. If you are
    //           more than 10 minutes late, we may not be able to accommodate your
    //           appointment and you may be subject to a cancellation fee.
    //         </p>
    //         <p className="mb-3">
    //           Please inform us of any allergies or sensitivities you may have
    //           prior to your appointment. We are not responsible for any allergic
    //           reactions that may occur during or after your service.
    //         </p>


    //     <div className="relative overflow-hidden rounded-xl mx-6">
    //       <ServiceCard images={browImages} text="Microblading" />
    //       <ServiceCard images={lashImages} text="Eyelashes" />
    //       {/* <ServiceSelector images={browImages} text="Microblading" />
    //       <ServiceSelector images={lashImages} text="Eyelashes" /> */}
    //     </div>
    //   </div>
    // </div>