import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

    };

  return (
    <Container>
        <Arrow direction="left" onClick={() =>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            {sliderItems.map((item)=> (
                <Slide bg={item.bg}>
                    <ImageContainer>
                        {/* <Image src={`../images/${item.img}`} alt='slider-img' /> */}
                        <Image src={item.img} alt='slider-img' />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>SHOP NOW!</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() =>handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider

const Container = styled.div`
    width: 100%;
    height: 95vh;
    display: inline-flex;
    position: relative;
    /* overflow: hidden; */
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 95vh;
    display: flex;
    align-items: center;
    background-color: ${props=> props.bg};
`;

const ImageContainer = styled.div`
    /* width: 50rem; */
    height: 100%;
    flex: 1;
    justify-content: center;
`;

const Image = styled.img`
    height: 100%;
    padding: 0 6rem;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 1rem 3rem;
    /* background-color: aliceblue; */
`;

const Title = styled.h1`
    font-size: 3.5rem;
`;

const Description = styled.p`
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 3px;
    padding-right: 2rem;
`;

const Button = styled.button`
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1rem;
    background: transparent;
    cursor: pointer;
`;