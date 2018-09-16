import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 765px) {
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 685px;
  }
`;

export const SkillsSubtitle = styled.h2`
    margin: 20px 0 5px 0;
    text-align: center;
    width: 100%;
    @media (min-width: 765px) {
        font-size: 37px;
        font-weight: 400;
    }
`;

export const SkillsCopyWrapper = styled.div`
  font-size: 18px;
  margin: 0;
  width: 280px;
  
  @media (min-width: 400px) {
      width: 350px;
  }
  @media (min-width: 765px) {
    align-self: flex-start;
    margin-top: 26px;
    margin-right: 30px;
    width: 292px;
  }
`;

export const SkillsLink = styled.a`
  color: blue;
  text-decoration: none;
  &:visited {
    color: blue;
    text-decoration: none;
  }
`;
