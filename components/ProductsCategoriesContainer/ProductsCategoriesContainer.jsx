import { Button } from '@components';
import Image from 'next/image';

import {
  Container,
  TextContent,
  Title,
  Subtitle,
  ImageContainer,
} from './ProductsCategoriesContainerStyles';

const ProductsCategoriesContainer = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  imgHeight,
  imgWidth,
  link,
  route,
  alignSelf,
}) => {
  return (
    <Container>
      <TextContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>

        <Button link={link} route={route} secondary />
      </TextContent>

      <ImageContainer
        style={{
          position: 'relative',
          height: 'auto',
          width: '100%',
          alignSelf: `${alignSelf}`,
        }}>
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

export default ProductsCategoriesContainer;
