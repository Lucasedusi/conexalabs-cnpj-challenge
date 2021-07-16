/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { Loading, TextLoading, LoadingIcon } from './styles';

const SpinnerDashboard: React.FC = () => {
  return (
    <Loading>
      <LoadingIcon hidden={false} />
      <TextLoading>Buscando Empresa</TextLoading>
    </Loading>
  );
};

export default SpinnerDashboard;
