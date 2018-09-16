import styled from 'styled-components';

export const ContactWrapper = styled.div.attrs({
  id: 'contact',
})`
    display: flex;
    flex-direction: column;
    @media (min-width: 765px) {
      margin: 0;
    }
`;

export const ContactSubtitle = styled.h2`
    margin: 20px 0 5px 0;
    text-align: center;
    width: 100%;
    @media (min-width: 765px) {
        font-size: 37px;
        font-weight: 400;
    }
`;

export const ContactCopy = styled.p`
    font-size: 18px;
    width: 275px;

    @media (min-width: 374px) {
      font-size: 18px;
      margin: 10px 0 20px;
      width: 290px;
    }

    @media (min-width: 400px) {
      width: 300px;
    }
`;

export const IconWrapper = styled.div`
  align-self: center;
  margin-bottom: 30px;
`;

export const Icon = styled.i.attrs({
  className: props => `fa fa-${props.type}-square fa-3x social`,
})`
  color: #007bff;
  margin-right: ${(props) => {
    return props.type === 'twitter' || props.type === 'github' ? '.25em' : 0;
  }};
  &:hover {
    transform: scale(1.1); 
  }
`;
