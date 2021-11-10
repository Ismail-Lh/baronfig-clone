import { v4 as uuidv4 } from 'uuid';

export const navbarLinks_1 = [
  { id: uuidv4(), link: 'shop', route: 'shop' },
  { id: uuidv4(), link: 'new releases', route: 'new-releases' },
  { id: uuidv4(), link: 'personal socrates', route: 'personal-socrates' },
  { id: uuidv4(), link: 'gift', route: 'gift', softRed: true },
];

export const navbarLinks_2 = [
  { id: uuidv4(), link: 'get $10', route: 'referral' },
  { id: uuidv4(), link: 'for business', route: 'business' },
  { id: uuidv4(), link: 'log in', route: 'login' },
];

export const promotionalLogos = [
  {
    id: uuidv4(),
    logoSrc: '/assets/svg/bloomberg.svg',
    logoAlt: 'bloombergLogo',
    quotes: 'High end and well-crafted.',
    width: '112px',
    height: '22px',
  },
  {
    id: uuidv4(),
    logoSrc: '/assets/svg/newyork.svg',
    logoAlt: 'newyorkLogo',
    quotes: 'Squire Named #1 Pen',
    width: '119px',
    height: '26px',
  },
  {
    id: uuidv4(),
    logoSrc: '/assets/svg/gq.svg',
    logoAlt: 'gqLogo',
    quotes: 'Comfortable. Productive.',
    width: '45px',
    height: '22px',
  },
  {
    id: uuidv4(),
    logoSrc: '/assets/svg/design-milk.svg',
    logoAlt: 'designMilkLogo',
    quotes: 'Feels right at home.',
    width: '101px',
    height: '26px',
  },
];
