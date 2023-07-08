import React, { useState, useEffect } from "react";
import aboutPic from "../../assets/images/aboutPic.jpg";

// import heroImg from "../../assets/images/aboutWallpaper.jpg";

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
      <section className="pt-2 overflow-hidden bg-black md:pt-10 sm:pt-16 2xl:pt-16 mt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              {isMobile ? (
                <div className="relative">
                  {/* <img
                    className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                    alt=""
                  /> */}

                  <img
                    className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-100"
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
              <h2 className="mt-6 font-cursive text-pink-500 text-center text-5xl md:text-6xl lg:text-6xl">
                Tatiana Herran
              </h2>
              {/* <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p> */}
              <div className="w-full">
                <p className="max-w-xl mt-2 text-lg leading-relaxed text-white md:mt-8">
                  I am a licensed esthetician specializing in permanent makeup
                  and eyelash extensions in Denver, CO. I take pride in being
                  recognized as one of the best beauty specialists, driven by my
                  unwavering pursuit of perfection and a strong desire to ensure
                  utmost satisfaction for all my clients. <br />
                  <br />
                  My deep passion for the beauty community and my genuine
                  connection with individuals, helping them feel more confident
                  through cosmetic enhancements, fuels my continuous growth as
                  an artist. With over 4 years of experience, I possess the
                  skills and expertise to create a range of stunning results,
                  from natural and subtle to bold and dramatic. When you book an
                  appointment with me, you can expect a personalized experience
                  that enhances your natural beauty and accentuates your unique
                  features. <br />
                  {/* Feel free to reach out to me and let's embark on a journey of
                  self-transformation and rediscovery together! */}
                </p>
              </div>
              <p className="mt-10 text-xl text-white md:mt-8">
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
              <div className="relative">
                {/* <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              /> */}

                <img
                  className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-100"
                  src={aboutPic}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
