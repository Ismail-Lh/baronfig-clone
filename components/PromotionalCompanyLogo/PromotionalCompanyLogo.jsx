import Image from 'next/image';
import { promotionalLogos } from '@utils/constants';

import { ItemContainer } from './PromotionalCompanyLogoStyles';

const PromotionalCompanyLogo = ({
  id,
  logoSrc,
  logoAlt,
  quotes,
  width,
  height,
}) => {
  return (
    <ItemContainer key={id}>
      <div
        style={{
          position: 'relative',
          height: `${height}`,
          width: `${width}`,
        }}
        className='logoContainer'>
        <Image src={logoSrc} alt={logoAlt} layout='fill' />
      </div>
      <span className='quotes'>{`"${quotes}"`}</span>
    </ItemContainer>
  );
};

export default PromotionalCompanyLogo;
