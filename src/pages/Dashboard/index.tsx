import React from 'react';

import { FaBuilding } from 'react-icons/fa';
import { Container, Header, Title, Form, Body, CardInformation, InfoRazaoSocial } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>
            <FaBuilding size={50} color="#3a8970" />
            <h1>Localizador de Empresas</h1>
          </Title>
          <Form>
            <input placeholder="CNPJ..." />
            <button type="submit">LOCALIZAR</button>
          </Form>
        </Header>
        <Body>
          <CardInformation>
            <InfoRazaoSocial>
              <p>Conexa Hub de Inovação</p>
              <span>Razão Social</span>
            </InfoRazaoSocial>
          </CardInformation>
          <CardInformation>
            <p>Card 2</p>
          </CardInformation>
          <CardInformation>
            <p>Card 1</p>
          </CardInformation>
          <CardInformation>
            <p>Card 1</p>
          </CardInformation>
        </Body>
      </Container>
    </>
  );
};

export default Dashboard;
