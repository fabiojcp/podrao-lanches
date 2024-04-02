import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";
import "@fontsource/finger-paint";
//DivMain, DivLogo, Title, Search, Span, Input

export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    overflow: visible;
  }
  @media ${devices.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-image: url(${(props) => props.background});
    background-repeat: repeat;
    background-size: 3vw;
    box-shadow: inset 0 -1.5vh 10px #ffff;
    height: 12vh;
  }
`;

export const DivLogo = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: 8vh;
    background-image: url(${(props) => props.background});
    background-repeat: repeat;
    background-size: 9vw;
    box-shadow: inset 0 -1.5vh 10px #ffff;
  }
  @media ${devices.tablet} {
    background: none;
    box-shadow: none;
    height: 100%;
    width: 60%;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    color: rgb(255, 49, 49);
    font-family: "Finger Paint", cursive;
    font-weight: bold;
    font-size: 8vw;
    width: 100vw;
    text-align: center;
    letter-spacing: 2vw;
    background-color: #ffffffa9;
  }
  @media ${devices.mobileL} {
    font-size: 7vw;
  }
  @media ${devices.tabletS} {
    font-size: 5vw;
  }
  @media ${devices.tablet} {
    font-size: 4vw;
  }
`;

export const Search = styled.div`
  @media ${devices.mobileSS} {
    height: 5vh;
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    padding: 0 10vw;
  }
  @media ${devices.tablet} {
    height: 100%;
    width: 40%;
    padding: 0;
    align-items: center;
  }
`;

export const Span = styled.span`
  @media ${devices.mobileSS} {
    position: absolute;
    margin: 1vh 0 0 2vw;
    color: red;
  }
`;

export const Input = styled.input`
  @media ${devices.mobileSS} {
    width: 100%;
    height: 4vh;
    padding: 0 0 0 8vw;
    border-radius: 6px;
    border: none;
    background-color: #f2f2f2;
  }
  @media ${devices.tablet} {
    height: 60%;
    width: 90%;
    padding: 0 0 0 10%;
    font-size: 1.2vw;
  }
`;
