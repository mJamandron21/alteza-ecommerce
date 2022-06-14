import React from 'react'
import styled from 'styled-components';

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} alt='category-img'/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem

const Container = styled.div`

`;

const Image = styled.img`

`;

const Info = styled.div`

`;

const Title = styled.div`

`;

const Button = styled.div`

`;