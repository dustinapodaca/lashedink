import ServiceSelector from "../../Components/ServiceSelector";
import ServiceCard from "../../Components/ServiceCard";

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
    <div className="h-full bg-black mt-20">
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center items-center rounded-xl">
        <div
          className="w-screen bg-zinc-800 shadow-lg overflow-hidden relative"
          style={{ height: "550px" }}
        >
          <h1 className="text-white text-4xl md:text-4xl font-extrabold text-center mt-6 mb-2 font-poiret">
            Services
          </h1>
          <div className="px-6 rounded-lg mb-8 text-sm text-white font-poiret">
            <p className="my-4">
              Please be advised that we have a 24-hour cancellation policy. If
              you need to cancel or reschedule your appointment, please do so at
              least 24 hours in advance. Failure to do so will result in a 50%
              charge of the scheduled service.
            </p>
            <p className="mb-3">
              Please note that we operate on an appointment-only basis.
            </p>
            <p className="mb-3">
              Please arrive on time for your scheduled appointment. If you are
              more than 10 minutes late, we may not be able to accommodate your
              appointment and you may be subject to a cancellation fee.
            </p>
            <p className="mb-3">
              Please inform us of any allergies or sensitivities you may have
              prior to your appointment. We are not responsible for any allergic
              reactions that may occur during or after your service.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)`,
              }}
            ></div>
          </div>
          <div className="flex justify-center">
            <button className="mx-auto bg-black text-white py-2 px-6 font-poiret text-xl rounded-lg shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">
              Book Now
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl mx-6">
          <ServiceCard images={browImages} text="Microblading" />
          <ServiceCard images={lashImages} text="Eyelashes" />
          {/* <ServiceSelector images={browImages} text="Microblading" />
          <ServiceSelector images={lashImages} text="Eyelashes" /> */}
        </div>
      </div>
    </div>
  );
};

export default Services;