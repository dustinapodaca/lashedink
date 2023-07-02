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
      <section className="w-full mt-24 mb-10 md:mb-16">
        {!isMobile ? (
          <h2 className="font-london pt-12 text-5xl text-white text-center">
            Frequently Asked Questions
          </h2>
        ) : (
          <h2 className="font-london pt-4 text-4xl text-white text-center">
            Frequently <br /> Asked <br /> Questions
          </h2>
        )}
      </section>
      <div className="space-y-4 px-6 md:px-10 lg:px-20 xl:px-28">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-zinc-900 border border-pink-300 text-zinc-300">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-zinc-900 border border-pink-300 text-zinc-300">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-zinc-900 border border-pink-300 text-zinc-300">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-zinc-900 border border-pink-300 text-zinc-300">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-zinc-900 border border-pink-300 text-zinc-300">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-zinc-900 border border-pink-300 text-zinc-300">
            <h2 className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>
    </>
  );
};

export default FAQ;
