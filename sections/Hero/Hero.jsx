import { Button } from '@components';
import Image from 'next/image';
import { Wrapper, Overlay, Content, Title } from './HeroStyles';

const Hero = () => {
  return (
    <Wrapper>
      <div style={{ position: 'relative', height: '100%' }}>
        <Image src='/assets/hero-bg.jpg' alt='hero-bg' layout='fill' priority />
      </div>
      <Overlay />

      <Content>
        <Title>Tools for Thinking</Title>
        <Button route='shop' link='Shop now' primary />
      </Content>
    </Wrapper>
  );
};

export default Hero;
