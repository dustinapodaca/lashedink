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


export default function ServiceCard ({images, headlineText, descText}: CarouselProps) {

  return (
    <div className="max-w-sm bg-white border border-zinc-200 rounded-lg shadow dark:bg-black dark:border-zinc-700 mt-5">
      <ServiceSelector images={images} text={headlineText} />
      <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{headlineText}</h5>
          </a>
          <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">{descText}</p>
          <ServiceModal text={headlineText} />
      </div>
    </div>
  );
};

