import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from '@react-hook/media-query';

import { Wrapper, FlexContainer, FlexItem } from './PromotionalStyles';
import { PromotionalCompanyLogo } from '@components';
import { promotionalLogos } from '@utils/constants';

const Promotional = () => {
  const matchesMedia = useMediaQuery('only screen and (max-width: 1200px)');

  const responsive = {
    laptopL: {
      breakpoint: { max: 1200, min: 950 },
      items: 3,
    },
    laptopS: {
      breakpoint: { max: 950, min: 850 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper className='container'>
      {!matchesMedia ? (
        <FlexContainer>
          {promotionalLogos.map(props => (
            <PromotionalCompanyLogo key={props.id} {...props} />
          ))}
        </FlexContainer>
      ) : (
        <Carousel
          ssr={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          swipeable={false}
          draggable={false}
          removeArrowOnDeviceType={['tablet', 'laptopL', 'laptopS']}>
          {promotionalLogos.map(props => (
            <PromotionalCompanyLogo key={props.id} {...props} />
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};

export default Promotional;
