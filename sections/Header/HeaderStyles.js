import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.white};
`;
