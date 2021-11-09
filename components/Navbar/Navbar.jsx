import { Wrapper } from './NavbarStyles';
import { useMediaQuery } from '@react-hook/media-query';
import { NavbarDesktop, NavbarMobile } from '@components';

const Navbar = () => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 1060px)');

  return (
    <Wrapper className='container'>
      {!matchesMedia ? <NavbarDesktop /> : <NavbarMobile />}
    </Wrapper>
  );
};

export default Navbar;
