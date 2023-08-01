import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { Bounded } from "@/components/Bounded";

const CtaBlock = ({ slice }) => {
  return (
    <Bounded as="section">
      <div className={`flex flex-wrap gap-20 items-start text-center ${slice.variation !== "tabletFullWidth" ? "md:flex-nowrap md:items-stretch" : "xl:flex-nowrap xl:items-stretch"} xl:justify-evenly`}>
          <div className="flex flex-col gap-8 items-center w-full md:gap-12 md:justify-between xl:w-[394px]">
            <span className="flex flex-col gap-8 items-center">
              {prismic.isFilled.image(slice.primary.image_1) && <PrismicNextImage
                  field={slice.primary.image_1}
                  sizes="100vw"
                  className="relative w-40 h-auto" />}
              <h4 className="font-oswald font-medium text-lg md:text-3xl">{prismic.isFilled.keyText(slice.primary.title_1) && (slice.primary.title_1)}</h4>
            </span>
              <p className="text-xs md:text-lg">{prismic.isFilled.keyText(slice.primary.text_1) && (slice.primary.text_1)}</p>
              {prismic.isFilled.keyText(slice.primary.button_text_1) && (
                <button className="border rounded-full border-orange bg-orange font-montserrat text-white h-12 w-[233px] text-lg">
                  {slice.primary.button_text_1}
              </button>
              )}
          </div>
          <div className="flex flex-col gap-8 items-center w-full md:gap-12 md:justify-between xl:w-[394px]">
            <span className="flex flex-col gap-8 items-center">
              {prismic.isFilled.image(slice.primary.image_2) && <PrismicNextImage
                  field={slice.primary.image_2}
                  sizes="100vw"
                  className="relative w-40 h-auto" />}
              <h4 className="font-oswald font-medium text-lg md:text-3xl">{prismic.isFilled.keyText(slice.primary.title_2) && (slice.primary.title_2)}</h4>
            </span>
              <p className="text-xs md:text-xl">{prismic.isFilled.keyText(slice.primary.text_2) && (slice.primary.text_2)}</p>
              {prismic.isFilled.keyText(slice.primary.button_text_2) && (
                <button className="border rounded-full border-orange bg-orange font-montserrat text-white h-12 w-[233px] text-lg">
                  {slice.primary.button_text_2}
              </button>
              )}
          </div>
      </div>
    </Bounded>
  );
};

export default CtaBlock;
