import { Bounded } from "@/components/Bounded";
import * as prismic from "@prismicio/client";

const TextBlock = ({ slice }) => {
  return (
    <Bounded as="section" yPadding="base">
      {prismic.isFilled.keyText(slice.primary.title) && (
        <h1>{slice.primary.title}</h1>
      )}
      <p className="text-center font-montserrat text-xs md:text-lg md:px-4 xl:px-72">{slice.primary.text}</p>
    </Bounded>
  );
};

export default TextBlock;
