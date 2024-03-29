import { motion, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import heroBannerMobile from "../../assets/images/marble3.jpg";
import heroBannerDesktop from "../../assets/images/lashedBack.png";
import lashedInkHero from "../../assets/images/LashedInkHero.svg";

import heroSquare from "../../assets/images/heroSquare.png";

// import heroImg from "../../assets/images/hero2.png";
// import heroImg2 from "../../assets/images/hero1.png";
// import heroImg2 from "../../assets/images/img9lashed.jpeg";

const HeroBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yPos = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <>
      <header style={{ marginTop: "90px" }} ref={ref}>
        <div
          className="relative overflow-hidden bg-white w-screen mb-10"
          style={{ height: "64vh" }}
        >
          {!isMobile ? (
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroBannerDesktop})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                y: yPos,
              }}
            />
          ) : (
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroBannerMobile})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                y: yPos,
              }}
            />
          )}

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            {!isMobile ? (
              <>
                <div className="border-2 border-pink-200 px-20 pt-10 pb-14 rounded-lg mt-16 backdrop-blur-md bg-white/60">
                  {/* <h2 className="font-sanslight text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-pink-300 text-center tracking-tight">
                    COSMETIC ARTISTRY
                  </h2> */}
                  <img
                    src={lashedInkHero}
                    alt="Lashed Ink Logo"
                    className="w-full max-w-lg "
                  />
                </div>

                {/* <p
                  className="max-w-5xl font-sans font-normal text-white text-lg sm:text-lg md:text-2xl xl:text-2xl mt-14 text-center mx-10 md:mx-16"
                  style={{
                    textShadow: "2px 2px 3px rgba(0, 0, 0, 0.95)",
                  }}
                >
                  As a permanent makeup artist and eyelash specialist, I am
                  passionate about helping you look and feel your best.
                  <br />
                  <br />
                  From impeccably voluminous lashes to meticulously crafted
                  brows, I am here to enhance your natural beauty and give you
                  the confidence you deserve.
                </p> */}
              </>
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: "30%",
                  width: "200px",
                  height: "200px",
                  backgroundImage: `url(${heroSquare})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.6)",
                  padding: "0",
                  margin: "auto",
                }}
              />
            )}
          </div>
        </div>
      </header>

      <h2 className="pt-16 px-10 text-center mx-auto text-3xl font-cursive tracking-tight leading-none md:text-4xl lg:text-5xl xl:text-6xl text-pink-400">
        Radiate Confidence
      </h2>
      {!isMobile ? (
        <>
          {/* <h3 className="pt-1 px-10 text-center mx-auto mb-14 text-xl font-light tracking-tight leading-none md:text-2xl lg:text-3xl xl:text-4xl text-pink-400 italic">
            "Enhance Your Look with Expert Touches"
          </h3> */}

          <div className="flex flex-row justify-center mb-10 mt-16">
            <p
              className="font-sanslight border-zinc-300 border-y py-10 px-12 font-normal text-zinc-600 text-lg sm:text-lg md:text-xl xl:text-2xl mb-20 text-center mx-20 max-w-md rounded-lg"
              style={{
                backgroundColor: "hsla(0,0%,100%,1)",
                backgroundImage: `radial-gradient(at 2% 73%, hsla(100,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 97% 73%, hsla(100,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 27% 9%, hsla(323,100%,99%,1) 0px, transparent 50%),
                      radial-gradient(at 16% 91%, hsla(343,100%,98%,1) 0px, transparent 50%),
                      radial-gradient(at 62% 4%, hsla(321,100%,97%,1) 0px, transparent 50%),
                      radial-gradient(at 97% 30%, hsla(0,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 2% 28%, hsla(0,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 66% 87%, hsla(333,100%,96%,1) 0px, transparent 50%),
                      radial-gradient(at 34% 83%, hsla(288,100%,95%,1) 0px, transparent 50%)`,
              }}
            >
              As a permanent makeup artist and eyelash specialist, I am
              passionate about helping you look and feel your best.
            </p>

            <p
              className="font-sanslight border-zinc-300 border-y py-10 px-12 font-normal text-zinc-600 text-lg sm:text-lg md:text-xl xl:text-2xl mb-20 text-center mx-20 max-w-md rounded-lg"
              style={{
                backgroundColor: "hsla(0,0%,100%,1)",
                backgroundImage: `radial-gradient(at 2% 73%, hsla(100,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 97% 73%, hsla(100,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 27% 9%, hsla(323,100%,99%,1) 0px, transparent 50%),
                      radial-gradient(at 16% 91%, hsla(343,100%,98%,1) 0px, transparent 50%),
                      radial-gradient(at 62% 4%, hsla(321,100%,97%,1) 0px, transparent 50%),
                      radial-gradient(at 97% 30%, hsla(0,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 2% 28%, hsla(0,0%,100%,1) 0px, transparent 50%),
                      radial-gradient(at 66% 87%, hsla(333,100%,96%,1) 0px, transparent 50%),
                      radial-gradient(at 34% 83%, hsla(288,100%,95%,1) 0px, transparent 50%)`,
              }}
            >
              {" "}
              From voluminous lashes to meticulously crafted brows, I help give
              you the confidence you deserve.
            </p>
          </div>
        </>
      ) : (
        <>
          {/* <h3 className="pt-1 pb-12 px-10 text-center mx-auto text-xl font-light tracking-tight leading-none md:text-2xl lg:text-3xl xl:text-4xl text-pink-200 italic">
            "Enhance Your Look with Expert Touches"
          </h3> */}
          <p
            className="max-w-5xl font-sans font-normal text-white text-lg sm:text-lg md:text-xl xl:text-2xl mb-36  text-center mx-10"
            style={{
              textShadow: "2px 2px 3px rgba(0, 0, 0, 0.95)",
            }}
          >
            As a permanent makeup artist and eyelash specialist, I am passionate
            about helping you look and feel your best.
            <br />
            <br />
            From impeccably voluminous lashes to meticulously crafted brows, I
            am here to enhance your natural beauty and give you the confidence
            you deserve.
          </p>
        </>
      )}
    </>
  );
};

export default HeroBanner;

{/* <header className="mt-24" ref={ref}>
  <div
    className="relative overflow-hidden bg-black w-screen mb-10 pt-24"
    style={{ height: "90vh" }}
  >
    {!isMobile ? (
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBannerDesktop})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: yPos,
        }}
      />
    ) : (
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBannerMobile})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: yPos,
        }}
      />
    )} */}
    {/* <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center"
            style={{
              y: yPos,
              width: "150%",
              left: "-25%",
              overflow: "visible",
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enable-background="new 0 0 1000 1000"
              className="fill-black"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                top: 15,
                left: 0,
              }}
            >
              <g>
                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                  <path d="M100,4334.8c0-7.2,564.1-989.6,1252.5-2182.3c688.4-1192.7,1785.5-3093,2438-4223.6C4443.1-3201.7,4988-4126.7,5000-4126.7s253.4,399.2,533,884.4c482.8,836.6,1130.6,1960,3391.8,5872.8c535.4,929.8,975.2,1697.1,975.2,1704.2s-2203.8,12-4900,12C2306.2,4346.7,100,4341.9,100,4334.8z M9190.1,3849.5C8162.3,2056.9,5009.6-3395.3,5000-3395.3c-7.2,0-303.6,506.7-659.7,1128.2c-511.5,886.8-3540,6135.8-3587.8,6214.6c-4.8,9.6,1905,16.7,4247.5,16.7h4254.6L9190.1,3849.5z" />
                </g>
              </g>
            </svg>
          </motion.div> */}
    {/* <div className="absolute inset-0 bg-black opacity-50" />  */}

    {/* <div className="absolute inset-0 flex flex-col justify-center items-center -mt-2">
      {!isMobile ? (
        <>
          <h2
            style={{
              textShadow: "2px 2px 3px rgba(0, 0, 0, 0.9)",
            }}
            className="font-london text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-pink-200 text-center mx-32 sm:mx-10 md:-mt-10"
          >
            Embrace the Artistry
          </h2>
          <p
            className="max-w-5xl font-sans font-normal text-white text-lg sm:text-lg md:text-2xl xl:text-2xl mt-14 text-center mx-10 md:mx-16"
            style={{
              textShadow: "2px 2px 3px rgba(0, 0, 0, 0.95)",
            }}
          >
            As a permanent makeup artist and eyelash specialist, I am passionate
            about helping you look and feel your best.
            <br />
            <br />
            From impeccably voluminous lashes to meticulously crafted brows, I
            am here to enhance your natural beauty and give you the confidence
            you deserve.
          </p>
        </>
      ) : (
        <>
          <div
            style={{
              position: "relative",
              top: "-5%",
              // left: "50%",
              margin: "auto",
              width: "200px",
              height: "200px",
              backgroundColor: "#000",
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.6)",
            }}
          >
            <h2
              style={{
                textShadow: "2px 2px 3px rgba(0, 0, 0, 0.9)",
                position: "absolute",
                // top: "50%",
                // left: "50%",
                margin: "auto",
                // width: "200px",
                // height: "200px",
                // backgroundColor: "#000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                lineHeight: "1.2",
              }}
              className="font-london text-5xl sm:text-6xl tracking-wide text-pink-200"
            >
              Embrace
              <br />
              the
              <br />
              Artistry
            </h2>
          </div>
        </>
      )}
    </div>
  </div>
</header>; */}