import { useState } from "react";
import ServiceSelector from "../ServiceSelector";

type Image = {
  id: number;
  src: string;
};

type CarouselProps = {
  images: Image[];
  headlineText: string;
  descText: string;
};

export default function ServiceCard({
  images,
  headlineText,
  descText,
}: CarouselProps) {

  const [isExpanded, setIsExpanded] = useState(false);

  const maxWords = 60;
  const words = descText.split(" ");
  const truncatedWords = words.slice(0, maxWords);
  const truncatedText = truncatedWords.join(" ");

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="relative max-w-sm border-x border-zinc-800 rounded-lg shadow bg-black mt-5 mx-auto">
      <ServiceSelector images={images} text={headlineText} />

      <div className="m-5 h-full md:h-full lg:h-[350px] xl:h-80">
        <a href="#">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {headlineText}
          </h5>
        </a>
        <p className="font-normal text-zinc-700 dark:text-zinc-400 h-64 md:h-72 xl:h-60 pb-4 md:pb-6 lg:pb-0 overflow-y-auto">
          {isExpanded ? descText : truncatedText}
          {words.length > maxWords && (
            <button
              className="text-pink-500 ml-2 font-medium"
              onClick={toggleExpansion}
            >
              {isExpanded ? "..read less" : "read more.."}
            </button>
          )}
        </p>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-5 rounded-b-lg bg-black"></span>
      <span className="absolute inset-x-0 bottom-0 h-1 rounded-b-lg bg-gradient-to-r from-purple-500 via-fuchsia-400 to-pink-500"></span>
    </div>
  );
}


