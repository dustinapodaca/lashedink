import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import ServiceCard from "../../Components/ServiceCard";
import BookingModal from "../../Components/BookingModal";

import { 
  microbladeImages,
  powderImages,
  comboImages,
  darkLipImages,
  lipBlushImages,
  classicEye,
  hybridEye,
  volumeEye,
} from "../../Data/imagesData";

import servicesHeader from "../../assets/images/marble.jpg";
import headerIcon from "../../assets/images/img1-2lashed.png";

import browIcon from "../../assets/images/img11lashed.jpeg";
import lashIcon from "../../assets/images/img3lashed.jpeg";
import lipIcon from "../../assets/images/img10lashed.jpeg";

const Services = () => {
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

  return (
    <>
      <div className="h-full bg-black mt-24">
        <div
          className="relative bg-zinc-900"
          style={{
            backgroundImage: `url(${servicesHeader})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-black"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-screen-lg text-center sm:mx-auto">
              <a
                href="/"
                aria-label="View"
                className="inline-block mb-5 rounded-full sm:mx-auto"
              >
                <div className="flex items-center justify-center w-28 h-28 mb-4 rounded-full">
                  {!isMobile ? (
                    <img
                      src={headerIcon}
                      alt="headerIcon"
                      className="rounded-full mt-20 mb-16"
                      style={{
                        mixBlendMode: "lighten",
                      }}
                    />
                  ) : (
                    <img
                      src={headerIcon}
                      alt="headerIcon"
                      className="rounded-full w-24 h-24 mt-10"
                      style={{
                        mixBlendMode: "lighten",
                      }}
                    />
                  )}
                </div>
              </a>
              <h2
                className="mb-4 py-2 font-london text-center font-bold tracking-tight text-pink-200 text-5xl md:text-6xl lg:text-7xl sm:leading-none"
                style={{
                  textShadow: "2px 2px 3px rgba(0, 0, 0, 0.9)",
                }}
              >
                Services Menu
              </h2>
              {!isMobile ? (
                <>
                  <p
                    className="text-base text-white mt-8 text-md sm:text-lg lg:text-xl"
                    style={{
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.95)",
                    }}
                  >
                    Experience a fusion of art and beauty, where skilled hands
                    and a keen eye for detail combine to create a masterpiece
                    that enhances your individuality and elevates your
                    confidence to new heights.
                  </p>
                  <hr className="w-full my-8 border-zinc-400" />
                </>
              ) : (
                <>
                  <p
                    className=" bg-black text-center p-4 mb-10 rounded-xl bg-opacity-80 text-base text-white md:text-lg sm:px-4"
                    style={{
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.95)",
                    }}
                  >
                    Experience a fusion of art and beauty, where skilled hands
                    and a keen eye for detail combine to create a masterpiece
                    that enhances your individuality and elevates your
                    confidence to new heights.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          {isMobile && <BookingModal />}
        </div>

        <div className="px-4 pt-8 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16">
          <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-4">
            <div className="flex items-center group lg:max-w-xl">
              <a href="/" aria-label="Item" className="mr-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                  <img src={browIcon} alt="hairIcon" className="rounded-full" />
                </div>
              </a>
              <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                <span className="inline-block ml-2 text-white">
                  Eyebrow Services
                </span>
              </h2>
            </div>
            {!isMobile && <BookingModal />}
          </div>
          <div className="max-w-3xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-6xl">
            <p className="mb-1 text-xs text-white font-semibold tracking-wide uppercase md:mb-2 text-center">
              <hr className="max-w-full my-8 border-gray-300 text-center" />
            </p>
            <p className="text-base text-gray-200 md:text-lg">
              Eyebrows are such an important focal point that frame our face and
              can drastically affect the way we look. For this reason it is
              important we tailor each pair of eyebrows to the individual, their
              face proportions and their desired look. Microblading, powder
              brow, and combo brow are the three techniques/styles that I offer
              for semi-permanent eyebrow tattooing.
            </p>
          </div>
          <div className="grid gap-8 row-gap-5 mb-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:row-gap-8">
            <div>
              <ServiceCard
                images={microbladeImages}
                descText="Microblading is a technique that involves a handheld blade being used to implant pigment into the skin and create thin hair-like strokes to give the illusion of brow hairs. This will give the most natural look. It is best for clients who do not like the look of eyebrows filled in with makeup. The ideal candidate has even eyebrow hair patterns and normal to dry skin."
                headlineText="Microblading"
              />
            </div>
            <div>
              <ServiceCard
                images={powderImages}
                descText="Powder brows also known as ombre brows involve using a machine to shade the brows and create a soft (or bold) powdered effect similar to how the eyebrows look when filled in with makeup. The result is a more defined finish as the entire area of the brow is shaded in. This technique is good for all skin types."
                headlineText="Powder/Ombré"
              />
            </div>
            <div>
              <ServiceCard
                images={comboImages}
                descText="Combo brows are a combination of microblading and powder brows. It offers the best of both worlds by combining the hair strokes of microblading and the shading of powder. This technique can be customized with more strokes and less shading to keep it more natural or few strokes and more shading to add more boldness."
                headlineText="Combo"
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:justify-between lg:flex-row">
            <div className="flex items-center group lg:max-w-xl">
              <a href="/" aria-label="Item" className="mr-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                  {/* <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-pink-500"
                    viewBox="0 0 52 52"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
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
                  </motion.svg> */}
                  <img src={lashIcon} alt="hairIcon" className="rounded-full" />
                </div>
              </a>
              <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                <span className="inline-block ml-2 text-white">
                  Eyelash Extensions
                </span>
                {/* <div className="h-1 ml-auto duration-500 origin-left transform bg-zinc-500 scale-x-0 group-hover:scale-x-100" /> */}
              </h2>
            </div>
          </div>
          <div className="max-w-3xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-6xl">
            <p className="mb-1 text-xs text-white font-semibold tracking-wide uppercase md:mb-2 text-center">
              <hr className="max-w-full my-8 border-gray-300 text-center" />
            </p>
            <p className="text-base text-gray-200 md:text-lg">
              Eyelash extensions are a cosmetic procedure that involves
              attaching synthetic eyelashes to your natural lashes to make them
              appear longer and fuller. Your look can be customized according to
              your preferences, eye shape, and natural lash health.
            </p>
          </div>
          <div className="grid gap-8 row-gap-5 mb-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:row-gap-8">
            <div>
              <ServiceCard
                images={classicEye}
                descText="Classic eyelash extensions are your most natural option. With this set one single eyelash extension is applied to every healthy natural eyelash giving a softer, more understated look. This is perfect for clients who want to add a little bit of length and fullness to their natural lashes in place of mascara."
                headlineText="Classic"
              />
            </div>
            <div>
              <ServiceCard
                images={hybridEye}
                descText="Hybrid eyelash extensions combine both classic and volume techniques. This set involves a combination of classic lash extensions and volume fans to create a more textured look. With hybrid extensions you will get a fuller effect than classic lashes but not as much drama as volume extensions."
                headlineText="Hybrid"
              />
            </div>
            <div>
              <ServiceCard
                images={volumeEye}
                descText="Volume eyelash extensions are the most full and dramatic type of extensions offered at Lashed.Ink. This technique involves applying multiple lash extensions to one natural lash, creating a fan and giving a fuller, fluffier look. This is ideal for the client who wants a more bold look and wants to ditch their strip lashes!"
                headlineText="Volume"
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:justify-between lg:flex-row">
            <div className="flex items-center group lg:max-w-xl">
              <a href="/" aria-label="Item" className="mr-3">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                  {/* <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-pink-500"
                    viewBox="0 0 52 52"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
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
                  </motion.svg> */}
                  <img src={lipIcon} alt="hairIcon" className="rounded-full" />
                </div>
              </a>
              <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
                <span className="inline-block ml-2 text-white">
                  Other Services
                </span>
                {/* <div className="h-1 ml-auto duration-500 origin-left transform bg-zinc-500 scale-x-0 group-hover:scale-x-100" /> */}
              </h2>
            </div>
          </div>
          <div className="max-w-3xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-6xl">
            <p className="mb-1 text-xs text-white font-semibold tracking-wide uppercase md:mb-2 text-center">
              <hr className="max-w-full mt-8 border-gray-300 text-center" />
            </p>
            {/* <p className="text-base text-gray-200 md:text-lg">
              Eyelash extensions are a cosmetic procedure that involves
              attaching synthetic eyelashes to your natural lashes to make them
              appear longer and fuller. Your look can be customized according to
              your preferences, eye shape, and natural lash health.
            </p> */}
            <div className="relative max-w-full rounded-lg border-x border-zinc-800 shadow bg-black">
              <div className="px-5 sm:px-10 pb-10 pt-5">
                <a href="#">
                  <h5 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Corrections
                  </h5>
                </a>
                <p className="font-normal text-zinc-700 dark:text-zinc-400 h-full">
                  Color correction may be necessary for some clients with
                  previous permanent makeup. Dissatisfaction with the original
                  color, changes in personal preferences, fading or
                  discoloration over time, or improper color selection during
                  the initial procedure are all reasons someone might be in need
                  for a color correction. You will need to schedule a free in
                  person consultation to get your previous work assessed. Color
                  correction often requires multiple sessions to achieve the
                  desired results. This is because the process needs to be
                  approached gradually to avoid over correcting or causing
                  further issues. Each session allows the technician to assess
                  the progress and make additional adjustments if needed but we
                  will try to correct in as few sessions as possible.
                </p>
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1 rounded-b-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500"></span>
            </div>
          </div>

          <div className="grid gap-8 row-gap-5 md:grid-cols-2 sm:grid-cols-1">
            {/* <div>
              <ServiceCard
                images={volumeEye}
                descText="Color correction may be necessary for some clients with previous permanent makeup.  Dissatisfaction with the original color, changes in personal preferences, fading or discoloration over time, or improper color selection during the initial procedure are all reasons someone might be in need for a color correction. You will need to schedule a free in person consultation to get your previous work assessed. Color correction often requires multiple sessions to achieve the desired results. This is because the process needs to be approached gradually to avoid over correcting or causing further issues. Each session allows the technician to assess the progress and make additional adjustments if needed but we will try to correct in as few sessions as possible."
                headlineText="Corrections"
              />
            </div> */}
            <div className="mx-auto">
              <ServiceCard
                images={lipBlushImages}
                descText="The lip blush procedure is semi-permanent makeup or cosmetic tattooing that aims to enhance the appearance of the lips by adding color and definition. Depending on the clients desired look we can give a soft tint to the lips or build the color up to give a more saturated “lip stick” inspired look."
                headlineText="Lip Blush"
              />
            </div>
            <div className="mx-auto">
              <ServiceCard
                images={darkLipImages}
                descText="Dark lip neutralization is a specialized technique used in permanent makeup to neutralize the appearance of dark or unwanted pigments on the lips. This procedure aims to create a more balanced and natural lip color by using color correction to counteract the undesired darkness. Neutralizing the darkness in the lips will take multiple sessions depending on the degree of correction needed. Each session builds upon the previous one, gradually lightening and neutralizing the dark pigments. This process minimizes the risk of overcorrection and ensures a more seamless result."
                headlineText="Dark Lip Neutralization"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
