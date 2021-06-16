import React from 'react';

import { Container, Form, Repositories } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <input placeholder="Digite o CNPJ" />
          <button type="submit">Buscar</button>
        </Form>

        <Repositories></Repositories>
      </Container>
    </>
  );
};

export default Dashboard;
