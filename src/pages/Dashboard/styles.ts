import styled from 'styled-components';
import { shade } from 'polished';

import colors from '../../styles/colors';

interface formProps {
  hasError?: boolean;
}

export const Container = styled.div`
  /* padding: 40px 0; */
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
    font-family: 'Roboto';
    margin-left: 22px;
    font-weight: 400;
    color: ${colors.primary};
  }
`;

export const Form = styled.form<formProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  input {
    flex: 1;
    width: 375px;
    font-weight: 500;
    color: #292929;
    font-size: 20px;
    height: 65px;
    padding: 0 24px;
    border-radius: 5px;
    border: 2px solid ${colors.primary};
  }

  button {
    margin-left: 20px;
    height: 50px;
    font-size: 20px;
    padding: 8px 32px;
    background-color: ${colors.primary};
    border-radius: 30px;
    color: #fff;
    font-weight: 500;
    border: 0;
    transition: background, 0.6s;

    &:hover {
      background: ${shade(0.2, '#3a8970')};
    }
  }
`;

export const Body = styled.div`
  background: linear-gradient(135deg, ${colors.gradientPrimary} 0%, ${colors.gradientSecondary} 100%);
  padding: 100px 130px 150px 130px;
  height: 494px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 42px;

  a {
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(10px);
    } 
  }
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 20px;
  background: #fff;
  border-radius: 10px;

  p {
    font-size: 16px;
    color: ${colors.textCard};
    font-weight: 600;
    margin-bottom: 4px;
    text-transform: capitalize;
  }

  span {
    font-size: 15px;
    color: ${colors.textCard};
    font-weight: 400;
  }
`;

export const InfoRazaoSocial = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
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
