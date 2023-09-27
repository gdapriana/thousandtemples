import Slider from "../components/globals/Slider.jsx";
import Article from "../components/globals/Article.jsx";

const ActivityPage = ({ activities, activityCategories }) => {
  return (
    <main className="w-full flex pt-20 justify-center flex-col items-start">
      <Slider data={activities} />
      <Article data={activities} categories={activityCategories} />
    </main>
  );
};

export default ActivityPage;
