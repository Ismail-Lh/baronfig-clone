import { Layout } from '@components';
import { Hero, ProductsCategoriesSection, Promotional } from '@sections';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Promotional />
      <ProductsCategoriesSection />
    </Layout>
  );
};

export default Home;
