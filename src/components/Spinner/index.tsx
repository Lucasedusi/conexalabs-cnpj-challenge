/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import { Loading, LoadingIcon } from './styles';

const Spinner: React.FC = () => {
  return (
    <Loading>
      <LoadingIcon hidden={false} />
    </Loading>
  );
};

export default Spinner;
