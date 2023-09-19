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
    <section className="relative bg-white w-full mt-12 md:mt-[70px] xl:mt-[50px]">
      {prismic.isFilled.keyText(slice.primary.title) && (
        <h1 className="mt-12 md:mt-[150px]">{slice.primary.title}</h1>
      )}
      <div className="relative">
        <video id="video" controls muted preload="none" poster={slice.primary.videoimage.url} className="relative w-full object-cover">
          <source src={prismic.isFilled.linkToMedia(slice.primary.video) && slice.primary.video.url} />
        </video>
            {prismic.isFilled.image(slice.primary.playimage) && (
              <PrismicNextImage
                id="playButton"
                field={slice.primary.playimage}
                sizes="100vw"
                className="absolute w-[90px] md:w-[154px] h-auto top-[calc(50%-40px)] left-[calc(50%-45px)] md:top-[calc(50%-70px)] md:left-[calc(50%-78px)]"
                onClick={() => video.play()}
                loading="lazy"
              />
            )}
      </div>
    </section>
  );
};

export default VideoBloks;
