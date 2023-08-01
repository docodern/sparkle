import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

const TextImageOnBackground = ({ slice }) => {
  return (
    <section className="relative py-20 md:py-32 flex flex-col gap-12 items-center px-5 md:px-20 xl:px-32">
      {prismic.isFilled.image(slice.primary.bg_image) && (
              <PrismicNextImage
                field={slice.primary.bg_image}
                sizes="screen"
                className="absolute top-0 left-0 h-full w-screen object-cover xl:h-auto"
              />
            )}
      {prismic.isFilled.image(slice.primary.image) && (
              <PrismicNextImage
                field={slice.primary.image}
                sizes="100vw"
                className="relative w-[280px] h-auto md:w-[370px]"
              />
            )}
      <p className="relative font-montserrat font-medium text-white text-center text-lg md:text-2xl">{slice.primary.text}</p>
    </section>
  );
};

export default TextImageOnBackground;
