import styled from 'styled-components';

import heroImg from '../../imgs/Dogs.jpg';

export const HeaderWrapper = styled.header`
    align-items: center;
    display: flex;
    flex-direction: column;
    @media (min-width: 765px) {
      flex-direction: row;
      margin-top: 40px;
      justify-content: space-between;
      width: 685px;
    }
`;

export const HeroImage = styled.img.attrs({
  src: heroImg,
  alt: 'Dan with dogs',
})`
    max-width: 415px;
    width: 100%;
    @media (min-width: 765px) {
      border-radius: 10px;
      position: relative;
      top: 14px;
      width: 335px;
    }
`;

export const HeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    @media (min-width: 400px) {
      width: 350px;
    }
    @media (min-width: 765px) {
      margin-right: 17px;
      width: 292px;
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 42px;
    font-weight: 400;
    margin: 20px 0 15px 0;
    text-align: center;
`;

export const IntroCopy = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    &:nth-of-type(2) {
      margin-top: 15px;
    }
    @media (min-width: 765px) {
      position: relative;
      left: 19px;
    }
`;
