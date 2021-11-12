import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.white};
  padding: 4.5rem 0;
`;

export const Container = styled.div`
  max-width: 136.6rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;

  @media (max-width: 1200px) {
    text-align: center;
  } ;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
