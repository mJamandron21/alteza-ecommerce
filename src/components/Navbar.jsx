import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Tooltip from '@mui/material/Tooltip';
import PageviewIcon from '@mui/icons-material/Pageview';
import Badge from '@mui/material/Badge';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import logo from '../images/alteza-logo.png';

const Navbar = () => {
  return (
    <Container>
      <Wrapper >
        <Left>
          <SearchContainer>
            <Input type='text' placeholder='Search here'/>
            <PageviewIcon fontSize='large'/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <img src={logo} alt='alteza-logo'/>
          </Logo>
        </Center>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Tooltip title="Cart" arrow>
              <Badge badgeContent={4} fontSize='small' color="primary">
                <ShoppingCartOutlinedIcon fontSize='medium' color="white" />
              </Badge>
            </Tooltip>
          </MenuItem>
          <MenuItem>
            <Tooltip title="Wishlist" arrow>
              <Badge badgeContent={2} fontSize='small' color="primary">
                <FavoriteBorderOutlinedIcon fontSize='medium' color="white" />
              </Badge>
            </Tooltip>
          </MenuItem>
          <MenuItem>
            <Tooltip title="Customer Support" arrow>
              <SupportAgentOutlinedIcon fontSize='medium' />
            </Tooltip>
          </MenuItem>
          <MenuItem>
            <Tooltip title="Language" arrow>
              <LanguageOutlinedIcon fontSize='medium'/>
            </Tooltip>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  height: 4.5rem;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 0.5rem 2rem;
  display: flex ;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  outline: none;
  color: black;
  font-size: 1rem;
  ::placeholder{
    font-size: 0.8rem;
  }
`; 

const SearchContainer = styled.div`
 border: none;
 color: black;
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
  font-size: 2rem;
  font-family: cursive;
  background-color: white;
  color: black;
  position: absolute;
  padding-top: 3.5rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1;
  img{
    width: 6rem;
    height: 6rem;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin: 0.8rem;
  color: black;
`;