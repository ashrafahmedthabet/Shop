import ProductList from "../../components/common/productList/ProductList";
import Categories from "../../components/home/categories/Categories";
import Slider from "../../components/home/slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductList title="featured" />
      <Categories/>
      <ProductList title="trending" />
    </div>
  );
};

export default Home;
