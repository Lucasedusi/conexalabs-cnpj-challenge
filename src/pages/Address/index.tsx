/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ICompany } from '../../interface/company';
import { FaMapMarkerAlt, FaArrowAltCircleLeft } from 'react-icons/fa';

import ReactMapboxGl, { Layer, Marker } from 'react-mapbox-gl';
import localizationApi from '../../services/localization';
import Spinner from '../../components/Spinner';

import { Container, ContainerCard } from './styles';

import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  company: ICompany;
}

function Address({ company }: MapProps) {
  const [companyMap] = useState<ICompany>(company);
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>();
  let history = useHistory();

  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibHVjYXNlZHVzaSIsImEiOiJja3E4Mm1sNHAwYzAyMndwbGR5bzhlYm9tIn0.wF_qyRjCNyXYkR5N2Cov3A',
  });

  useEffect(() => {
    if (companyMap?.cnpj === '') {
      history.push('/');
    } else {
      (async function getAddress() {
        setLoader(true);

        await localizationApi
          .get('/json', {
            params: {
              address: company.endereco + company.fantasia,
              key: 'AIzaSyAtbTMD8L_-9Ilj9bciFSy_tP7B4hJiFVI',
            },
          })
          .then((res) => {
            setLat(res.data.results[0].geometry.location.lat);
            setLng(res.data.results[0].geometry.location.lng);
          })
          .catch(() => {
            alert('Falha ao buscar endereço');
          });
      });
    }
  }, [companyMap, history]);

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw',
            zIndex: 0,
          }}
          center={[lng, lat]}
          zoom={[18]}
        >
          <Container>
            <ContainerCard>
              <Link to="/">
                <FaArrowAltCircleLeft />
              </Link>
              <h5>{company.fantasia}</h5>
              <h6>Razão Social</h6>
              <h5>{company.cnpj}</h5>
              <h6>CNPJ</h6>
              <h5>{company.logradouro}</h5>
              <h6>Endereço</h6>
            </ContainerCard>
          </Container>
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}></Layer>
          <Marker style={{ fontSize: 32, color: '#f00' }} coordinates={[lng, lat]}>
            <FaMapMarkerAlt />
          </Marker>
        </Map>
      )}
    </>
  );
}

export default Address;
