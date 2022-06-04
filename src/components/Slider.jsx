import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Slider = () => {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined />
        </Arrow>
        <Arrow>
            <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7ff;
    border-radius: 50%;
`;