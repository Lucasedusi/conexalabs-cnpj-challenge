/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Address from '../pages/Address';

import { ICompany } from '../interface/company';

const Routes: React.FC = () => {
  const [company, setCompany] = useState<ICompany>({
    endereco: '',
    fantasia: '',
    cnpj: '',
    logradouro: '',
    bairro: '',
    municipio: '',
    uf: '',
    message: '',
    status: '',
  });

  const businessDate = (businessDate: ICompany) => {
    setCompany(businessDate);
  };

  return (
    <Router>
      <Route path="/" exact>
        <Dashboard dataOfCompany={businessDate} />
      </Route>
      <Route path="/address">
        <Address company={company} />
      </Route>
    </Router>
  );
};
export default Routes;
