import React from 'react'
import styled from 'styled-components';

const Announcement = () => {
  return (
   <Container>
     Super Deals! Free Shipping on selected items!
   </Container>
  )
}

export default Announcement

const Container = styled.div`
  height: 30px;
  background-color:#908660; 
  color: white;
  text-align: center;
`;