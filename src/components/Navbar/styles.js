import styled from 'styled-components';

export const NavbarWrapper = styled.div`
    margin-top: 17px;
    width: 275px;
    
    @media (min-width: 400px) {
      width: 315px;
    }
    @media (min-width: 765px) {
      display: none;
    }
`;

export const NavbarList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const NavbarButton = styled.button`
    background-color: #FFC18B;
    border: 0;
    border-radius: 5px;
    font-size: 1.25rem;
    margin: 5px 0;
    padding: 10px 0;
    width: 100%;
`;
