import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (filter_products.length === 0) {
    return (
      <Wrapper className="product-stock">
        <h3> No Products Available </h3>
      </Wrapper>
    );
  }

  if (grid_view === false) {
    return <ListView products={filter_products}> </ListView>;
  }

  return <GridView products={filter_products}></GridView>;
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 50vh;
`;

export default ProductList;
