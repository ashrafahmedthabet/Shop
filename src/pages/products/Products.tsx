import { useParams } from "react-router-dom";
import List from "../../components/common/list/List";
import style from "./products.module.scss";
import { useState } from "react";
const Products = () => {
  const params: string | undefined = useParams().id;
  const catId: number | null = params && params != "" ? parseInt(params) : null;
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sort, setSort] = useState<string | null>(null);
  return (
    <section className={style.products}>
      <aside className={style.filters}>
        <div className={style["filter-item"]}>
          <h2>Product Categories</h2>
          <div className={style["categories-filter"]}>
            <div className={style["input-item"]}>
              <input type="checkbox" id="shoes" value={1} />
              <label htmlFor="shoes">Shoes</label>
            </div>
            <div className={style["input-item"]}>
              <input type="checkbox" id="skirts" value={2} />
              <label htmlFor="skirts">Skirts</label>
            </div>
            <div className={style["input-item"]}>
              <input type="checkbox" id="coats" value={3} />
              <label htmlFor="coats">Coats</label>
            </div>
          </div>
        </div>
        <div className={style["filter-item"]}>
          <h2>Filter by price</h2>
          <div className={style["input-item"]}>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className={style["filter-item"]}>
          <h2>Sort by</h2>
          <div className={style["input-item"]}>
            <input
              type="radio"
              id="asc"
              name="price"
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className={style["input-item"]}>
            <input
              type="radio"
              id="desc"
              name="price"
              onChange={() => setSort("desc")}
            />
            <label htmlFor="dec">Price (Highest first)</label>
          </div>
        </div>
      </aside>
      <div className={style["product-list"]}>
        <img
          className={style["img-banner"]}
          src="/images/products-page-banner.jpeg"
          alt="banner"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </section>
  );
};

export default Products;
