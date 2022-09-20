import HeroSection from "./components/HeroSection";
import FeatureProducts from "./components/FeatureProdcut";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "thapa Store",
  };
  return (
    <>
      <HeroSection myData={data} />;
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
