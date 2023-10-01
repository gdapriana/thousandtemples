import Hero from "../components/homepage/Hero";
import PopularSearch from "../components/homepage/PopularSearch";
import Destination from "../components/homepage/Destination.jsx";
import Activity from "../components/homepage/Activity.jsx";

const HomePage = ({ destinations, activities }) => {
  return (
    <>
      <Hero />
      <PopularSearch destinations={destinations} />
      <Destination destinations={destinations} />
      <Activity activities={activities} />
    </>
  );
};

export default HomePage;
