import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home.jsx';
import PPE_Entry from './pages/PPE_Entry.jsx';
import Login from './features/Auth/Login.jsx';
import AccountManagement from "./pages/AccountManagement.jsx";
import Inven_Inspect from "./pages/Inven_Inspect.jsx";
import Inventory_report1 from "./pages/Inventory_report1.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the default route to /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Define routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ppe-entry" element={<PPE_Entry />} />
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/inven-inspect" element={<Inven_Inspect />} />
        <Route path="/inventory" element={<Inventory_report1 />} />
      </Routes>
    </Router>
  );
}

export default App;
