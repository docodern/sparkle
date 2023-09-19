import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { MobileMenu } from "./NavMenu/MobileMenu";
import { DesktopMenu } from "./NavMenu/DesktopMenu";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'

const localeLabels = {
  "en-eu": "EN",
  "lv": "LV",
  "ru": "RU"
};

export function Header({ locales = [], navigation, settings }) {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);

  return (
    <section className="absolute w-full top-0 left-0 z-40 bg-white">
      <div className="h-[43px] md:h-[74px] xl:h-[93px] w-full">
        <div id="menuBottomImg" className="absolute w-screen h-5 left-0 top-[42px] z-40 md:h-7 md:top-[70px] xl:top-[80px] xl:h-[40px]">
                    <PrismicNextImage
                    field={settings.data.menu_image}
                    sizes="w-full h-full"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    />
            </div>
        <div className="relative flex flex-row items-center justify-between w-full h-full z-50 bg-white mx-auto font-montserrat max-w-screen-2xl px-5 md:px-[80px] xl:px-[62px]">
            <PrismicNextLink href="/" >
                {prismic.isFilled.image(settings.data.logo) && (
                <PrismicNextImage field={settings.data.logo} className="w-[78px] md:w-[128px] xl:w-[180px] h-auto" />
                )}
            </PrismicNextLink>
            <DesktopMenu locales={locales} localeLabels={localeLabels} navigation={navigation} open={open} pathname={pathname} />
            <button onClick={open ? () => setOpen(false) : () => setOpen(true)} className="xl:hidden w-4 h-4 md:w-6">
                    <PrismicNextImage
                    field={settings.data.menu_burger}
                    sizes="100vw"
                    className={`w-full ${open ? "hidden" : "visible"}`}
                    />
                    <PrismicNextImage
                    field={settings.data.menu_close}
                    sizes="100vw"
                    className={`w-full ${open ? "visible" : "hidden"}`}
                    />
            </button>
        </div>
        <MobileMenu locales={locales} localeLabels={localeLabels} navigation={navigation} open={open} pathname={pathname} setOpen={setOpen} />
        </div>
      </section>
  );
}
