import SocialLinks from "../SocialLinks";

const Map = () => {
  return (
    <section className="bg-zinc-900">
      <div className="container px-6 py-12 mx-auto pb-20">
        <div>
          <p
            className="font-cursive text-pink-300 text-6xl text-center py-8 md:py-10"
            style={{
              textShadow: "2px 2px 3px rgba(0, 0, 0, 0.9)",
            }}
          >
            Have Questions?
          </p>
          <div className="-mt-8 flex justify-center py-2 lg:py-0 lg:justify-start">
            <SocialLinks />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 text-center lg:text-left">
            <hr className="w-full border-zinc-700" />

            <div>
              <span className="inline-block p-3 text-pink-300 rounded-full bg-black mb-2 -mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="text-2xl font-sans font-extrabold text-white">Email</h2>
              <p className="font-sans mt-2 text-lg text-zinc-400">
                Reach out anytime! 👋 <br />
              </p>
              <p className="font-sans text-md italic text-zinc-300">
                I do my best to respond within 24 hours.
              </p>
              <p className="font-sans mt-2 text-lg text-pink-400 hover:text-pink-200 transition-colors ease-in-out">
                <a href="mailto:tatiana_herran@live.com">
                  tatiana_herran@live.com
                </a>
              </p>
            </div>

            <hr className="w-full border-zinc-700" />

            <div>
              <span className="inline-block p-3 text-pink-300 rounded-full bg-black mb-2 -mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="text-2xl font-sans font-extrabold text-white">Office</h2>
              <p className="font-sans mt-2 text-lg text-zinc-400">
                In the DTC area of Denver, CO.
              </p>
              <p className="font-sans mt-2 text-lg text-pink-400 hover:text-pink-200 transition-colors ease-in-out">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7939+E+Arapahoe+Rd+%23210+Greenwood+Village,+CO+80112"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7939 E Arapahoe Rd #210 <br /> Greenwood Village, CO 80112
                </a>
              </p>
            </div>

            <hr className="w-full border-zinc-700" />

            <div>
              <span className="inline-block p-3 text-pink-300 rounded-full bg-black mb-2 -mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="text-2xl font-sans font-extrabold text-white">Phone</h2>
              <p className="font-sans mt-2 text-lg text-zinc-400">
                Mon-Th & Sat from 9am to 5pm.
              </p>
              <p className="font-sans text-md italic text-zinc-300">
                {`(Closed Fri & Sun)`}
              </p>
              <p className="font-sans mt-2 text-lg text-pink-400 hover:text-pink-200 transition-colors ease-in-out">
                <a href="tel:+13032107403">+1 (303) 210-7403</a>
              </p>
            </div>
            <hr className="w-full border-zinc-700" />
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto shadow-black shadow-2xl">
            <iframe
              className="w-full h-full"
              style={{
                border: 0,
                filter: "grayscale(30%) invert(100%) hue-rotate(110deg)",
                boxShadow: "0 0 10px rgba(255, 105, 180, 0.3) inset",
              }}
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJQWULTWt9bIcR8QaAg8FB3H8&key=AIzaSyBiTyDXcgWVKFajSznnr6r9VSoNm8iJNGE&zoom=14"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
