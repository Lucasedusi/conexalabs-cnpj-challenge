import React from 'react';

import { FaBuilding } from 'react-icons/fa';
import { Container, Header, Title, Form, Body, CardInformation, InfoRazaoSocial, InfoCNPJ, InfoEndereco } from './styles';

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
            <InfoCNPJ>
              <p>342.454.0001/76</p>
              <span>CNPJ</span>
            </InfoCNPJ>
            <InfoEndereco>
              <p>Av. Brasil 1982, Centro - GO</p>
              <span>Endereço</span>
            </InfoEndereco>
          </CardInformation>
          <CardInformation>
            <InfoRazaoSocial>
              <p>Conexa Hub de Inovação</p>
              <span>Razão Social</span>
            </InfoRazaoSocial>
            <InfoCNPJ>
              <p>342.454.0001/76</p>
              <span>CNPJ</span>
            </InfoCNPJ>
            <InfoEndereco>
              <p>Av. Brasil 1982, Centro - GO</p>
              <span>Endereço</span>
            </InfoEndereco>
          </CardInformation>
          <CardInformation>
            <InfoRazaoSocial>
              <p>Conexa Hub de Inovação</p>
              <span>Razão Social</span>
            </InfoRazaoSocial>
            <InfoCNPJ>
              <p>342.454.0001/76</p>
              <span>CNPJ</span>
            </InfoCNPJ>
            <InfoEndereco>
              <p>Av. Brasil 1982, Centro - GO</p>
              <span>Endereço</span>
            </InfoEndereco>
          </CardInformation>
          <CardInformation>
            <InfoRazaoSocial>
              <p>Conexa Hub de Inovação</p>
              <span>Razão Social</span>
            </InfoRazaoSocial>
            <InfoCNPJ>
              <p>342.454.0001/76</p>
              <span>CNPJ</span>
            </InfoCNPJ>
            <InfoEndereco>
              <p>Av. Brasil 1982, Centro - GO</p>
              <span>Endereço</span>
            </InfoEndereco>
          </CardInformation>
          
        </Body>
      </Container>
    </>
  );
};

export default Dashboard;
