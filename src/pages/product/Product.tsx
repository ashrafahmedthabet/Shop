import { useState } from "react";
import style from "./product.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images: string[] = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto-compress&cs=tinysrgb&w=1600&lazy-load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto-compress&cs=tinysrgb&w=1600&lazy-load",
  ];
  return (
    <div className={style.product}>
      <div className={style.left}>
        <div className={style.images}>
          <img src={images[0]} onClick={() => setSelectedImg(0)} />
          <img src={images[1]} onClick={() => setSelectedImg(1)} />
        </div>
        <div className={style["main-img"]}>
          <img src={images[selectedImg]} />
        </div>
      </div>
      <div className={style.right}>
        <h1>Title</h1>
        <p className={style.price}>$199</p>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
        <div className={style.quantity}>
          <button
            disabled={quantity === 1}
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <p>{quantity}</p>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className={style.add}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className={style.links}>
          <div className={style.item}>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className={style.item}>
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className={style.info}>
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className={style.info}>
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
