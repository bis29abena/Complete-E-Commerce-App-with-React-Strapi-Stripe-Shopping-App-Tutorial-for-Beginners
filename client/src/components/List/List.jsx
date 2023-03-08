import React from "react";
import useFetch from "../../Hooks/useFetch";
import Card from "../Card/Card";

import "./List.scss";

const List = ({ selectedSubCat, catId, sort, maxPrice }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedSubCat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&sort=price:${sort}&[filters][price][$lte]=${maxPrice}`
  );

  console.log(sort)

  return (
    <div className="list">
      {data?.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
};

export default List;
