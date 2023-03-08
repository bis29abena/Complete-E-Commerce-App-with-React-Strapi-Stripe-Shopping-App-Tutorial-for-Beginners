import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetchMaxPrice = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest.get("/products?fields=price");
        setPrices(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const maxPrice_ = prices
    .map((item) => item.attributes.price)
    .reduce((accumulator, current) => accumulator + current, 0);

  return maxPrice_;
};

export default useFetchMaxPrice;
