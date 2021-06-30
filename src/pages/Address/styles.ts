import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerCard = styled.div`
  position: absolute;
  margin: 20px;
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1rem;
  z-index: 1000000;
  background-color: #fff;

  h5 {
    font-size: 1rem;
    color: #00938f;
    font-weight: bold;
  }

  h6 {
    font-size: 1rem;
    color: #0b9894;
  }
`;
