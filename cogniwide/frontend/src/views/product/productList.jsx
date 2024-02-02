import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import { axiosUtils } from "../../utils/axiosUtil";
import style from "./product.module.css";

const ProductList = () => {
  const [productListData, setProductListData] = useState([
  
  ]);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    fetchProductListData();
  }, []);

  const fetchProductListData = async () => {
    try {
      const response = await axiosUtils.get("/product");
      if (response.status === 200) {
        setProductListData(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.dropdowndiv}>
          <label htmlFor="currency-select">Select Currency</label>
          <select
            onChange={handleCurrencyChange}
            id="currency-select"
            className={style.selectbox}
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.row}>
        {productListData?.length > 0 ? (
            productListData.map((product) => (
              <ProductCard
                data={product}
                key={product.id}
                currency={currency}
              />
            ))
          ) : (
            <div className={style.no_products}>
              <span>No Products Found</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
