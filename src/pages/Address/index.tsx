import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ICompany } from '../../interface/company';
import { FaMapMarkerAlt, FaArrowAltCircleLeft } from 'react-icons/fa';

import ReactMapboxGl, { Layer, Marker } from 'react-mapbox-gl';
import localization from '../../services/localization';
import Spinner from '../../components/Spinner';

import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  company: ICompany;
}

function Address({ company }: MapProps) {
  return (
    <div>Map</div>
  )
}

export default Address
