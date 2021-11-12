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

export const productsCategoriesSectionContent = [
  {
    id: uuidv4(),
    title: 'tools',
    subtitle: 'Think and work without distraction.',
    imgSrc: '/assets/tools-product-category.png',
    imgAlt: 'tools-product-category',
    imgHeight: '354px',
    imgWidth: '800px',
    link: 'shop tools',
    route: 'tools',
    alignSelf: 'flex-end',
  },
  {
    id: uuidv4(),
    title: 'workspace',
    subtitle: 'Make your space more productive.',
    imgSrc: '/assets/workspace-product-category.png',
    imgAlt: 'workspace-product-category',
    imgHeight: '269px',
    imgWidth: '813px',
    link: 'shop workspace',
    route: 'workspace',
    alignSelf: 'center',
  },
  {
    id: uuidv4(),
    title: 'travel',
    subtitle: 'Get work done while on the move.',
    imgSrc: '/assets/travel-product-category.png',
    imgAlt: 'travel-product-category',
    imgHeight: '320px',
    imgWidth: '740px',
    link: 'shop travel',
    route: 'travel',
    alignSelf: 'center',
  },
];

export const featuredToolsCardContent = [
  {
    id: uuidv4(),
    title: 'confidant notebook',
    subtitle: 'The notebook for ideas.',
    imgSrc: '/assets/confidant-notebook-tools.png',
    imgAlt: 'tools-product-category',
    imgWidth: '230px',
    imgHeight: '264px',
    link: 'shop confidant',
    route: 'tools/confidant',
  },
  {
    id: uuidv4(),
    title: 'squire pen',
    subtitle: 'The pen is a mighty sword.',
    imgSrc: '/assets/squire-pen-tools.png',
    imgAlt: 'squire-pen-tools',
    imgWidth: '230px',
    imgHeight: '264px',
    link: 'shop squire',
    route: 'tools/squire',
  },
];
