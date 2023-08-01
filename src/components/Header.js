import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { MobileMenu } from "./NavMenu/MobileMenu";
import { DesktopMenu } from "./NavMenu/DesktopMenu";
import React, { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'

const localeLabels = {
  "en-eu": "EN",
  "lv": "LV",
  "ru": "RU"
};

export function Header({ locales = [], navigation, settings }) {

    const pathname = usePathname();
    const router = useRouter();
    const [open, setOpen] = useState(false);

  return (
    <Bounded as="menu" yPadding="none" className="relative h-[43px] md:h-[74px] xl:h-[93px]">
        <div id="menuBottomImg" className="absolute w-full h-auto left-0 top-[42px] z-40 md:top-[70px] xl:top-[90px]">
                    <PrismicNextImage
                    field={settings.data.menu_image}
                    sizes="100vw"
                    className="w-full h-auto"
                    />
            </div>
        <div className="relative flex flex-row items-center justify-between w-full h-full z-50 bg-white">
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
    </Bounded>
  );
}
