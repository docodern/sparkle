import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

export function MobileMenu({ locales, localeLabels, navigation, open, pathname, setOpen }) {
    return (
        <div className={`${open ? "visible" : "hidden"} absolute top-0 left-0 z-10 w-screen h-screen bg-white pt-20 md:pt-32`}>
            <nav className="flex flex-col text-center gap-10 font-montserrat font-meduim text-lg">
                <ul className="flex flex-wrap mx-auto gap-6">
                    {locales.map((locale) => (
                        <li key={locale.lang} className={`${navigation.lang === locale.lang ? "active" : ""}`}>
                            <PrismicNextLink
                                href={locale.url}
                                locale={locale.lang}
                                aria-label={`Change language to ${locale.lang_name}`}
                                onClick={() => setOpen(false)}
                            >
                            {localeLabels[locale.lang] || locale.lang}
                            </PrismicNextLink>
                        </li>
                    ))}

                </ul>
                <ul className="flex flex-col gap-6 text-center">
                    {navigation.data?.links.map((item) => (
                        <li key={prismic.asText(item.label)} className={`${(
                            (navigation.lang !== "lv") ? 
                                (item.link?.url.split("/")[2] ? 
                                    "/"+item.link.url.split("/")[2] : "/") 
                                    : item.link.url) === pathname ? "active" : ""}`}>
                            <PrismicNextLink field={item.link} onClick={() => setOpen(false)}>
                                <PrismicText field={item.label} />
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}