import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const DivTotal = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dfdfdf;
    padding: 0px 2vw 2vh 0;
    margin: 2vh 5vw 0px;
  }
`;

export const BtnBuy = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color:rgb(255,49,49);
    width: 90%;
    margin: 0 5%;
    border-radius: 6px;
    color: white;
  }
  @media ${devices.tablet} {
    height: 100%;
    width: 100%;
    font-size: 2vw;
  }
`;

export const SubTitle = styled.p`
  @media ${devices.mobileSS} {
    font-size: 4vw;
  }
  @media ${devices.tablet} {
    font-size: 2vw;
  }
`;

export const BtnClose = styled.div`
  @media ${devices.mobileSS} {
    color: rgb(255, 49, 49);
    font-size: 5vw;
  }
  @media ${devices.tablet} {
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
    position: static;
    width: 100%;
    height: 10vh;
    padding: 2% 5%;
  }
`;
