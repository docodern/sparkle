import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { Bounded } from "@/components/Bounded";

const CtaBlock = ({ slice }) => {
  return (
    <Bounded as="section" className="md:pt-[136px] md:pb-[120px]">
      <div className={`flex flex-wrap items-start justify-center gap-12 pt-4 text-center md:gap-36 xl:gap-8 ${slice.variation !== "tabletFullWidth" ? "md:flex-nowrap md:items-stretch" : "xl:flex-nowrap xl:items-stretch"}`}>
          <div className={`flex flex-col gap-4 items-center w-full md:gap-6 md:justify-between ${slice.variation !== "tabletFullWidth" ? "xl:w-[500px]" : "xl:w-[394px]"}`}>
            <span className="flex flex-col gap-8 items-center">
              {prismic.isFilled.image(slice.primary.image_1) && <PrismicNextImage
                  field={slice.primary.image_1}
                  sizes="100vw"
                  className="relative w-40 h-auto" />}
              <h4 className={`font-oswald pt-7 font-medium text-lg md:pt-0 ${slice.variation !== "tabletFullWidth" ? "md:text-lg xl:text-2xl" : "md:text-3xl xl:text-3xl"}`}>{prismic.isFilled.keyText(slice.primary.title_1) && (slice.primary.title_1)}</h4>
            </span>
              <p className="text-xs md:text-lg">{prismic.isFilled.keyText(slice.primary.text_1) && (slice.primary.text_1)}</p>
              {prismic.isFilled.keyText(slice.primary.button_text_1) && (
                <PrismicNextLink field={slice.primary.link_1}>
                <button className="border rounded-full border-orange bg-orange font-montserrat text-white h-12 w-[233px] text-lg hover:scale-110 hover:bg-yellow hover:border-yellow active:bg-darkOrange">
                  {slice.primary.button_text_1}
              </button>
              </PrismicNextLink>
              )}
          </div>
          <div className={`flex flex-col gap-4 items-center w-full md:gap-6 md:justify-between ${slice.variation !== "tabletFullWidth" ? "xl:w-[500px]" : "xl:w-[394px]"}`}>
            <span className="flex flex-col gap-8 items-center">
              {prismic.isFilled.image(slice.primary.image_2) && <PrismicNextImage
                  field={slice.primary.image_2}
                  sizes="100vw"
                  className="relative w-40 h-auto" />}
              <h4 className={`font-oswald pt-7 font-medium text-lg md:pt-0 ${slice.variation !== "tabletFullWidth" ? "md:text-lg xl:text-2xl" : "md:text-3xl xl:text-3xl"}`}>{prismic.isFilled.keyText(slice.primary.title_2) && (slice.primary.title_2)}</h4>
            </span>
              <p className="text-xs md:text-xl">{prismic.isFilled.keyText(slice.primary.text_2) && (slice.primary.text_2)}</p>
              {prismic.isFilled.keyText(slice.primary.button_text_2) && (
                <PrismicNextLink field={slice.primary.link_2}>
                <button className="border rounded-full border-orange bg-orange font-montserrat text-white h-12 w-[233px] text-lg hover:scale-110 hover:bg-yellow hover:border-yellow active:bg-darkOrange">
                  {slice.primary.button_text_2}
              </button>
              </PrismicNextLink>
              )}
          </div>
      </div>
    </Bounded>
  );
};

export default CtaBlock;
