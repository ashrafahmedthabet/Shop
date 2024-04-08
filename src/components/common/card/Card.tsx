import { Link } from "react-router-dom";
import { TCardItem } from "../../../types/card";
import "./card.scss";
type TProps = {
  item: TCardItem;
};

const Card = ({ item }: TProps): JSX.Element => {
  return (
    <>
      <Link className="cardLink" to={`/product/${item.id}`}>
        <div className="card">
          <div className="card-img">
            {item.isNew&& <span className="badge">New Season</span>}
            <img src={item.img} className="main-img" alt="" />
            {item.img2 && <img src={item.img2} className="second-img" alt="" />}
          </div>
          <h2 className="title">{item.title}</h2>
          <div className="prices">
            <h3 className="old-price">{item.oldPrice}</h3>
            <h3>{item.price}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
