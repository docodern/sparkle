import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";
import { useState } from "react";
import Link from "next/link";

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
    <Bounded as="footer" yPadding="none" className="relative pb-12 bg-gradient-to-t from-night from-95% to-white xl:mt-16">
        {prismic.isFilled.image(settings.data.footer_logo) && (
              <Link href={"/"}>
                <PrismicNextImage
                  field={settings.data.footer_logo}
                  sizes="100vw"
                  className="absolute w-[100px] h-auto top-[15px] left-5 z-50 hover:scale-105 md:w-[162px] md:left-20 xl:left-[62px] md:top-0 xl:w-[182px] 2xl:left-[calc((100vw-1380px)/2)]"
                  loading="lazy"
                />
              </Link>
              )}
        <div className="relative text-white font-montserrat text-xs font-medium z-50 md:flex md:flex-row md:justify-between md:items-end md:text-right md:text-lg md:pt-10 xl:items-start xl:ml-[320px] xl:pt-0">
            <div className="text-xl pt-[135px] mb-8 md:text-2xl md:pt-[0px] xl:hidden">
                <p>{settings.data.name}</p>
            </div>
            <ul className="hidden text-left xl:flex xl:flex-col xl:gap-3">
                    {navigation.data?.links.map((item) => (
                        <li key={prismic.asText(item.label)} className="text-xl hover:scale-105" >
                            <PrismicNextLink field={item.link}>
                                <PrismicText field={item.label} />
                            </PrismicNextLink>
                        </li>
                    ))}
              </ul>
            <div className="hidden text-left xl:flex xl:flex-col xl:gap-1">
                <p className="text-2xl pb-2.5">Biedrība SparkleHeart</p>
                <p>Reģistrācijas nr. 40008293119</p>
                <p>Banka: SWEDBANK A/S</p>
                <p>LV52HABA0551047652465</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-1 md:pb-5">
                <p className="hidden xl:pb-2.5 xl:block xl:text-2xl">{settings.data.name}</p>
                <a href={`mailto: ${settings.data.email}`}>{settings.data.email}</a>
                <p>{settings.data.phone}</p>
                <p>{settings.data.address}</p>
                <p onClick={() => setOpen(c => !c)} className="font-bold text-sm md:text-lg xl:text-2xl xl:hidden">{open ? settings.data.close_details : settings.data.open_details}</p>
                <MobileDetails open={open} />
                <span className="flex flex-row md:justify-end md:pt-5">
                    {slice.items.map((item) => (
                      <PrismicNextLink field={item.social_link}>
                        <PrismicNextImage
                        key={item.social_icon.alt}
                        field={item.social_icon}
                        sizes="100vw"
                        className="relative h-[25px] w-auto mr-8 my-8 hover:scale-105 md:mr-0 md:ml-8 md:my-3 xl:h-[36px]"
                        loading="lazy"
                      />
                    </PrismicNextLink>
                    ))}
                </span>
            </div>
        </div>
        <div className="relative w-full z-50 text-white text-[11px] font-medium font-montserrat md:flex md:flex-row md:justify-between md:text-base xl:items-end xl:text-sm">
            <p className="pb-2 xl:w-1/6">{settings.data.copyright}</p>
            <PrismicNextLink field={settings.data.privacy_link}>
                {settings.data.privacy_text}
            </PrismicNextLink>
        </div>
        <div className="absolute w-full h-full top-[-40px] md:top-[-80px] left-0 z-40">
        {prismic.isFilled.image(settings.data.bg_image) && (
                <PrismicNextImage
                  field={settings.data.bg_image}
                  sizes="screen"
                  className="h-full w-auto object-cover md:h-auto md:w-full md:object-contain"
                  loading="lazy"
                />
              )}
        </div> 
    </Bounded>
  );
}
