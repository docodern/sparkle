import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { useState } from "react";

import { Bounded } from "./Bounded";


function MobileDetails ({ open }) {
  return (
  <div className={`${open ? "" : "hidden"} text-left flex flex-col gap-3 md:text-right`}>
              <p className="text-xl pb-2.5 md:text-2xl">Biedrība SparkleHeart</p>
              <p>Reģistrācijas nr. 40008293119</p>
              <p>Banka: SWEDBANK A/S</p>
              <p>LV52HABA0551047652465</p>
          </div>
)}

export function Footer({ settings, navigation }) {

  const slice = settings.data.slices1[0];
  const [open, setOpen] = useState(false);


  return (
    <Bounded as="footer" yPadding="none" className="relative pb-12 bg-gradient-to-t from-night from-95% to-white">
        {prismic.isFilled.image(settings.data.footer_logo) && (
                <PrismicNextImage
                  field={settings.data.footer_logo}
                  sizes="100vw"
                  className="absolute w-[100px] h-auto top-12 left-5 z-50 md:w-[162px] md:left-16 xl:left-20 md:top-20 xl:w-[182px] 2xl:left-[calc((100vw-1380px)/2)]"
                  loading="lazy"
                />
              )}
        <div className="relative text-white font-montserrat text-xs font-medium z-50 pt-32 md:flex md:flex-row md:justify-between md:items-end md:text-right md:text-xl md:pt-20 xl:items-start xl:ml-60">
            <div className="text-xl mt-14 mb-10 md:text-2xl xl:hidden">
                <p>{settings.data.name}</p>
            </div>
            <ul className="hidden text-left xl:flex xl:flex-col xl:gap-3">
                    {navigation.data?.links.map((item) => (
                        <li key={prismic.asText(item.label)} className="text-xl" >
                            <PrismicNextLink field={item.link}>
                                <PrismicText field={item.label} />
                            </PrismicNextLink>
                        </li>
                    ))}
              </ul>
            <div className="hidden text-left xl:flex xl:flex-col xl:gap-3">
                <p className="text-2xl pb-2.5">Biedrība SparkleHeart</p>
                <p>Reģistrācijas nr. 40008293119</p>
                <p>Banka: SWEDBANK A/S</p>
                <p>LV52HABA0551047652465</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className="hidden">{settings.data.name}</p>
                <p>{settings.data.email}</p>
                <p>{settings.data.phone}</p>
                <p>{settings.data.address}</p>
                <p onClick={() => setOpen(c => !c)} className="font-bold text-sm md:text-2xl xl:hidden">{open ? settings.data.close_details : settings.data.open_details}</p>
                <MobileDetails open={open} />
                <span className="flex flex-row md:justify-end">
                    {slice.items.map((item) => (
                      <PrismicNextImage
                      key={item.social_icon.alt}
                      field={item.social_icon}
                      sizes="100vw"
                      className="relative h-[25px] w-auto mr-6 my-5 md:mr-0 md:ml-12 md:my-10"
                      loading="lazy"
                    />
                    ))}
                </span>
            </div>
        </div>
        <div className="relative w-full z-50 text-white text-[11px] font-medium font-montserrat md:flex md:flex-row md:justify-between md:text-base">
            <p className="xl:w-1/6">{settings.data.copyright}</p>
            <PrismicNextLink field={settings.data.privacy_link}>
                {settings.data.privacy_text}
            </PrismicNextLink>
        </div>
        {prismic.isFilled.image(settings.data.bg_image) && (
                <PrismicNextImage
                  field={settings.data.bg_image}
                  sizes="screen"
                  className="absolute h-auto w-screen top-[-40px] left-0 z-40"
                  loading="lazy"
                />
              )}
    </Bounded>
  );
}
