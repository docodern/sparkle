import React from "react";
import { useEffect } from "react";
import { PrismicNextImage } from "@prismicio/next";


export default function VideoElement ({ video, name, playimage, videoClose, allowScroll, setVideo }) {

  useEffect(() => {
    let videoPlay = document.getElementById("videoPlay");
    let playButton = document.getElementById("playButton");
    videoPlay.onplay = (e) => {
      playButton.classList.toggle("hidden")
    }
    videoPlay.onpause = (e) => {
      playButton.classList.toggle("hidden")
    }
},[])

  return (
    <div className="fixed w-screen h-screen left-0 top-0 z-50 bg-night bg-opacity-90">
      <div className="relative flex flex-col gap-6 justify-center text-center w-full h-full px-5 md:px-16 xl:px-20">
          <PrismicNextImage
            id="videoClose"
            field={videoClose}
            sizes="w-4 md:w-5 xl:w-6"
            className="place-self-end md:mr-[calc((100%-608px)/3)] xl:mr-[calc((100%-912px)/3)]"
            onClick={() => {
              allowScroll()
              setVideo(null)
            }}
            loading="lazy"
          />
        <video id="videoPlay" controls muted preload="none" className="relative w-full h-auto mx-auto object-cover md:w-[608px] xl:w-[912px]">
          <source src={video.url} />
        </video>
        <p className="font-oswald font-medium text-2xl text-white">{name}</p>
          <PrismicNextImage
            id="playButton"
            field={playimage}
            sizes="w-50 md:w-86"
            className="absolute top-[calc(50%-60px)] left-[calc(50%-45px)]"
            onClick={() => videoPlay.play()}
            loading="lazy"
          />
      </div>
    </div>
  );
};