import { TCardItem } from "../../../types/card";
import style from "./cart.module.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Cart = () => {
  const data: TCardItem[] = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      desc: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      desc: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className={style.cart}>
      <h2>Products in your Cart</h2>
      {data.map((item, index) => (
        <div className={style.item} key={index}>
          <div className={style.col}>
            <div className={style["cart-img"]}>
              <img src={item.img} alt="" />
            </div>
            <div className={style.details}>
              <h3>{item.title}</h3>
              <div className={style.wrapper}>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className={style.price}>1 X ${item.price}</div>
              </div>
            </div>
          </div>
          <div className={style.col}>
            <DeleteOutlineIcon className={style["delete-icon"]} />
          </div>
        </div>
      ))}
      <div className={style.total}>
        <div className={style["total-price"]}>
          <p>SUBTOTAL</p>
          <p>$123</p>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <p className={style.reset}>Reset Cart</p>
      </div>
    </div>
  );
};

export default Cart;
