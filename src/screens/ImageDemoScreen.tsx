import { ZImage } from "../components";
import { ZSizeEnum } from "../components/common";
import PageSession from "./common/PageSession";
import smallImg from "@/assets/images/demo-images/small.jpg";
import mediumImg from "@/assets/images/demo-images/medium.jpg";
import React, { useEffect } from "react";

const ImageDemoScreen = () => {
  useEffect(() => {
    console.log('Small image URL:', smallImg);
    console.log('Medium image URL:', mediumImg);
  }, []);

  const demoImages = [
    {
      src: smallImg,
      size: "small",
      round: false,
    },
    {
      src: mediumImg,
      size: "default",
      round: false,
    },
    {
      src: mediumImg,
      size: "large",
      round: false,
    },
    {
      src: smallImg, // 复用小图
      size: "default",
      round: true,
    }
  ];

  return (
    <PageSession title="Image Demo">
        {demoImages.map((img, index) => (
            <ZImage
              src={img.src}
              size={img.size === "small" ? ZSizeEnum.Small :
                   img.size === "medium" ? ZSizeEnum.Default :
                   ZSizeEnum.Large}
              round={img.round}
              onClick={() => console.log(`点击了`)}
            />
        ))}
    </PageSession>
  );
};

export default ImageDemoScreen;
