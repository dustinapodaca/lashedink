import React, { useState, useEffect } from "react";
import Map from "../../Components/Map";


const Contact = () => {
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
      <section className="mt-24">
        <Map />
      </section>
    </>
  );
};

export default Contact;