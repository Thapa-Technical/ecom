import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products: products, grid_view, filters } = useFilterContext();

  if (filters.price === 0) {
    return (
      <Wrapper className="product-stock">
        <h3> No Products Available </h3>
      </Wrapper>
    );
  }

  if (grid_view === false) {
    return <ListView products={products}> </ListView>;
  }

  return <GridView products={products}></GridView>;
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 50vh;
`;

export default ProductList;
