import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item} />
      ))}

    </Container>
  )
}

export default Categories

const Container = styled.div`
  display: flex;
  padding: 20px;
`;