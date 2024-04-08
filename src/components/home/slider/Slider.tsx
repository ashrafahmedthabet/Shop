import { useState } from "react";
import style from "./slider..module.scss";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
const sliderImages: string[] = [
  "images/slider-1.jpeg",
  "images/slider-2.webp",
  "images/slider-3.webp",
];
const Slider = (): JSX.Element => {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const prevImg = () => {
    setImgIndex(imgIndex <= 0 ? sliderImages.length - 1 : (prev) => prev - 1);
  };
  const nextImg = () => {
    setImgIndex(imgIndex === sliderImages.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className={style.slider}>
      <div className={style.wrapper}>
        <div
          className={style['img-container']}
          style={{ transform: `translateX(-${imgIndex * 100}vw)` }}
        >
          {sliderImages.map((url, index) => (
            <img key={index} src={url} />
          ))}
        </div>
        <div className={style.tabs}>
          <div className={style.prev} onClick={prevImg}>
            <WestIcon />
          </div>
          <div className={style.next} onClick={nextImg}>
            <EastIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
