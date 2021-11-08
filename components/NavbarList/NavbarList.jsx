import { NavbarLinks } from '@components';
import { ListContainer } from './NavbarListStyles';

const NavbarList = ({ links }) => {
  return (
    <ListContainer>
      <NavbarLinks links={links} />
    </ListContainer>
  );
};

export default NavbarList;
