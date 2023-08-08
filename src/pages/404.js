import * as prismic from "@prismicio/client";
import { getLocales } from "@/lib/getLocales";
import { createClient } from "@/prismicio";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PrismicNextLink } from "@prismicio/next";


const NotFoundPage = ({ page, locales, navigation, settings }) => {
    return (
      <>
      <Header locales={locales} navigation={navigation} settings={settings} />
        <section className="realtive flex flex-col items-center text-center gap-12 w-full h-full mx-auto py-32 bg-yellow px-5 md:px-16 xl:px-20">
            <p className="font-oswald font-bold text-white text-4xl md:text-6xl xl:text-8xl">404</p>
            <p className="font-oswald font-bold text-night text-xl md:text-2xl">{page.data.bold_text}</p>
            <p className="font-montserrat text-night text-lg">{prismic.isFilled.keyText(page.data.additional_text) && (page.data.additional_text)}</p>
            <PrismicNextLink field={page.data.return_link}>
              <button className="border rounded-full border-white bg-white font-montserrat text-orange h-12 w-[233px] text-lg">
                  {page.data.link_text}
              </button>
            </PrismicNextLink>
        </section>
        <Footer settings={settings} navigation={navigation} />
      </>
    );
  }

  export default NotFoundPage;

  export async function getStaticProps({ locale, previewData }) {
    const client = createClient({ previewData });
  
    const page = await client.getSingle("404")
    const navigation = await client.getSingle("navigation", { lang: locale });
    const settings = await client.getSingle("settings", { lang: locale });
  
    const locales = await getLocales(page, client);
  
    return {
      props: {
        page,
        navigation,
        settings,
        locales,
      },
    };
  }