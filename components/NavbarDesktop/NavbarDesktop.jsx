/* eslint-disable @next/next/no-img-element */
import { NavbarList, NavbarLogo, NextLink } from '@components';
import { navbarLinks_1, navbarLinks_2 } from '@utils/constants';
import { Content } from './NavbarDesktopStyles';

const NavbarDesktop = () => {
  return (
    <>
      <Content>
        <NavbarLogo />
        <NavbarList links={navbarLinks_1} />
      </Content>

      <Content>
        <NavbarList links={navbarLinks_2} />

        <div className='iconsContainer'>
          <button className='searchIcon'>
            <img src='assets/svg/search-icon.svg' alt='search-icon' />
          </button>

          <NextLink
            route='cart'
            link={<img src='assets/svg/cart-2.svg' alt='cart' />}
          />
        </div>
      </Content>
    </>
  );
};

export default NavbarDesktop;
