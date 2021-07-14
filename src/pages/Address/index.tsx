/* eslint-disable react/style-prop-object */
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactMapboxGl, { Layer, Marker } from 'react-mapbox-gl';
import localization from '../../services/localization';
import { ICompany } from '../../interface/company';

import swal from 'sweetalert';

import Spinner from '../../components/Spinner';

import { FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';

import { Container, CardInformation, InfoRazaoSocial, InfoCNPJ, InfoEndereco } from './styles';

import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  company: ICompany;
}

function Address({ company }: MapProps) {
  const [companyMap] = useState<ICompany>(company);
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  let history = useHistory();

  const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoibHVjYXNlZHVzaSIsImEiOiJja3IzbGdsbjYxd21wMnBvN3BtdmhyMWkwIn0.yv5kI-J5NEaKaohDoWHgQw',
  });

  useEffect(() => {
    (async function getAddress() {
      setLoader(true);
      await localization
        .get('/json', {
          params: {
            address: companyMap.logradouro + companyMap.fantasia + companyMap.municipio,
            key: 'AIzaSyDdI14A2M5QynOpuYJm_qygWiqI4YlwwC4',
          },
        })
        .then((res) => {
          setLat(res.data.results[0].geometry.location.lat);
          setLng(res.data.results[0].geometry.location.lng);
        })
        .catch(() => {
          swal('Falha!', 'Endereço não encontrado!', 'error');
          history.push('/');
        })
        .finally(() => {
          setLoader(false);
        });
    })();
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
          }}
          center={[lng, lat]}
          zoom={[18]}
        >
          <Container>
            <Link to="/">
              <FaArrowLeft
                style={{ border: '1px solid #3a8970', borderRadius: '50%', padding: 5 }}
                color="#3a8970"
                size={30}
              />
            </Link>
            <CardInformation>
              <InfoRazaoSocial>
                <p>{company.fantasia}</p>
                <span>Razão Social</span>
              </InfoRazaoSocial>
              <InfoCNPJ>
                <p>{company.cnpj}</p>
                <span>CNPJ</span>
              </InfoCNPJ>
              <InfoEndereco>
                <p>{`${company.logradouro}, ${company.bairro} - ${company.municipio}, ${company.uf}`}</p>
                <span>Endereço</span>
              </InfoEndereco>
            </CardInformation>
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
