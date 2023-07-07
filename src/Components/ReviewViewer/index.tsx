import { useState } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const reviews = [
  {
    id: 0,
    text: "Review #1",
    content:
      "No, Rose, they are not breathing. And they have no arms or legs. Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    rating: 5,
  },
  {
    id: 1,
    text: "Review #2",
    content:
      "No, Rose, they are not breathing. And they have no arms or legs. Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    rating: 5,
  },
  {
    id: 2,
    text: "Review #3",
    content:
      "No, Rose, they are not breathing. And they have no arms or legs. Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    rating: 5,
  },
];

const MySVGComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

type ReviewProps = {
  review: Review;
  isActive: boolean;
};

const Review = ({ review, isActive }: ReviewProps) => (
  <div className={`min-w-full ${isActive ? "active" : ""}`}>
    <blockquote className="flex h-full flex-col justify-between bg-zinc-900 rounded-xl p-12">
      <div>
        <div className="flex gap-0.5 text-pink-300">
          {[...Array(review.rating)].map((_, i) => (
            <MySVGComponent key={i} />
          ))}
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
            {review.text}
          </p>

          <p className="mt-4 leading-relaxed text-gray-500">{review.content}</p>
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-500">
        &mdash; Michael Scott
      </footer>
    </blockquote>
  </div>
);

type Review = {
  id: number;
  text: string;
  content: string;
  rating: number;
};

type CarouselProps = {
  reviews: Review[];
};

const ReviewCarousel = ({ reviews }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-full bg-black">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center rounded-xl">
          <div className="relative overflow-hidden rounded-xl">
            <motion.div 
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: `-${index * 100}%`, opacity: 1 }} 
              exit={{ opacity: 0, pointerEvents: "none" }}
              className="flex"
            >
              {reviews.map((review) => (
                <Review
                  key={review.id}
                  review={review}
                  isActive={review.id === index}
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-1 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full opacity-0 focus:outline-none"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-8 w-8 text-white" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < reviews.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-1 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full opacity-0 focus:outline-none"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-8 w-8 text-white" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

const ReviewViewer = () => {
  return (
    <section className="bg-black mt-10">
      <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <div className="text-white max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Don't just take my word for it... <br />
              <br className="hidden sm:block lg:hidden" />
              <span> </span>Read reviews from other clients!
            </h2>

            {/* <p className="mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p> */}
          </div>

          <div className="lg:col-span-2 lg:mx-0">
            <ReviewCarousel reviews={reviews} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewViewer;
