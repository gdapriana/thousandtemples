import Slider from "../components/globals/Slider.jsx";

const DestinationPage = ({ destinations }) => {
  return (
    <main className="w-full flex pt-20 justify-center flex-col items-start">
      <Slider data={destinations} />
    </main>
  );
};

export default DestinationPage;
