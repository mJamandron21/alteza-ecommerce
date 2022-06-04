import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import slider1 from '../images/slider-1.png';
import slider2 from '../images/slider-2.png';
import slider3 from '../images/slider-3.png';


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
                <ImageContainer>
                    <Image src={slider1} alt='slider-1' />
                </ImageContainer>
                <InfoContainer>
                    <Title>SET THE TREND!</Title>
                    <Description>BE YOURSELF! GET 30% OFF FOR NEW KOREAN INSPIRED OUTFIT.</Description>
                    <Button>SHOP NOW!</Button>
                </InfoContainer>
            </Slide>
            <Slide>
                <ImageContainer>
                    <Image src={slider2} alt='slider-2' />
                </ImageContainer>
                <InfoContainer>
                    <Title>WILD YET CLASSY!</Title>
                    <Description>READY FOR ADVENTURE! GET 20% OFF FOR WILD WEST INSPIRED OUTFIT.</Description>
                    <Button>SHOP NOW!</Button>
                </InfoContainer>
            </Slide>
            <Slide>
                <ImageContainer>
                    <Image src={slider3} alt='slider-3' />
                </ImageContainer>
                <InfoContainer>
                    <Title>FEEL THE COMFORT!</Title>
                    <Description>BEAT THE NORMS! GET 30% OFF FOR NEW SUMMER OUTFIT.</Description>
                    <Button>SHOP NOW!</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider

const Container = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
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
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw;
    height: 95vh;
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    /* width: 50rem; */
    height: 100%;
    flex: 1;
    justify-content: center;
`;

const Image = styled.img`
    height: 90%;
    padding: 2.8rem 6rem;
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