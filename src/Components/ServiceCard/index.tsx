import ServiceSelector from "../ServiceSelector";
import ServiceModal from "../ServiceModal";

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

  return (
    <div className="relative max-w-sm border-x border-zinc-800 rounded-lg shadow bg-black mt-5">
      <ServiceSelector images={images} text={headlineText} />

      <div className="p-5">
        <a href="#">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {headlineText}
          </h5>
        </a>
        <p className="font-normal text-zinc-700 dark:text-zinc-400 h-60">
          {descText}
        </p>
      </div>

      <span className="absolute inset-x-0 bottom-0 h-2 rounded-b-lg bg-gradient-to-r from-green-300 via-cyan-500 to-pink-600"></span>
    </div>
  );
}


