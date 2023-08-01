import * as prismic from "@prismicio/client";
import { Bounded } from "@/components/Bounded";
import { useState } from "react";

const ContactForm = ({ slice }) => {

    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        const interval = setInterval(() => {
            setSent(true)
            setLoading(false)
          }, 5000);
          return () => clearInterval(interval);
    }


  return (
    <Bounded as="section" className={"text-center"}>
      <h3 className="mb-10 text-2xl font-oswald font-medium md:mb-20 md:text-3xl">{slice.primary.title}</h3>
      <form onSubmit={handleSubmit} className="flex flex-wrap m-auto justify-between gap-2.5 md:w-[608px]">
            <input
                type="text"
                name="name"
                id="name"
                placeholder={slice.primary.name_placeholder}
                className="border-0 rounded-md bg-[#C4C4C466] w-full h-9 pl-3 font-montserrat text-sm placeholder:text-night md:w-[46%] md:text-lg md:h-10 xl:h-11"
                required
                />
            <input
                type="email"
                name="email"
                id="email"
                placeholder={slice.primary.email_placeholder}
                className="border-0 rounded-md bg-[#C4C4C466] w-full h-9 pl-3 font-montserrat text-sm placeholder:text-night md:w-[46%] md:text-lg md:h-10 xl:h-11"
                required
                />
            {prismic.isFilled.keyText(slice.primary.company) && (
                <input
                type="text"
                name="company"
                id="company"
                placeholder={slice.primary.company}
                className="border-0 rounded-md bg-[#C4C4C466] w-full h-9 pl-3 font-montserrat text-sm placeholder:text-night md:text-lg md:h-10 xl:h-11"
                required
                />
            )}
            <input
                type="number"
                name="number"
                id="number"
                placeholder={slice.primary.phone_placeholder}
                className="border-0 rounded-md bg-[#C4C4C466] w-full h-9 pl-3 font-montserrat text-sm placeholder:text-night md:text-lg md:h-10 xl:h-11"
                required
                />
            <textarea
                name="textarea"
                id="textarea"
                rows="5"
                placeholder={slice.primary.text_placeholder}
                className="border-0 rounded-md bg-[#C4C4C466] w-full pt-2 pl-3 font-montserrat text-sm placeholder:text-night md:text-lg"
                required
                ></textarea>
            {sent ? <span className="text-orange font medium mx-auto pt-10">
                <p className="text-xl md:text-2xl pb-10">{slice.primary.sent_title}</p>
                <p className="text-sm md:text-xl">{slice.primary.sent_text}</p>
            </span>
            : <>
                    <span className="flex flex-wrap text-left gap-2.5 text-night text-xs md:gap-5 md:text-sm">
                        <p>{slice.primary.required}</p>
                            <span className="flex flex-row gap-2.5 items-start">
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    id="checkbox"
                                    className="mt-2"
                                    required
                                    />
                                <label htmlFor="checkbox">{slice.primary.checkbox_text}</label>
                            </span>
                    </span>
                    <button type="submit" className="border-0 rounded-full bg-orange h-12 w-36 text-white font-montserrat font-medium text-lg mx-auto mt-5 md:mt-10 md:w-[182px] md:h-[62px] medium:text-2xl">
                        {loading ? slice.primary.loading : slice.primary.button_text}
                    </button>
                </>
            }
        </form>
    </Bounded>
  );
};

export default ContactForm;
