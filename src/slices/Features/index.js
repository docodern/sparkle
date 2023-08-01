import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { Bounded } from "@/components/Bounded";

const Features = ({ slice }) => {
  return (
    <Bounded as="section" yPadding="base">
      <h3 className="font-oswald font-medium text-center text-2xl md:text-3xl">{slice.primary.title}</h3>
      {prismic.isFilled.group(slice.items) && (
        slice.items.map((item) => (
          <div key={item.image.alt} className={`flex flex-col text-center items-center justify-center gap-12 xl:gap-32 my-20 ${item.image_to_left ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <PrismicNextImage
                field={item.image}
                sizes="100vw"
                className="relative w-[118px] h-auto md:w-[150px}"
              />
            <p className={`font-montserrat text-xs md:text-lg md:w-[353px] md:w-[500px] ${item.image_to_left ? "md:text-left" : "md:text-right"}`}>{item.text}</p>
          </div>
        ))
      )}
    </Bounded>
  );
};

export default Features;
