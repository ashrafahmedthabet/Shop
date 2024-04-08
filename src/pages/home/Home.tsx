import ProductList from "../../components/common/productList/ProductList";
import Slider from "../../components/home/slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductList title="featured" />
      <ProductList title="trending" />
    </div>
  );
};

export default Home;
