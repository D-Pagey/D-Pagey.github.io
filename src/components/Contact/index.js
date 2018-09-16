import React from 'react';

import {
  ContactWrapper,
  ContactSubtitle,
  ContactCopy,
  IconWrapper,
  Icon,
} from './styles';

export default function Contact() {
  return (
    <ContactWrapper>
      <ContactSubtitle>Online Profiles</ContactSubtitle>
      <ContactCopy>
        Online profiles for if you would like to get in touch or see my code:
      </ContactCopy>
      <IconWrapper>
        <a
          href="https://twitter.com/Pagey64"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="twitter" />
        </a>
        <a
          href="https://github.com/D-Pagey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/dan-page/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="linkedin" />
        </a>
      </IconWrapper>
    </ContactWrapper>
  );
}
