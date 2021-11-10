import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 59.1rem;
  width: 100vw;
  margin-top: 5rem;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000033;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  z-index: 100;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 7rem;
  font-weight: 600;
  margin-bottom: 4.2rem;
  white-space: nowrap;

  @media (max-width: 650px) {
    font-size: 6rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 550px) {
    font-size: 5rem;
  }

  @media (max-width: 430px) {
    font-size: 4.5rem;
  }

  @media (max-width: 390px) {
    font-size: 4rem;
  }

  @media (max-width: 325px) {
    font-size: 3.5rem;
  }
`;
