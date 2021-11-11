import {
  ProductsCategoriesContainer,
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
          <ProductsCategoriesContainer key={props.id} {...props} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default ProductsCategoriesSection;
