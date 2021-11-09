import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.2s ease-in-out;

  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.black};
      height: 4.8rem;
      width: 19.5rem;
      border-radius: 1rem;
      margin: 0 auto;

      &:hover {
        color: ${({ theme }) => theme.black};
        background-color: ${({ theme }) => theme.white};
      }
    `}
`;
