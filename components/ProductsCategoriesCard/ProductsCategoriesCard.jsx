import { Button } from '@components';
import Image from 'next/image';

import {
  Container,
  TextContent,
  Title,
  Subtitle,
  ImageContainer,
} from './ProductsCategoriesCardStyles';

const ProductsCategoriesCard = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  imgHeight,
  imgWidth,
  link,
  route,
  alignSelf,
  categorySection,
  featuredSection,
}) => {
  return (
    <Container
      categorySection={categorySection}
      featuredSection={featuredSection}>
      <TextContent
        categorySection={categorySection}
        featuredSection={featuredSection}>
        <Title
          categorySection={categorySection}
          featuredSection={featuredSection}>
          {title}
        </Title>
        <Subtitle
          categorySection={categorySection}
          featuredSection={featuredSection}>
          {subtitle}
        </Subtitle>

        <Button link={link} route={route} secondary />
      </TextContent>

      <ImageContainer
        style={{
          position: 'relative',
          height: `${imgHeight}`,
          width: `${imgWidth}`,
          alignSelf: `${alignSelf}`,
        }}
        categorySection={categorySection}
        featuredSection={featuredSection}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          layout='responsive'
        />
      </ImageContainer>
    </Container>
  );
};

export default ProductsCategoriesCard;
