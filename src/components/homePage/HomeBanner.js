import React from "react"

import {
  Banner,
  Video,
  BannerTitle,
  Headline,
  Canvas,
} from "../../styles/homeStyles"

const HomeBanner = () => {
  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoplay
          src={require("../../assets/video.mp4")}
        />
      </Video>
      <Canvas />
      <BannerTitle>
        <Headline>Hi I'am</Headline>
        <Headline>Abhishek </Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
