import styled from 'styled-components';
import { shade } from 'polished';

// interface formProps {
//   hasError: boolean;
// }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 60px;
  display: flex;
  input {
    flex: 1;
    font-weight: 600;
    color: #292929;
    font-size: 20px;
    height: 70px;
    width: 650px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 1px solid #fff;
    border-right: 0;
  }

  button {
    width: 350px;
    height: 70px;
    font-size: 20px;
    background: linear-gradient(135deg, #41c9a6 0%, #008eff 100%);
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: all, 0.6s;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 20px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 70px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(10px);
    }
    & + a {
      margin-top: 16px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 18px;
        color: #3d3d4d;
      }
      p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
