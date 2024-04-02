// DivMain, DivText, Action
import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";

const appear = keyframes`
    from{
        opacity: 0.6;
        transform: translatey(20vh);
    }
    to{
        opacity: 1;
    }
`;

const opacity = keyframes`
    from{
        opacity: 0.2;
    }
    to{
        opacity: 1;
    }
`;

export const DivMain = styled.span`
  animation: ${opacity} 1s;
  @media ${devices.mobileSS} {
    z-index: 52;
    background-color: #00000064;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
  }

`;
export const DivText = styled.span`
  animation: ${appear} 1s;
  @media ${devices.mobileSS} {
    z-index: 53;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media ${devices.tablet} {
    font-size: 2vw;
  }
`;

export const Action = styled.p`
  @media ${devices.mobileSS} {
    padding: 2vh 0;
    width: 90%;
    border-top: 1px solid #dfdfdf;
    color: rgb(255, 49, 49);
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    padding: 2vh 0;
    width: 90%;
  }
`;
