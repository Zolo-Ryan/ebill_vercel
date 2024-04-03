import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
import {
  getProduct,
  getProducts,
  selectIsLoading,
  selectProduct,
  updateProduct,
} from "../../redux/features/product/productSlice";

import Card from "./Card";
import "./GenerateBill.css";
import Search from "../search/Search";
import productService from "../../redux/features/product/productService";
import BillCard from "./BillCard";

const GenerateBill = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});
  const [bill, setBill] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
      //   console.log("Products", products);
    }
    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const GenBill = async (e) => {
    e.preventDefault();
    // console.log("Quantities:", quantities);
    // for (const key in quantities) {
    //   const id = key;
    //   const quantity = quantities[key];
    //   const product = await productService.getProduct(id);

    //   const formData = new FormData();
    //   formData["name"] = product?.name;
    //   formData["category"] = product?.category;
    //   formData["quantity"] = quantity;
    //   formData["price"] = product?.price;
    //   formData["description"] = product?.description;
    //   formData["image"] =  product?.image;

    // }
    setBill(true);
  };

  return (
    <div>
      {!bill && (
        <form onSubmit={GenBill}>
          <div className="cards-container">
            {products.map((item, index) => {
              return (
                <Card
                  product={item}
                  key={index}
                  onQuantityChange={handleQuantityChange}
                />
              );
            })}
          </div>
          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Generate Bill
            </button>
          </div>
        </form>
      )}
      {bill && <BillCard quantities={quantities} />}
    </div>
  );
};

export default GenerateBill;
