import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

const TeamBlock = ({ slice }) => {
  return (
    <section className="flex flex-col items-center gap-12 w-full px-5 pb-24 md:px-16 md:pb-32 xl:flex-row xl:justify-center xl:px-20">
      {
        slice.items.map((item) => (
          <div key={item.name} className="relative w-[280px] h-auto md:w-[352px]">
          <PrismicNextImage
            field={item.image}
            sizes="100vw"
            className="relative w-full h-auto"
          />
          <span className="absolute top-0 left-0 w-full h-full bg-transparent bg-gradient-to-t from-night/80 to-night-0"></span>
          <span className="absolute bottom-10 w-full z-10 text-center text-white px-5 md:bottom-12 xl:bottom-16">
            <p className="font-oswald font-medium text-xl md:text-2xl">{item.name}</p>
            <p className="font-montserrat font-medium text-sm md:text-lg">{item.text}</p>
          </span>
          </div>
        ))
      }
    </section>
  );
};

export default TeamBlock;
