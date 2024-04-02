import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

const appear = keyframes`
    from{
        opacity: 0.6;
        transform: translatey(100vh);
    }
    to{
        opacity: 1;
    }
`;

const appearRight = keyframes`
    from{
        opacity: 0.6;
        transform: translatey(20vh);
    }
    to{
        opacity: 1;
    }
`;

export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    animation: ${appear} 1s;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 50;
    background-color: white;
    height: 100vh;
    width: 100vw;
    overflow: scroll;
  }
  @media ${devices.tablet} {
    animation: ${appearRight} 1s;
    height: 40vw;
    width: 60vw;
    box-shadow: 0 0 200vw 200vw #0000002e;
    top: 5vh;
    right: 20vw;
    overflow-x: hidden;
    overflow-y: scroll;
    border-radius: 10px;
  }
`;

export const DivProduct = styled.div`
  @media ${devices.mobileSS} {
    position: static;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 51;
  }
  @media ${devices.tablet} {
    height: 200vh;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const DivHeader = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 8%;
    padding: 0 10%;
    background-color: #30303023;
  }
  @media ${devices.tablet} {
    height: 10%;
    width: 100%;
    padding: 1vh 2%;
  }
`;

export const BtnClose = styled.div`
  @media ${devices.mobileSS} {
    color: rgb(255, 49, 49);
    font-size: 5vw;
  }
  @media ${devices.tablet} {
    font-size: 3vw;
  }
`;

export const SubTitle = styled.p`
  @media ${devices.mobileSS} {
    font-size: 4vw;
  }
  @media ${devices.tablet} {
    font-size: 4vw;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    font-size: 6vw;
    margin: 0 5% 5% 5%;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;

export const Img = styled.div`
  @media ${devices.mobileSS} {
    height: 45%;
    width: 100%;
    background-image: url(${(props) => props.background});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media ${devices.tablet} {
    position: absolute;
    width: 20%;
    right: 5%;
    top: 20%
  }
`;

export const Bio = styled.div`
  @media ${devices.mobileSS} {
    font-size: 4vw;
    font-weight: 100;
    margin: 0 5% 5% 5%;
  }
  @media ${devices.tablet}{
    font-size: 2.5vw;
    margin: 1vh 5% 2vh 5%;
    width: 50%;
  }
`;

export const Price = styled.div`
  @media ${devices.mobileSS} {
    font-size: 6vw;
    margin: 0 5% 5% 5%;
    color: green;
  }
  @media ${devices.tablet}{
    font-size: 2.5vw;
    margin: 0 5% 1vh 5%;
  }
`;

export const DivAddCar = styled.div`
  @media ${devices.mobileSS} {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 10vh;
    padding: 2vh 4vw;
    border-top: 1px solid rgb(245, 240, 235);
    z-index: 55;
    background-color: white;
  }
  @media ${devices.tablet}{
    position: absolute;
    height: 15%;
  }
`;

export const DivQnt = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    padding: 0 2%;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 6px;
  }
`;

export const BtnSome = styled.button`
  @media ${devices.mobileSS} {
    background: transparent;
    border: none;
    color: ${(props) => props.color};
  }
  &:active {
    filter: invert(0.6);
  }
`;

export const Qnt = styled.div`
  @media ${devices.mobileSS} {
  }
`;

export const DivAdd = styled.div`
  @media ${devices.mobileSS} {
    background-color: rgb(255, 49, 49);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    border-radius: 6px;
    padding: 0 4%;
    color: white;
    font-size: 4.5vw;
  }
`;

export const Text = styled.div`
  @media ${devices.tablet} {
    font-size: 1.5vw;
  }
`;

export const TotalPrice = styled.div`
  @media ${devices.mobileSS} {
  }
  @media ${devices.tablet} {
    font-size: 1.5vw;
  }
`;

export const Input = styled.textarea`
  @media ${devices.mobileSS} {
    width: 90vw;
    margin: 0vh 5vw;
    border-radius: 6px;
    border: 1px solid rgb(220, 220, 220);
    height: 20vw;
    padding: 1vh 2vw;
    resize: none;
  }
  @media ${devices.tablet} {
    width: 50%;
    margin: 0 5% 5vh 5%;
    font-size: 1.5vw;
    padding: 1vh 0.5vw;
    height: 20%;
    overflow: visible;
  }
`;
