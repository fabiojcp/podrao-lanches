import styled from "styled-components";
import devices from "../../Assets/Devices/Devices";

export const DivMain = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #dfdfdf;
    padding: 1.5vh 0;
  }
  @media ${devices.tablet} {
    width: 35%;
    margin: 1% 5% 1% 0;
    border: 1px solid #dfdfdf;
    border-radius: 10px;
  }
`;

export const DivContent = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  @media ${devices.tablet} {
    width: 60%;
    padding: 0.5vh 0 0.5vh 5%;
  }
`;

export const DivText = styled.div`
  @media ${devices.mobileSS} {
    display: flex;
    flex-direction: column;
  }
  @media ${devices.tablet} {
  }
`;

export const Title = styled.p`
  @media ${devices.mobileSS} {
    font-size: 5vw;
    margin: 0 0 1vh 0;
  }
  @media ${devices.tablet} {
    font-size: 2.5vw;
  }
`;

export const Bio = styled.p`
  @media ${devices.mobileSS} {
    font-size: 3vw;
    margin: 0 0 1vh 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    font-weight: 300;
  }
  @media ${devices.tablet} {
    font-size: 1.4vw;
  }
`;

export const Img = styled.div`
  @media ${devices.mobileSS} {
    width: 30%;
    background-image: url(${(props) => props.background});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media ${devices.tablet} {
    height: 100%;

  }
`;

export const Price = styled.p`
  @media ${devices.mobileSS} {
    color: green;
  }
  @media ${devices.tablet} {
    font-size: 1.8vw;
  }
`;
