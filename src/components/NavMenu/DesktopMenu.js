import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";

function LangDropdown({locales, localeLabels, navigation, open, setOpen}) {
    return (
        <div className={`${open ? "flex" : "hidden"} flex-col gap-6 bg-white list-none absolute px-20 py-6 right-0 top-[60px] overflow-hidden`}>
            { locales.map((locale) => (
                navigation.lang !== locale.lang ?
                <li key={locale.lang}>
                    <PrismicNextLink
                        href={locale.url}
                        locale={locale.lang}
                        aria-label={`Change language to ${locale.lang_name}`}
                        onClick={() => setOpen(false)}
                    >
                    {localeLabels[locale.lang] || locale.lang}
                    </PrismicNextLink>
                </li>
               : ""
            ))}
        </div>
    )
}

export function DesktopMenu({locales, localeLabels, navigation, pathname}) {

    const [open, setOpen] = useState(false);

    return (
        <div className="hidden xl:block w-full bg-white">
            <nav className="flex flex-row justify-between text-center gap-10 mt-8 font-montserrat font-medium text-lg">
                <ul className="flex flex-row gap-[37px] pl-[57px] mx-auto text-center appearance-none">
                    {navigation.data?.links.map((item) => (
                        <li key={prismic.asText(item.label)} className={`${("/" + item.link.uid) === pathname ? "active" : ""}`}>
                            <PrismicNextLink field={item.link} className="active:no-underline hover:underline hover:font-semibold hover:decoration-orange hover:decoration-[3px]">
                                <PrismicText field={item.label} />
                            </PrismicNextLink>
                        </li>
                    ))}
                </ul>
                <LangDropdown locales={locales} localeLabels={localeLabels} navigation={navigation} open={open} setOpen={setOpen} />
                <button onClick={open ? () => setOpen(false) : () => setOpen(true)}>{localeLabels[navigation.lang]}</button>
            </nav>
        </div>
    );
}