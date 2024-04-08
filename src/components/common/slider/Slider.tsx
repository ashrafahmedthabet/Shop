import { useState } from "react";
import "./slider.scss";
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
    <div className="slider">
      <div className="wrapper">
        <div
          className="img-container"
          style={{ transform: `translateX(-${imgIndex * 100}vw)` }}
        >
          {sliderImages.map((url, index) => (
            <img key={index} src={url} />
          ))}
        </div>
        <div className="tabs">
          <div className="prev" onClick={prevImg}>
            <WestIcon />
          </div>
          <div className="next" onClick={nextImg}>
            <EastIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
