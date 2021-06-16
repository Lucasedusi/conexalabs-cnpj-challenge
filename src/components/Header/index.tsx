/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { Container } from './styles';
import LogoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={LogoImg} />
    </Container>
  );
};

export default Header;
