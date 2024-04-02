import styled, { keyframes } from "styled-components";
import devices from "../../Assets/Devices/Devices";



export const DivProduct = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    padding: 0px 0px 2vh;
    margin: 2vh 5vw 0px;
  }
`;

export const BtnEdit = styled.div`
  @media ${devices.mobileSS} {
    transform: rotate(90deg);
    color: rgb(255, 49, 49);
    font-size: 5vw;
  }
`;

export const Name = styled.p`
  @media ${devices.mobileSS} {
    margin: 0 0 0 2vw;
    width: 62vw;
    
  }
`;
