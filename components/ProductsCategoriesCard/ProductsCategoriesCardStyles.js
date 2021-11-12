import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  ${({ categorySection }) =>
    categorySection &&
    css`
      height: 45rem;
      margin-bottom: 3rem;
      border: 1px solid #4e4e4e;
      color: ${({ theme }) => theme.white};

      @media (max-width: 1024px) {
        height: 35rem;
      }

      @media (max-width: 768px) {
        height: auto;
        gap: 3rem;
        padding: 3rem 0;
      }
    `}

  ${({ featuredSection }) =>
    featuredSection &&
    css`
      border: 2px solid #d1d1d1;
      color: ${({ theme }) => theme.black};
      padding: 4.5rem;

      @media (max-width: 1200px) {
        width: 75%;
        margin: 0 auto;
      }

      @media (max-width: 900px) {
        width: 85%;
        padding: 3.5rem;
      }

      @media (max-width: 428px) {
        width: 90%;
        padding: 2rem;
      }
    `}
`;

export const TextContent = styled.div`
  ${({ categorySection }) =>
    categorySection &&
    css`
      padding-left: 10.8rem;

      @media (max-width: 1024px) {
        padding-left: 5rem;
      }

      @media (max-width: 768px) {
        text-align: center;
        padding-left: 0;
      }
    `}

  ${({ featuredSection }) =>
    featuredSection &&
    css`
      button {
        color: ${({ theme }) => theme.black};
        border-color: ${({ theme }) => theme.black};
        padding: 1.5rem 5rem;

        &:hover {
          color: ${({ theme }) => theme.white};
          background-color: ${({ theme }) => theme.black};
        }
      }

      @media (max-width: 768px) {
        text-align: center;
      }
    `}
`;

export const Title = styled.h2`
  text-transform: capitalize;
  font-weight: 600;

  ${({ categorySection }) =>
    categorySection &&
    css`
      font-size: 5.2rem;

      @media (max-width: 590px) {
        font-size: 4rem;
      }

      @media (max-width: 450px) {
        margin-bottom: 1.5rem;
      }
    `}

  ${({ featuredSection }) =>
    featuredSection &&
    css`
      font-size: 3rem;

      @media (max-width: 428px) {
        font-size: 2.5rem;
      }
    `}
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  line-height: 2.8rem;

  ${({ categorySection }) =>
    categorySection &&
    css`
      margin: 1.3rem 0 5rem;
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
    `}

  ${({ featuredSection }) =>
    featuredSection &&
    css`
      margin: 1.5rem 0 7rem;
      color: #2e2e2e;

      @media (max-width: 768px) {
        margin-bottom: 3rem;
      }

      @media (max-width: 428px) {
        margin: 1rem 0 2rem;
      }
    `}
`;

export const ImageContainer = styled.div`
  justify-self: flex-end;

  ${({ categorySection }) =>
    categorySection &&
    css`
      height: auto !important;
      width: 100% !important;
      @media (max-width: 1024px) {
        align-self: center !important;
      }
    `}

  ${({ featuredSection }) =>
    featuredSection &&
    css`
      justify-self: center !important;
    `}
`;
