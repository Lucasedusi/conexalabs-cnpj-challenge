import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  @media (max-width: 767px) {
    position: absolute;
    margin: 15px;
  }
`;

export const CardInformation = styled.div`
  

  @media (max-width: 767px) {
    display: none;
  }

  &:hover {
    transform: translateY(5px);
  }

  p {
    font-size: 16px;
    color: ${colors.textCard};
    font-weight: 600;
    margin-bottom: 4px;
    text-transform: capitalize;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  span {
    font-size: 15px;
    color: ${colors.textCard};
    font-weight: 400;

    @media (max-width: 767px) {
      font-size: 13px;
    }
  }
`;

export const InfoRazaoSocial = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
  margin-top: 10px;
`;

export const InfoCNPJ = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;

export const InfoEndereco = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
