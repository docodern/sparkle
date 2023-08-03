import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import dynamic from 'next/dynamic'
import { useState } from "react";


const initialaVideoCount = 20;
const incrementVideoCount = 20;

const VideoElement = dynamic(() => import('./VideoElement'), {
  ssr: false,
})


export default function MobileVideoGallery ({ slice, setVideo, allowScroll, blockScroll }) {

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


  const [displayVideos, setDisplayVideos] = useState(initialaVideoCount);

  const loadMore = () => {
    setDisplayVideos(displayVideos + incrementVideoCount)
  }

  return (
    <div className="flex flex-col gap-6 items-center w-full xl:hidden">
        <div className="flex flex-wrap gap-3 justify-center w-full" >
        {gallery.slice(0, displayVideos).map((video, index) => (
            <div key={index} className="relative w-[134px] h-[134px] group" >
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
            <span className="absolute flex top-0 left-0 w-full h-full text-white text-center opacity-0 group-hover:opacity-100" onClick={() => {
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
    {displayVideos < gallery.length ? 
              <button onClick={loadMore} className="border rounded-full border-orange bg-orange my-6 font-montserrat text-white h-12 w-[233px] text-lg">
                  {slice.primary.load_more}
              </button>
      : null}
    </div>
  );
};