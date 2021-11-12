import {
  ProductsCategoriesCard,
  ProductsCategoriesSectionHead,
} from '@components';
import { productsCategoriesSectionContent } from '@utils/constants';
import { Wrapper, Container } from './ProductsCategoriesSectionStyles';

const ProductsCategoriesSection = () => {
  return (
    <Wrapper>
      <Container className='container'>
        <ProductsCategoriesSectionHead />
        {productsCategoriesSectionContent.map(props => (
          <ProductsCategoriesCard key={props.id} {...props} categorySection />
        ))}
      </Container>
    </Wrapper>
  );
};

export default ProductsCategoriesSection;
