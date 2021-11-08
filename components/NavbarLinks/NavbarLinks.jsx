import { NextLink } from '@components';
import { ListItem } from './NavbarLinksStyles';

const NavbarLinks = ({ links }) => {
  return (
    <>
      {links.map(({ id, link, route, softRed }) => (
        <ListItem key={id} softRed={softRed}>
          <NextLink route={route} link={link} />
        </ListItem>
      ))}
    </>
  );
};

export default NavbarLinks;
