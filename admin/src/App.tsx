import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "@/pages/login.tsx";
import Layout from "@/pages/dashboard/layout.tsx";
import Dashboard from "@/pages/dashboard/dashboard.tsx";
import Destination from "@/pages/dashboard/destination.tsx";
import Activity from "@/pages/dashboard/activity.tsx";
import Category from "@/pages/dashboard/category.tsx";
import District from "@/pages/dashboard/district.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/activities" element={<Activity />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/districts" element={<District />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
