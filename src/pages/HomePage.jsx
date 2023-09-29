import Hero from "../components/homepage/Hero";
import PopularSearch from "../components/homepage/PopularSearch";

const HomePage = ({destinations, categories}) => {
  return (
    <>
      <Hero />
      <PopularSearch destinations={destinations} />
    </>
  ) ;
};

export default HomePage;
