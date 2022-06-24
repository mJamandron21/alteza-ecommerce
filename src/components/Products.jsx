import React from 'react'
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./ProductItem";


const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;