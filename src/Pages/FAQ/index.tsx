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
      <section className="w-full h-96 mt-36">
        <h2 className="font-london text-6xl text-white text-center mx-36">
          Frequently <br /> Asked <br /> Questions
        </h2>
      </section>
    </>
  );
};

export default FAQ;
