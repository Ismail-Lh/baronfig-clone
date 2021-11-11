import styled from 'styled-components';

export const Container = styled.div`
  padding: 13rem 0 11rem;
  color: ${({ theme }) => theme.white};
  text-align: center;

  @media (max-width: 580px) {
    padding: 6rem 0;
  }

  @media (max-width: 390px) {
    padding: 4rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  line-height: 3rem;
  font-weight: 600;

  @media (max-width: 710px) {
    font-size: 3.8rem;
    line-height: 2rem;
  }

  @media (max-width: 580px) {
    font-size: 3rem;
  }

  @media (max-width: 470px) {
    font-size: 2.5rem;
    line-height: 2rem;
  }

  @media (max-width: 390px) {
    font-size: 2rem;
  }

  @media (max-width: 320px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.grey};
  font-size: 2.5rem;
  font-weight: 400;
  margin-top: 2rem;

  @media (max-width: 580px) {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 390px) {
    font-size: 1.6rem;
  }

  @media (max-width: 320px) {
    font-size: 1.4rem;
    margin-top: 1rem;
  }
`;
