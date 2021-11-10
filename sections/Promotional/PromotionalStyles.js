import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.white};
  height: 11rem;
  padding: 0 8.5rem;

  @media (max-width: 1300px) {
    padding: 0 6rem;
  }

  @media (max-width: 850px) {
    height: 7.4rem;
    padding: 0 4rem;
  }

  .react-multi-carousel-list {
    height: 100%;
  }
`;

export const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
