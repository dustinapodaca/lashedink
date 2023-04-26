import ServiceSelector from "../ServiceSelector";

type Image = {
  id: number;
  src: string;
};

type CarouselProps = {
  images: Image[];
  text: string;
};


export default function ServiceCard ({images, text}: CarouselProps) {
  return (
    <div className="max-w-sm bg-white border border-zinc-200 rounded-lg shadow dark:bg-black dark:border-zinc-700 mt-5">
        {/* <a href="#"> */}
          <ServiceSelector images={images} text={text} />
        {/* </a> */}
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{text}</h5>
            </a>
            <p className="mb-3 font-normal text-zinc-700 dark:text-zinc-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-700 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
                Read more
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
  );
};

