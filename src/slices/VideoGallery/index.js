import React from "react";
import dynamic from 'next/dynamic'
import { useState } from "react";
import useScrollBlock from '../../lib/useScrollBlock'


const MobileVideoGallery = dynamic(() => import('../../components/VideoGallery/MobileVideoGallery'), {
  ssr: false,
})
const DesktopVideoGallery = dynamic(() => import('../../components/VideoGallery/DesktopVideoGallery'), {
  ssr: false,
})


const VideoGallery = ({ slice }) => {

  const [video, setVideo] = useState(null);
  const [blockScroll, allowScroll] = useScrollBlock();

  return (
    <section className="px-5 py-20 md:px-16 md:py-32 xl:px-20">
      {video}
      <MobileVideoGallery slice={slice} setVideo={setVideo} blockScroll={blockScroll} allowScroll={allowScroll} />
      <DesktopVideoGallery slice={slice} setVideo={setVideo} blockScroll={blockScroll} allowScroll={allowScroll} />
    </section>
  );
};

export default VideoGallery;
