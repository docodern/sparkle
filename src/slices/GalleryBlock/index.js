import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

const GalleryBlock = ({ slice }) => {
  return (
    <section className={`relative flex w-full place-content-center ${slice.variation !== "doubleToLeft" ? "flex-wrap md:flex-row-reverse" : "flex-wrap-reverse md:flex-row" } md:flex-nowrap md:mt-3 overflow-hidden`}>
        <div className={`flex md:items-center ${slice.variation !== "doubleToLeft" ? "flex-row items-end" : "flex-row-reverse items-start"}`}>
            <div className="flex flex-col w-max">
              {prismic.isFilled.image(slice.primary.image_1) && (
                <PrismicNextImage
                  field={slice.primary.image_1}
                  sizes="100vw"
                  className="relative w-100vw h-auto"
                  loading="lazy"
                />
              )}
              {prismic.isFilled.image(slice.primary.image_2) && (
                <PrismicNextImage
                  field={slice.primary.image_2}
                  sizes="100vw"
                  className="relative w-100vw h-auto"
                  loading="lazy"
                />
              )}
            </div>
            {prismic.isFilled.image(slice.primary.image_3) && (
                <PrismicNextImage
                  field={slice.primary.image_3}
                  sizes="100vw"
                  className="relative w-100vw h-auto"
                  loading="lazy"
                />
              )}
          </div>
          <div className="flex flex-row items-start w-100vw">
            {prismic.isFilled.image(slice.primary.image_4) && (
                  <PrismicNextImage
                    field={slice.primary.image_4}
                    sizes="100vw"
                    className="relative w-100vw h-auto"
                    loading="lazy"
                  />
              )}
            {prismic.isFilled.image(slice.primary.image_5) && (
              <PrismicNextImage
                field={slice.primary.image_5}
                sizes="100vw"
                className="relative w-100vw h-auto"
                loading="lazy"
              />
            )}
          </div>
          {/* Ripped images */}
          {prismic.isFilled.image(slice.primary.toprippedimg) && (
            <div className="absolute w-screen h-6 top-0 left-0 bg-transparent md:h-8 xl:h-[55px]">
              <PrismicNextImage
                field={slice.primary.toprippedimg}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
              
          )}
          {prismic.isFilled.image(slice.primary.bottomrippedimg) && (
            <div className="absolute w-screen h-auto bottom-0 left-0 bg-transparent md:h-8 xl:h-[55px]">
              <PrismicNextImage
                field={slice.primary.bottomrippedimg}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
          )}
    </section>
  );
};

export default GalleryBlock;
