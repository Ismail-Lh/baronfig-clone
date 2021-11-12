import { Layout } from '@components';
import {
  FeaturedTools,
  Hero,
  ProductsCategoriesSection,
  Promotional,
} from '@sections';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Promotional />
      <ProductsCategoriesSection />
      <FeaturedTools />
    </Layout>
  );
};

export default Home;
