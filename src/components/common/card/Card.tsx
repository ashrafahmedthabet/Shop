import { Link } from "react-router-dom";
import { TCardItem } from "../../../types/card";
import style from "./card.module.scss";
type TProps = {
  item: TCardItem;
};

const Card = ({ item }: TProps): JSX.Element => {
  return (
    <>
      <Link className={style['card-link']} to={`/product/${item.id}`}>
        <div className={style.card}>
          <div className={style['card-img']}>
            {item.isNew&& <span className={style.badge}>New Season</span>}
            <img src={item.img} className={style['main-img']} alt="" />
            {item.img2 && <img src={item.img2} className={style['second-img']} alt="" />}
          </div>
          <h2 className={style.title}>{item.title}</h2>
          <div className={style.prices}>
            <h3 className={style['old-price']}>{item.oldPrice}</h3>
            <h3>{item.price}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
