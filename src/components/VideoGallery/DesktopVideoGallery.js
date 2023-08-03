import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import dynamic from 'next/dynamic'

const VideoElement = dynamic(() => import('./VideoElement'), {
  ssr: false,
})


export default function DesktopVideoGallery ({ slice, setVideo, allowScroll, blockScroll }) {

  let gallery = [];

  if (slice.items.length < 99) {
    gallery = [...slice.items];

    let lastElement = {
      image : slice.primary.image_bg,
      empty : slice.primary.last_element_text
    };

    let emptyElement = {
      image : slice.primary.image_bg
    }

    gallery.push(lastElement);

    do {
      gallery.push(emptyElement)
    } while (gallery.length < 99)

  }

  return (
    <div className="hidden xl:flex flex-wrap gap-3 justify-center w-full max-w-screen-2xl">
      {gallery.map((video, index) => (
        <div key={index} className="relative w-[134px] h-[134px] group">
          <PrismicNextImage 
            field={video.image}
            sizes="100vw"
            loading="lazy"
            className="relative w-full h-full"
          />
          <PrismicNextImage 
            field={slice.primary.image_bg}
            sizes="100vw"
            loading="lazy"
            className="absolute top-0 left-0 opacity-50 group-hover:opacity-100"
          />
          {video.name ? 
          <span className="absolute flex top-0 left-0 w-full h-full text-white text-center opacity-0 group-hover:cursor-pointer group-hover:opacity-100" onClick={() => {
            setVideo(<VideoElement video={video.video} name={video.name} playimage={slice.primary.playimage} videoClose={slice.primary.videoClose} allowScroll={allowScroll} setVideo={setVideo} />)
            blockScroll();
          }} >
            <p className="m-auto font-oswald font-bold text-2xl">{video.name}</p>
          </span>
          : null }
          {video.empty ? 
            <span className="absolute flex top-0 left-0 w-full h-full text-white text-center">
              <p className="m-auto font-oswald font-bold text-sm">{video.empty}</p>
            </span>
           : null}
          <p className="absolute text-white font-oswald leading-none text-3xl bottom-[-1px] right-5">{index + 1}</p>
        </div>
      ))}
    </div>
  );
};