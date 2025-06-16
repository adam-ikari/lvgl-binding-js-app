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
      label: "小图(32x32)"
    },
    {
      src: mediumImg,
      size: "default",
      round: false,
      label: "默认图(64x64)"
    },
    {
      src: mediumImg,
      size: "large",
      round: false,
      label: "大图(128x128)"
    },
    {
      src: smallImg, // 复用小图
      size: "default",
      round: true,
      label: "圆形图"
    }
  ];

  return (
    <PageSession title="图片组件演示">

        {demoImages.map((img, index) => (
         
            <ZImage
              src={img.src}
              size={img.size === "small" ? ZSizeEnum.Small :
                   img.size === "medium" ? ZSizeEnum.Default :
                   ZSizeEnum.Large}
              round={img.round}
              onClick={() => console.log(`点击了${img.label}`)}
            />
       
        ))}
      
    </PageSession>
  );
};

export default ImageDemoScreen;
