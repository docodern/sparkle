import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

const ImageWithText = ({ slice }) => {
  return (
    <section className="relative w-full my-2">
        {prismic.isFilled.image(slice.primary.mobile_image) && (
              <PrismicNextImage
                field={slice.primary.mobile_image}
                sizes="100vw"
                className="relative w-full h-auto md:hidden"
              />
            )}
        {prismic.isFilled.image(slice.primary.image) && (
          <PrismicNextImage
            field={slice.primary.image}
            sizes="100vw"
            className="relative w-full h-auto hidden md:block"
          />
        )}
          <span className="absolute top-0 left-0 w-full h-full bg-transparent bg-gradient-to-t from-night/80 to-night-0"></span>
          <p className="absolute bottom-14 left-0 z-10 mx-auto text-center text-white font-oswald font-medium text-lg px-5 md:text-2xl md:bottom-20 md:px-16 xl:px-64 xl:bottom-24">{slice.primary.text}</p>
          {prismic.isFilled.image(slice.primary.top_ripped_image) && (
              <PrismicNextImage
                field={slice.primary.top_ripped_image}
                sizes="100vw"
                className="absolute w-full h-auto top-0 left-0"
              />
          )}
          {prismic.isFilled.image(slice.primary.bottom_ripped_image) && (
              <PrismicNextImage
                field={slice.primary.bottom_ripped_image}
                sizes="100vw"
                className="absolute w-full h-auto bottom-0 left-0"
              />
          )}
    </section>
  );
};

export default ImageWithText;
