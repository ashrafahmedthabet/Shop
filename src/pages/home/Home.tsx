import ProductList from "../../components/common/productList/ProductList";
import Categories from "../../components/home/categories/Categories";
import Contact from "../../components/home/contact/Contact";
import Slider from "../../components/home/slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductList title="featured" />
      <Categories/>
      <ProductList title="trending" />
      <Contact/>
    </div>
  );
};

export default Home;
