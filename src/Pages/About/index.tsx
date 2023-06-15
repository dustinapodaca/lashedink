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
      {/* <section>
        <div className="px-6 mt-20 pt-24 md:px-12 text-white text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div
                  style={{
                    background: "rgba(255, 20, 147, 0.1)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 0 10px 5px #ff1493",
                    padding: "20px",
                    borderRadius: "10px",
                    display: "inline-block",
                  }}
                  className="block rounded-lg shadow-lg px-6 py-14 md:px-12 lg:-mr-14"
                >
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
                    My name is Tatiana Herran.
                  </h1>
                  <div className="w-full">
                    <p className="text-white tracking-tight text-xl">
                      I am a licensed esthetician specializing in permanent
                      makeup and eyelash extensions in Denver, CO. I take pride
                      in being recognized as one of the best beauty specialists,
                      driven by my unwavering pursuit of perfection and a strong
                      desire to ensure utmost satisfaction for all my clients.{" "}
                      <br />
                      <br />
                      My deep passion for the beauty community and my genuine
                      connection with individuals, helping them feel more
                      confident through cosmetic enhancements, fuels my
                      continuous growth as an artist. With over 4 years of
                      experience, I possess the skills and expertise to create a
                      range of stunning results, from natural and subtle to bold
                      and dramatic. When you book an appointment with me, you
                      can expect a personalized experience that enhances your
                      natural beauty and accentuates your unique features.{" "}
                      <br />
                      <br />
                      Feel free to reach out to me and let's embark on a journey
                      of self-transformation and rediscovery together!
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <img
                  src={aboutPic}
                  className="w-5/6 rounded-lg shadow-lg"
                  alt="heroImg"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              What our <span className="text-blue-500">customers</span> <br />{" "}
              are saying
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg shadow-lg"
                src={aboutPic}
                alt=""
              />

              <div className="mt-8 lg:px-10 lg:mt-0">
                <h1 className="text-pink-500 text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
                  My name is Tatiana Herran.
                </h1>
                <div className="w-full">
                  <p className="text-white tracking-tight text-xl">
                    I am a licensed esthetician specializing in permanent makeup
                    and eyelash extensions in Denver, CO. I take pride in being
                    recognized as one of the best beauty specialists, driven by
                    my unwavering pursuit of perfection and a strong desire to
                    ensure utmost satisfaction for all my clients. <br />
                    <br />
                    My deep passion for the beauty community and my genuine
                    connection with individuals, helping them feel more
                    confident through cosmetic enhancements, fuels my continuous
                    growth as an artist. With over 4 years of experience, I
                    possess the skills and expertise to create a range of
                    stunning results, from natural and subtle to bold and
                    dramatic. When you book an appointment with me, you can
                    expect a personalized experience that enhances your natural
                    beauty and accentuates your unique features. <br />
                    <br />
                    Feel free to reach out to me and let's embark on a journey
                    of self-transformation and rediscovery together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="pt-10 overflow-hidden bg-black md:pt-10 sm:pt-16 2xl:pt-16 mt-24">
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
              <h2 className="text-3xl font-black leading-relaxed text-pink-500 sm:text-4xl lg:text-6xl text-center md:text-left">
                My name is <br />
                <span className="font-cursive text-5xl md:text-6xl lg:text-7xl">
                  Tatiana Herran!
                </span>
              </h2>
              {/* <p className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p> */}
              <div className="w-full">
                <p className="max-w-xl mt-3 text-lg leading-relaxed text-white md:mt-8">
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
              <p className="mt-4 text-xl text-white md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full top-6 h-1 bg-pink-500"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" /> Ask me on{" "}
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
      {/* <section className="overflow-hidden bg-black lg:bg-transparent mt-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 py-16 md:py-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
          <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
            <div className="relative z-10 flex w-64 mx-auto overflow-hidden md:w-80 lg:w-auto rounded-xl">
              <img
                alt=""
                src={aboutPic}
                decoding="async"
                data-nimg="future"
                className="object-cover w-full h-1/3"
              />
            </div>
          </div>
          <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 pb-14 lg:pl-16 xl:pl-20">
            <div
              // style={{
              //   backgroundImage: `url(${heroImg})`,
              //   backgroundPosition: "center",
              //   backgroundSize: "cover",
              //   backgroundRepeat: "no-repeat",
              //   filter: "brightness(0.9)",
              // }}
              className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-pink-500"
            ></div>
            <figure className="relative max-w-md mx-auto text-center lg:mx-0 lg:text-left">
              <div className="flex justify-center text-black lg:justify-start">
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                  </svg>
                </div>
              </div>
              <blockquote className="mt-2">
                <p className="text-xl font-medium lg:text-black">
                  “Here you can write a nice testimonial for your product!”
                </p>
              </blockquote>
              <figcaption className="mt-2 text-sm text-black">
                <strong className="font-semibold lg:text-black before:content-['—_']">
                  Michael Andreuzza
                </strong>
                , Batman
              </figcaption>
            </figure>
          </div>
          <div className="pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
            <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
              <div className="max-w-xl text-center lg:text-left">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    I am a short heading
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Use this paragraph to share information about your company
                    or products. Make it engaging and interesting, and showcase
                    your brand's personality. Thanks for visiting our website!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <a
                    href="#"
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  >
                    Learn more
                    <span aria-hidden="true"> → </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default About;
