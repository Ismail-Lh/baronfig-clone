import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.white};
  height: 11rem;
  max-width: 130rem;
  margin: 0 auto;

  @media (max-width: 850px) {
    height: 7.4rem;
  }

  .react-multi-carousel-list {
    height: 100%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  /* @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  } */
`;
