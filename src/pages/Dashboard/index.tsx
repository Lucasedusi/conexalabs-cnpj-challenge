import React, { useState, FormEvent } from 'react';

import api from '../../services/api';
import Lottie from 'react-lottie';
import failedAnimation from '../../assets/failedAnimation.json';

import { FaBuilding, FaChevronRight } from 'react-icons/fa';
import {
  Container,
  Header,
  Title,
  Form,
  Body,
  CardInformation,
  InfoRazaoSocial,
  InfoCNPJ,
  InfoEndereco,
  Footer,
  Error,
} from './styles';
import { Link } from 'react-router-dom';

interface CnpjProps {
  fantasia: string;
  cnpj: string;
  logradouro: string;
  bairro: string;
  municipio: string;
  uf: string;
}

const Dashboard: React.FC = () => {
  const [newCnpj, setNewCnpj] = useState('');
  const [inputError, setInputError] = useState('');
  const [searchCnpj, setSearchCnpj] = useState<CnpjProps[]>([]);

  async function handleSearchCnpj(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newCnpj) {
      setInputError('Digite um CNPJ');
      return;
    }

    try {
      const response = await api.get<CnpjProps>(`v1/cnpj/${newCnpj}`);

      const findCnpj = response.data;

      setSearchCnpj([...searchCnpj, findCnpj]);
      setNewCnpj('');
      setInputError('');
    } catch (err) {
      setInputError('CNPJ Inválido');
      setNewCnpj('');
    }
  }

  const cnpjAnimation = {
    loop: 1,
    autoplay: true,
    animationData: failedAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Container>
        <Header>
          <Title>
            <FaBuilding size={50} color="#3a8970" />
            <h1>Localizador de Empresas</h1>
          </Title>
          <Form hasError={!!inputError} onSubmit={handleSearchCnpj}>
            <input value={newCnpj} onChange={(e) => setNewCnpj(e.target.value)} placeholder="CNPJ..." />
            <button type="submit">LOCALIZAR</button>
          </Form>
          {inputError && (
            <Error>
              <Lottie width={26} height={26} options={cnpjAnimation} />
              {inputError}
            </Error>
          )}
        </Header>

        <Body>
          {searchCnpj.map((item) => (
            <>
              <Link to="/" key={item.cnpj}>
                <CardInformation>
                  <InfoRazaoSocial>
                    <p>{item.fantasia}</p>
                    <span>Razão Social</span>
                  </InfoRazaoSocial>
                  <InfoCNPJ>
                    <p>{item.cnpj}</p>
                    <span>CNPJ</span>
                  </InfoCNPJ>
                  <InfoEndereco>
                    <p>{`${item.logradouro}, ${item.bairro} - ${item.municipio}, ${item.uf}`}</p>
                    <span>Endereço</span>
                  </InfoEndereco>
                  <Footer>
                    <FaChevronRight size={18} />
                  </Footer>
                </CardInformation>
              </Link>
            </>
          ))}
        </Body>
      </Container>
    </>
  );
};

export default Dashboard;
