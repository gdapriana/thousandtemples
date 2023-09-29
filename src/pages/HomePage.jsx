import Hero from "../components/homepage/Hero";
import PopularSearch from "../components/homepage/PopularSearch";
import Destination from "../components/homepage/Destination.jsx";

const HomePage = ({ destinations, categories }) => {
  return (
    <>
      <Hero />
      <PopularSearch destinations={destinations} />
      <Destination destinations={destinations} />
    </>
  );
};

export default HomePage;
