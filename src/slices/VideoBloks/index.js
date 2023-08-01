import { useEffect } from 'react';
import { PrismicNextImage } from "@prismicio/next";
import * as prismic from "@prismicio/client";

const VideoBloks = ({ slice }) => {

  useEffect(() => {
      let video = document.getElementById("video");
      let playButton = document.getElementById("playButton");
      video.onplay = (e) => {
        playButton.classList.toggle("hidden")
      }
      video.onpause = (e) => {
        playButton.classList.toggle("hidden")
      }
  },[])

  return (
    <section className="relative bg-white w-full">
      {prismic.isFilled.keyText(slice.primary.title) && (
        <h1 className="mt-12 md:mt-16">{slice.primary.title}</h1>
      )}
      <div className="relative">
        <video id="video" controls muted preload="auto" poster={slice.primary.videoimage.url} className="relative w-full object-cover">
          <source src={prismic.isFilled.linkToMedia(slice.primary.video) && slice.primary.video.url} />
        </video>
            {prismic.isFilled.image(slice.primary.playimage) && (
              <PrismicNextImage
                id="playButton"
                field={slice.primary.playimage}
                sizes="w-50 md:w-86"
                className="absolute top-[calc(50%-55px)] left-[calc(50%-45px)]"
                onClick={() => video.play()}
              />
            )}
      </div>
    </section>
  );
};

export default VideoBloks;
