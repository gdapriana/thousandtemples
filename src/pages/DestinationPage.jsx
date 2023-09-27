import Slider from "../components/globals/Slider.jsx";
import Article from "../components/globals/Article.jsx";

const DestinationPage = ({ destinations, destinationCategories }) => {
  return (
    <main className="w-full flex pt-20 justify-center flex-col items-start">
      <Slider data={destinations} />
      <Article data={destinations} categories={destinationCategories} />
    </main>
  );
};

export default DestinationPage;
