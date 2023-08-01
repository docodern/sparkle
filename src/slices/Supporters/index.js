import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { Bounded } from "@/components/Bounded";

const Supporters = ({ slice }) => {
  return (
    <Bounded as="section" className={"relative"}>
      <h3 className="relative text-center font-oswald text-2xl mt-16 z-20 md:text-3xl">{slice.primary.title}</h3>
      <div className="relative flex flex-wrap w-full justify-evenly py-20 z-20">
          <div className="flex flex-col items-center gap-12 md:flex-row md:w-1/2 md:justify-evenly">
              {prismic.isFilled.image(slice.primary.image_1) && (
                <PrismicNextImage
                  field={slice.primary.image_1}
                  sizes="100vw"
                  className="relative w-[130px] h-auto md:w-[144px] xl:w-[242px]"
                />
              )}
              {prismic.isFilled.image(slice.primary.image_2) && (
                <PrismicNextImage
                  field={slice.primary.image_2}
                  sizes="100vw"
                  className="relative w-[130px] h-auto md:w-[123px] xl:w-[210px]"
                />
              )}
            </div>
            <div className="flex flex-col items-center gap-12 md:flex-row md:w-1/2 md:justify-evenly">
              {prismic.isFilled.image(slice.primary.image_3) && (
                <PrismicNextImage
                  field={slice.primary.image_3}
                  sizes="100vw"
                  className="relative w-[130px] h-auto md:w-[142px] xl:w-[239px]"
                />
              )}
              {prismic.isFilled.image(slice.primary.image_4) && (
                <PrismicNextImage
                  field={slice.primary.image_4}
                  sizes="100vw"
                  className="relative w-[48px] h-auto md:w-[49px] xl:w-[85px]"
                />
              )}
            </div>
      </div>
      {prismic.isFilled.image(slice.primary.bg_image) && (
                <PrismicNextImage
                  field={slice.primary.bg_image}
                  sizes="100vw"
                  className="absolute h-full w-full object-cover bottom-[-50px] left-0 z-10 xl:h-auto"
                />
              )}
    </Bounded>
  );
};

export default Supporters;
