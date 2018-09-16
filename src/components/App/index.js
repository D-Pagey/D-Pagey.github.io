import React from 'react';

import { AppWrapper, Line } from './styles';
import Header from '../Header';
import Navbar from '../Navbar';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Navbar />
      <Line />
      <Skills />
      <Line />
      <Projects />
      <Line />
      <Contact />
    </AppWrapper>
  );
}
