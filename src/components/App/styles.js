import styled from 'styled-components';

export const AppWrapper = styled.div`
    align-items: center;
    background-color: #F4F8FD;
    display: flex;
    flex-direction: column;
`;

export const Line = styled.hr`
    align-self: center;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin: 1.5rem 0 0;
    width: 80%;
    &:nth-of-type(3) {
        margin: 1rem 0 0;
    }
    @media (min-width: 359px) {
        width: 68%;
    }

    @media (min-width: 764px) {
        margin-top: 2.75rem;
        max-width: 600px;
        width: 77%;
    }
`;
