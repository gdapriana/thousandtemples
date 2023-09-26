import Slider from "../components/globals/Slider.jsx";

const ActivityPage = ({ activities }) => {
  return (
    <main className="w-full flex pt-20 justify-center flex-col items-start">
      <Slider data={activities} />
    </main>
  );
};

export default ActivityPage;
