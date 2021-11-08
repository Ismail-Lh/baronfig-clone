import styled from 'styled-components';

export const Wrapper = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  .iconsContainer {
    margin-left: 3.5rem;

    .searchIcon {
      margin-right: 3.5rem;
      height: 3.9rem;
    }
  }
`;
