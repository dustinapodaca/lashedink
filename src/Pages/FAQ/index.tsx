import React, { useState, useEffect } from "react";

const FAQ = () => {
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
      <section className="w-full h-96 mt-24">
        <h2 className="font-london pt-28 text-4xl text-white text-center">
          Frequently <br /> Asked <br /> Questions
        </h2>
      </section>
    </>
  );
};

export default FAQ;
