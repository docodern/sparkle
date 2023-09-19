import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { Bounded } from "@/components/Bounded";

const Supporters = ({ slice }) => {
  return (
    <Bounded className="relative md:pt-12 md:pb-28 md:mt-8">
      <h3 className="relative text-center font-oswald text-2xl mt-3 xl:mt-16 z-20">{slice.primary.title}</h3>
      <div className="relative flex flex-wrap w-full justify-evenly items-center gap-7 pt-14 pb-6 z-20 md:pt-8 md:justify-between xl:pt-16 xl:w-[1150px] xl:mx-auto xl:justify-evenly">

            <span className="w-[45%] md:w-auto">
              {prismic.isFilled.image(slice.primary.image_1) && (
                <PrismicNextImage
                  field={slice.primary.image_1}
                  sizes="100vw"
                  className="relative mx-auto w-[130px] h-auto md:w-[144px] xl:w-[242px]"
                />
              )}
            </span>
            <span className="w-[45%] md:w-auto">
              {prismic.isFilled.image(slice.primary.image_2) && (
              <PrismicNextImage
                field={slice.primary.image_2}
                sizes="100vw"
                className="relative mx-auto w-[130px] h-auto md:w-[123px] xl:w-[210px]"
              />
            )}
            </span>
              <span className="w-[45%] md:w-auto">
                {prismic.isFilled.image(slice.primary.image_3) && (
                <PrismicNextImage
                  field={slice.primary.image_3}
                  sizes="100vw"
                  className="relative mx-auto w-[130px] h-auto md:w-[142px] xl:w-[239px]"
                />
              )}
              </span>
              <span className="w-[45%] md:w-auto">
                {prismic.isFilled.image(slice.primary.image_4) && (
                <PrismicNextImage
                  field={slice.primary.image_4}
                  sizes="100vw"
                  className="relative mx-auto w-[48px] h-auto md:w-[49px] xl:w-[85px]"
                />
              )}
              </span>
          {/* <div className="flex flex-row w-full items-center md:flex-row md:w-[52%] md:justify-between xl:justify-evenly">
            <span className="w-1/2 md:w-auto">
              {prismic.isFilled.image(slice.primary.image_1) && (
                <PrismicNextImage
                  field={slice.primary.image_1}
                  sizes="100vw"
                  className="relative mx-auto w-[130px] h-auto md:w-[144px] xl:w-[242px]"
                />
              )}
            </span>
            <span className="w-1/2 md:w-auto">
              {prismic.isFilled.image(slice.primary.image_2) && (
              <PrismicNextImage
                field={slice.primary.image_2}
                sizes="100vw"
                className="relative mx-auto w-[130px] h-auto md:w-[123px] xl:w-[210px]"
              />
            )}
            </span>
          </div>
            <div className="flex flex-row items-center w-full md:flex-row md:w-[40%] md:justify-between">
              <span className="w-1/2 md:w-auto">
                {prismic.isFilled.image(slice.primary.image_3) && (
                <PrismicNextImage
                  field={slice.primary.image_3}
                  sizes="100vw"
                  className="relative mx-auto w-[130px] h-auto md:w-[142px] xl:w-[239px]"
                />
              )}
              </span>
              <span className="w-1/2 md:w-auto">
                {prismic.isFilled.image(slice.primary.image_4) && (
                <PrismicNextImage
                  field={slice.primary.image_4}
                  sizes="100vw"
                  className="relative mx-auto w-[48px] h-auto md:w-[49px] xl:w-[85px]"
                />
              )}
              </span>
            </div> */}
      </div>
      <div className="absolute z-10 w-full h-full top-0 left-0">
      {prismic.isFilled.image(slice.primary.bg_image) && (
                <PrismicNextImage
                  field={slice.primary.bg_image}
                  sizes="100vw"
                  className="h-full w-auto object-cover md:h-auto md:w-full md:object-contain"
                />
              )}
              </div>
    </Bounded>
  );
};

export default Supporters;
