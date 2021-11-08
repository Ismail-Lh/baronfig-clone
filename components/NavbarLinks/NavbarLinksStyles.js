import styled, { css } from 'styled-components';

export const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 3.5rem;
  }

  a {
    font-size: 1.7rem;
    font-weight: 600;
    text-transform: capitalize;
    color: ${({ theme }) => theme.black};

    &::after {
      content: '';
      height: 2px;
      display: block;
      margin: auto;
      opacity: 0;
      background-color: transparent;
      width: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      &::after {
        background-color: #000;
        width: 100%;
        opacity: 1;
      }
    }

    ${({ softRed }) =>
      softRed &&
      css`
        color: ${({ theme }) => theme.softRed};

        &:hover {
          &::after {
            background-color: ${({ theme }) => theme.softRed};
          }
        }
      `}
  }
`;
