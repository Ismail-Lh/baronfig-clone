import styled from 'styled-components';

export const Container = styled.div`
  height: 45rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 3rem;
  border: 1px solid #4e4e4e;
  border-radius: 2rem;
  color: ${({ theme }) => theme.white};

  @media (max-width: 1024px) {
    height: 35rem;
  }

  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem 0;
  }
`;

export const TextContent = styled.div`
  padding-left: 10.8rem;

  @media (max-width: 1024px) {
    padding-left: 5rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: 600;
  text-transform: capitalize;

  @media (max-width: 590px) {
    font-size: 4rem;
  }

  @media (max-width: 450px) {
    margin-bottom: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  margin: 1.3rem 0 5rem;
  line-height: 2.8rem;
  width: 30.6rem;

  @media (max-width: 1024px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 590px) {
    margin-bottom: 2rem;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  justify-self: flex-end;

  @media (max-width: 1024px) {
    align-self: center !important;
  }
`;
