import React, { useEffect, useState } from "react";
import productService from "../../redux/features/product/productService";
import "./BillCard.css";

const BillCard = ({ quantities }) => {
  const [totalCost, setTotalCost] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setProducts([]);
      let cost = 0;
      for (const key in quantities) {
        const product = await productService.getProduct(key);
        const modProduct = { ...product, quantity: quantities[key] };

        if (products.includes(product)) {
          
        } else {
          setProducts((prev) => [...prev, modProduct]);
        }
        cost += product.price * modProduct.quantity;
        setTotalCost(cost);
        // console.log(totalCost);
      }
    };
    fetchData();
    return () => {
      return setProducts([]);
    };
  }, []);
  return (
    <div className="bill-summary">
      <h2>Bill Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total-bill">
        <strong>Total Bill:</strong> {totalCost}
      </div>
    </div>
  );
};

export default BillCard;
