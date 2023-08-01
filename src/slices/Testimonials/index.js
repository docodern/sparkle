import { Bounded } from "@/components/Bounded";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";

const Testimonials = ({ slice }) => {

  const [item, setItem] = useState(0);

  const items = slice.items;

  const loadPrev = () => {
    if (item === 0) {
      setItem(items.length - 1)
    } else {
      setItem((c) => c - 1)
    }
  };

  const loadNext = () => {
    if (items.length === (item + 1)) {
      setItem(0)
    } else {
      setItem((c) => c + 1)
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById("next").click();
    }, 10000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Bounded as="section">
      {prismic.isFilled.group(slice.items) && (
        <div className="flex flex-col mx-auto gap-5 xl:w-1/2">
          <p className="font-oswald font-medium text-lg md:text-2xl">{items[item].name}</p>
          <p className="text-sm md:text-lg">{items[item].company}</p>
          <p className="text-xs italic md:text-2xl">{items[item].text}</p>
          <span className="flex flex-row gap-6">
            {prismic.isFilled.image(slice.primary.button) && (
              <button className="p-2">
                <PrismicNextImage 
                  field={slice.primary.button}
                  sizes="100vw"
                  className="relative w-auto h-[23px] opacity-50 rotate-180 hover:opacity-100"
                  onClick={loadPrev}
                />
              </button>
            )}
            {prismic.isFilled.image(slice.primary.button) && (
              <button className="p-2">
                <PrismicNextImage
                  id="next"
                  field={slice.primary.button}
                  sizes="100vw"
                  className="relative w-auto h-[23px] opacity-50 hover:opacity-100"
                  onClick={loadNext}
                />
              </button>
            )}
          </span>
        </div>
      )}
    </Bounded>
  );
};

export default Testimonials;
