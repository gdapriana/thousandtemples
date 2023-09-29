import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import HomePage from "./pages/HomePage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";
import Header from "./components/globals/Header.jsx";

// TODO: import data
import destinations from "./data/destinations.json";
import activities from "./data/activities.json";
import activityCategories from "./data/activitycategories.json";
import destinationCategories from "./data/destinationcategories.json";
import navigations from "./data/navigations.json";
import Footer from "./components/globals/Footer.jsx";
import { useState, useEffect } from "react";

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  return (
    <>
      <Header navigations={navigations} />
      <Router>
        <Routes>
          <Route
            path={"/"}
            element={
              <HomePage
                destinations={destinations}
                categories={destinationCategories}
              />
            }
          />
          <Route
            path={"/destinations"}
            element={
              <DestinationPage
                destinations={destinations}
                destinationCategories={destinationCategories}
              />
            }
          />
          <Route
            path={"/activities"}
            element={
              <ActivityPage
                activities={activities}
                activityCategories={activityCategories}
              />
            }
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
