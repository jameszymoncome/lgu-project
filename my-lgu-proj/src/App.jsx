import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home.jsx';
import PPE_Entry from './pages/PPE_Entry.jsx';
import Login from './features/Auth/Login.jsx';
import AccountManagement from "./pages/AccountManagement.jsx";
import Inven_Inspect from "./pages/Inven_Inspect.jsx";
import Inventory_report1 from "./pages/InventoryReport.jsx";
import ManageTables from "./pages/ManageTables.jsx";
import AddAccount from "./pages/AddAccount.jsx";

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
        <Route path="/manage-tables" element={<ManageTables />} />
        <Route path="/add-account" element={<AddAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
