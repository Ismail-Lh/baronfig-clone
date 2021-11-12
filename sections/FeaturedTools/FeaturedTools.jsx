import { ProductsCategoriesCard } from '@components';
import { featuredToolsCardContent } from '@utils/constants';
import {
  Wrapper,
  Title,
  Container,
  CardsContainer,
} from './FeaturedToolsStyles';

const FeaturedTools = () => {
  return (
    <Wrapper>
      <Container className='container'>
        <Title>Featured Tools</Title>
        <CardsContainer>
          {featuredToolsCardContent.map(props => (
            <ProductsCategoriesCard key={props.id} {...props} featuredSection />
          ))}
        </CardsContainer>
      </Container>
    </Wrapper>
  );
};

export default FeaturedTools;
