import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.white};
  border-bottom: 1px solid #d8d8da;
`;
