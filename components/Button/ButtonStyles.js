import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  text-align: center;
  border-radius: 1rem;
  transition: all 0.2s ease-in-out;
  padding: 1.5rem 3rem;
  text-transform: capitalize;

  &:hover {
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.white};
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.black};
      width: 19.5rem;
      margin: 0 auto;
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      border: 2px solid #fff;

      @media (max-width: 390px) {
        font-size: 1.6rem;
        padding: 1rem 2rem;
      }
    `}
`;
