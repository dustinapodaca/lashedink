import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// import aboutPic from "../../assets/images/aboutPic.jpg";
import aboutPic from "../../assets/images/aboutPicNoBack.png";

const About = () => {
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

  return (
    <>
      <motion.section
        className="pt-2 overflow-hidden bg-white md:pt-10 sm:pt-16 2xl:pt-16"
        style={{ marginTop: "164px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 lg:pl-16 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              {isMobile ? (
                <div className="relative">
                  <img
                    className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-100 rounded-lg"
                    src={aboutPic}
                    alt=""
                  />
                </div>
              ) : (
                <></>
              )}
              {/* <p className="text-2xl italic font-bold mb-1 text-pink-500 sm:text-4xl lg:text-5xl text-left indent-24 sm:indent-28 md:indent-32 md:text-left">
                My name is <br />
              </p> */}
              <h2 className="-mt-4 font-sans tracking-tighter text-pink-500 text-center text-5xl md:text-6xl lg:text-6xl">
                Tatiana Herran
              </h2>
              {/* <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p> */}
              <div className="w-full font-sans">
                <p className="max-w-xl mt-2 text-lg leading-relaxed text-black md:mt-8">
                  I am a licensed esthetician specializing in permanent makeup
                  and eyelash extensions in Denver, CO. My dedication to
                  flawless results and client satisfaction has earned me
                  recognition as a top beauty specialist. <br />
                  <br />
                  Connecting with individuals and helping them feel confident
                  through makeup artistry fuels my passion and growth in the
                  beauty community. With over 5 years of experience and a proven
                  track record of satisfied clients, I deliver the skills and
                  expertise to create a range of stunning results, from natural
                  to bold and dramatic. When you book an appointment
                  with me, you can expect a personalized experience that
                  enhances your natural beauty and accentuates your unique
                  features. <br />
                  {/* Feel free to reach out to me and let's embark on a journey of
                  self-transformation and rediscovery together! */}
                </p>
              </div>
              <p className="font-sans mt-10 text-xl text-black md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full top-6 h-1 bg-pink-500"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br />
                <br className="block" /> Ask me on{" "}
                <a
                  href="https://www.instagram.com/lashed.ink/?hl=en"
                  title="Lashed Ink Instagram"
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  Instagram
                </a>
                !
              </p>
            </div>
            {isMobile ? (
              <></>
            ) : (
              <div
                className="relative border rounded-xl bg-pink-100 mx-10"
                style={{
                  backgroundColor: "hsla(0,0%,100%,1)",
                  backgroundImage: `radial-gradient(at 36% 91%, hsla(323,84%,91%,1) 0px, transparent 50%),
                      radial-gradient(at 19% 20%, hsla(345,100%,96%,1) 0px, transparent 50%),
                      radial-gradient(at 98% 82%, hsla(321,100%,95%,1) 0px, transparent 50%),
                      radial-gradient(at 72% 21%, hsla(100,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 10% 63%, hsla(276,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 97% 34%, hsla(272,67%,80%,1) 0px, transparent 50%),
                      radial-gradient(at 64% 75%, hsla(288,59%,89%,1) 0px, transparent 50%)`,
                }}
              >
                {/* <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              /> */}

                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-100 rounded-xl"
                  src={aboutPic}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
