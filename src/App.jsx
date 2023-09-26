import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/destinations"} element={<DestinationPage />} />
        <Route path={"/activities"} element={<ActivityPage />} />
        <Route path={"*"} element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
  );
};
export default App;
