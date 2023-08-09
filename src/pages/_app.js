import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";

import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
      <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/a757ef95be3f39fec6dff6f5/script.js"></Script>
    </>
  );
}
