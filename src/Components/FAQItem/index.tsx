import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

interface Paragraph {
  id: number;
  content: string;
}

const faqVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const contentVariants = {
  closed: { x: -16, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const FAQItem = ({ question, answer, open, onToggle }: FAQItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    onToggle();
  };

  const renderParagraphs = (content: string) => {
    const paragraphs = content.split("\n\n").map((paragraph, index) => ({
      id: index,
      content: paragraph,
    }));
    return paragraphs.map((paragraph) => (
      <motion.p key={paragraph.id} variants={contentVariants} className="pb-3 pt-5">
        {paragraph.content}
        <br />

      </motion.p>
    ));
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className="group [&_summary::-webkit-details-marker]:hidden"
    >
      <div
        className={`flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 border ${
          open
            ? "text-pink-300 bg-zinc-900 border-pink-200"
            : "text-white bg-black border-pink-300"
        }`}
      >
        <h2 className="font-medium">{question}</h2>
        <svg
          className={`h-5 w-5 shrink-0 transition duration-300 ${
            open ? "-rotate-180" : ""
          }`}
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
      </div>

      <AnimatePresence>
        {open && answer && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={faqVariants}
            className="px-4 leading-relaxed text-white"
          >
            {renderParagraphs(answer)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;


// const FAQItem = ({ question, answer, open, onToggle }: FAQItemProps) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const handleClick = () => {
//     onToggle();
//   };

//   const renderParagraphs = (content: string) => {
//     const paragraphs: Paragraph[] = content
//       .split("\n\n")
//       .map((paragraph, index) => ({
//         id: index,
//         content: paragraph,
//       }));
//     return paragraphs.map((paragraph) => (
//       <p key={paragraph.id}>
//         {paragraph.content}
//         <br />
//         <br />
//       </p>
//     ));
//   };

//   return (
//     <div
//       ref={ref}
//       onClick={handleClick}
//       className="group [&_summary::-webkit-details-marker]:hidden"
//     >
//       <div
//         className={`flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 border border-pink-300 ${
//           open ? "text-pink-300 bg-zinc-900" : "text-white bg-black"
//         }`}
//       >
//         <h2 className="font-medium">{question}</h2>
//         <svg
//           className={`h-5 w-5 shrink-0 transition duration-300 ${
//             open ? "-rotate-180" : ""
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </div>

//       {open && answer && (
//         <div className="mt-5 px-4 -mb-3 leading-relaxed text-white">
//           {renderParagraphs(answer)}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQItem;

// const FAQItem = ({ question, answer, open, onToggle }: FAQItemProps) => {
//   const renderParagraphs = (content: string) => {
//     const paragraphs: Paragraph[] = content
//       .split("\n\n")
//       .map((paragraph, index) => ({
//         id: index,
//         content: paragraph,
//       }));
//     return paragraphs.map((paragraph) => (
//       <p key={paragraph.id}>
//         {paragraph.content}
//         <br />
//         <br />
//       </p>
//     ));
//   };

//   return (
//     <details
//       open={open}
//       onToggle={onToggle}
//       className="group [&_summary::-webkit-details-marker]:hidden"
//     >
//       <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 bg-zinc-900 border border-pink-300 text-zinc-200">
//         <h2 className="font-medium">{question}</h2>
//         <svg
//           className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </summary>

//       {answer && (
//         <div className="mt-5 px-4 -mb-3 leading-relaxed text-white">
//           {renderParagraphs(answer)}
//         </div>
//       )}
//     </details>
//   );
// };

// export default FAQItem;
