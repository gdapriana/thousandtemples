import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import HomePage from "./pages/HomePage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";
import Header from "./components/globals/Header.jsx";

// TODO: import data
import destinations from "./data/destinations.json";
import activities from "./data/activities.json";
import categories from "./data/categories.json";
import navigations from "./data/navigations.json";
import Footer from "./components/globals/Footer.jsx";

const App = () => {
  return (
    <>
      <Header navigations={navigations} />
      <Router>
        <Routes>
          <Route
            path={"/"}
            element={
              <HomePage destinations={destinations} categories={categories} />
            }
          />
          <Route
            path={"/destinations"}
            element={<DestinationPage destinations={destinations} />}
          />
          <Route
            path={"/activities"}
            element={<ActivityPage activities={activities} />}
          />
          <Route
            path={"*"}
            element={
              <main className="w-full bg-white h-screen flex flex-col justify-center items-center font-bold">
                <ExclamationTriangleIcon className="w-10 h-10" />
                <span className="text-2xl text-neutral-700">
                  Page not found
                </span>
              </main>
            }
          />
        </Routes>
      </Router>
      <Footer navigations={navigations} />
    </>
  );
};
export default App;
