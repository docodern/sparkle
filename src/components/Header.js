import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";
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
    <section className="relative h-[43px] md:h-[74px] xl:h-[93px] w-full">
        <div id="menuBottomImg" className="absolute w-full h-auto left-0 top-[42px] z-40 md:top-[70px] xl:top-[90px]">
                    <PrismicNextImage
                    field={settings.data.menu_image}
                    sizes="w-full h-auto"
                    className="w-full h-auto"
                    loading="lazy"
                    />
            </div>
        <div className="relative flex flex-row items-center justify-between w-full h-full z-50 bg-white mx-auto font-montserrat max-w-screen-2xl px-5 md:px-16 xl:px-20">
            <PrismicNextLink href="/" >
                {prismic.isFilled.image(settings.data.logo) && (
                <PrismicNextImage field={settings.data.logo} className="w-[78px] md:w-[128px] xl:w-[159px] h-auto" />
                )}
            </PrismicNextLink>
            <DesktopMenu locales={locales} localeLabels={localeLabels} navigation={navigation} open={open} pathname={pathname} />
            <button onClick={open ? () => setOpen(false) : () => setOpen(true)} className="xl:hidden w-4 h-4">
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
      </section>
  );
}
