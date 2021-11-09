import { NavbarLogo, NextLink } from '@components';

/* eslint-disable @next/next/no-img-element */
const NavbarMobile = () => {
  return (
    <>
      <button className='menuIcon'>
        <img src='assets/svg/hamburger-menu.svg' alt='' />
      </button>

      <NavbarLogo />

      <NextLink
        route='cart'
        link={<img src='assets/svg/cart-2.svg' alt='cart-icon' />}
      />
    </>
  );
};

export default NavbarMobile;
