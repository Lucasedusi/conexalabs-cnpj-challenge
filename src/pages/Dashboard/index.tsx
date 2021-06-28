/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FormEvent, useEffect } from 'react';

import api from '../../services/api';

import Lottie from 'react-lottie';
import failedAnimation from '../../assets/failedAnimation.json';
import CpfCnpj from '@react-br-forms/cpf-cnpj-mask';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  message: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [newCnpj, setNewCnpj] = useState('');
  const [inputError, setInputError] = useState('');
  const [mask, setMask] = useState('');
  const [searchCnpj, setSearchCnpj] = useState<CnpjProps[]>(() => {
    const storageCNPJ = localStorage.getItem('@Conexa:cnpj');

    if (storageCNPJ) {
      return JSON.parse(storageCNPJ);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Conexa:cnpj', JSON.stringify(searchCnpj));
  }, [searchCnpj]);

  async function handleSearchCnpj(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newCnpj) {
      setInputError('Digite um CNPJ');
      return;
    }

    if (newCnpj.length !== 18) {
      setInputError('Está Faltando Números aí 😁');
      return;
    }

    try {
      const response = await api.get<CnpjProps>(`v1/cnpj/${newCnpj.replace(/\D+/g, '')}`);

      const findCnpj = response.data;

      if (response.data.status === 'ERROR') {
        setInputError(response.data.message);
        return;
      }

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
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
            <CpfCnpj
              value={newCnpj}
              onChange={(e: { target: { value: React.SetStateAction<string> } }, type: string) => {
                setNewCnpj(e.target.value);
                setMask((type = 'CPF'));
              }}
            />
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
          <Carousel responsive={responsive}>
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
          </Carousel>
        </Body>
      </Container>
    </>
  );
};

export default Dashboard;
