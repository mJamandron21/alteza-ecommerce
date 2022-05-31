import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <Container>
      <Wrapper >
        <Left>
          <SearchContainer>
            <SearchOutlinedIcon />
            <Input/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Alteza
          </Logo>
        </Center>
        <Right>
          Right
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  height: 4rem;
  background-color: #DEA886;
`;

const Wrapper = styled.div`
  padding: 0.8rem 2rem;
  display: flex ;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  outline: none;
  color: white;
  font-size: 1rem;
`; 

const SearchContainer = styled.div`
 border: none;
 color: white;
 display: flex;
 align-items: center;
 margin-left: 1rem;
 padding: 0.5rem;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  font-family: cursive;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;