import React from 'react'
import styled from 'styled-components';

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} alt='category-img'/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOW MORE</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  `;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  font-size: large;
  font-weight: 400;
  padding: 10px;
  cursor: pointer;
    &:hover{
        border: 1.5px solid black;
        background-color: white;
        color: black;
        transition: all 0.5s ease-in-out;
    }
`;