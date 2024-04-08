import { TCardItem } from "../../../types/card";
import Card from "../card/Card";
import "./productList.scss";
type TProps = {
  title: string;
};
const ProductList = ({ title }: TProps): JSX.Element => {
  const data: TCardItem[] = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto-compress&cs=tinysrgb&w=1600",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="feat-products">
      <div className="wrapper">
        <div className="header">
          <h2>{title} products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.
          </p>
        </div>
        <div className="content">
          {data.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
