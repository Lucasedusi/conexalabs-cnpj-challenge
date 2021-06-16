import React from 'react';

import { Form, Repositories } from './styles';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Form>
        <input placeholder="Digite o CNPJ" />
        <button type="submit">Buscar</button>
      </Form>

      <Repositories></Repositories>
    </>
  );
};

export default Dashboard;
