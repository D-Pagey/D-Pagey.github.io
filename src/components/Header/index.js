import React from 'react';

import {
  HeaderWrapper,
  HeroImage,
  HeaderTextWrapper,
  HeaderTitle,
  IntroCopy,
} from './styles';

function Header() {
  return (
    <HeaderWrapper>
      <HeroImage />
      <HeaderTextWrapper>
        <HeaderTitle>Dan Page</HeaderTitle>
        <IntroCopy>
          I'm a self taught Front End Developer focussing on building apps in
          React.
        </IntroCopy>
        <IntroCopy>
          Below is a selection of the 10+ projects I have built in Vanilla JS
          and then rebuilt in React
        </IntroCopy>
      </HeaderTextWrapper>
    </HeaderWrapper>
  );
}

export default Header;
