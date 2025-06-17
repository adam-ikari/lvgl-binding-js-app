import { ZImage } from "../components";
import { ZSizeEnum } from "../components/common";
import PageSession from "./common/PageSession";
import React, { useEffect } from "react";
import { Image } from 'sdk-ui'
import imgsrc from "@/assets/avatar.png";


const ImageDemoScreen = () => {
  useEffect(() => {
    console.log('Small image URL:', imgsrc);
  }, []);

  const demoImages = [
    {
      src: imgsrc,
      round: false,
    },
    {
      src: imgsrc,
      round: false,
    },
    {
      src: imgsrc,
      size: "large",
      round: false,
    },
    {
      src: imgsrc,
      round: true,
    }
  ];

  return (
    <PageSession title="Image Demo">
        {demoImages.map((img, index) => (
            <ZImage
              src={img.src}
              round={img.round}
              onClick={() => console.log(`image ${index} clicked`)}
            />
        ))}
        {/* <ZImage src={imgsrc} /> */}
    </PageSession>
  );
};

export default ImageDemoScreen;
