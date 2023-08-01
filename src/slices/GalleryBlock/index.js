import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

const GalleryBlock = ({ slice }) => {
  return (
    <section className={`relative flex w-full place-content-center ${slice.variation !== "doubleToLeft" ? "flex-wrap md:flex-row-reverse" : "flex-wrap-reverse md:flex-row" } md:flex-nowrap overflow-hidden`}>
        <div className={`flex md:items-center ${slice.variation !== "doubleToLeft" ? "flex-row items-end" : "flex-row-reverse items-start"}`}>
            <div className="flex flex-col w-max">
              {prismic.isFilled.image(slice.primary.image_1) && (
                <PrismicNextImage
                  field={slice.primary.image_1}
                  sizes="100vw"
                  className="relative w-100vw h-auto"
                />
              )}
              {prismic.isFilled.image(slice.primary.image_2) && (
                <PrismicNextImage
                  field={slice.primary.image_2}
                  sizes="100vw"
                  className="relative w-100vw h-auto"
                />
              )}
            </div>
            {prismic.isFilled.image(slice.primary.image_3) && (
                <PrismicNextImage
                  field={slice.primary.image_3}
                  sizes="100vw"
                  className="relative w-100vw h-auto"
                />
              )}
          </div>
          <div className="flex flex-row items-start w-100vw">
            {prismic.isFilled.image(slice.primary.image_4) && (
                  <PrismicNextImage
                    field={slice.primary.image_4}
                    sizes="100vw"
                    className="relative w-100vw h-auto"
                  />
              )}
            {prismic.isFilled.image(slice.primary.image_5) && (
              <PrismicNextImage
                field={slice.primary.image_5}
                sizes="100vw"
                className="relative w-100vw h-auto"
              />
            )}
          </div>
          {prismic.isFilled.image(slice.primary.toprippedimg) && (
              <PrismicNextImage
                field={slice.primary.toprippedimg}
                sizes="100vw"
                className="absolute w-full h-auto top-0 left-0"
              />
          )}
          {prismic.isFilled.image(slice.primary.bottomrippedimg) && (
              <PrismicNextImage
                field={slice.primary.bottomrippedimg}
                sizes="100vw"
                className="absolute w-full h-auto bottom-0 left-0"
              />
          )}
    </section>
  );
};

export default GalleryBlock;
