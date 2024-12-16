import React, { useState } from "react";
import "./PPE_Entry.css";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import Header from "../components/Header/Header.jsx";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const drawerWidth = 240;

function AddAccount() {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0); // Track selected menu item
  const [isReportMenuOpen, setReportMenuOpen] = useState(false); // Track sub-menu visibility

  const handleListItemClick = (index, path) => {
    setSelectedIndex(index); // Update selected menu item
    navigate(path); // Navigate to the selected route
  };

  const toggleReportMenu = () => {
    setReportMenuOpen((prevOpen) => !prevOpen); // Toggle sub-menu visibility
  };

  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    middlename: "",
    suffix: "",
    email: "",
    contactNumber: "",
    username: "",
    password: "",
    role: "",
    department: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Save
  const handleSave = async () => {
    if (Object.values(formData).some((field) => !field)) {
      alert("Please fill out all fields.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Account saved successfully!");
        handleClear();
      } else {
        alert(data.message || "Failed to save account.");
      }
    } catch (error) {
      console.error("Error saving account:", error);
      alert("Error saving account. Please try again.");
    }
  };
  

  // Clear form inputs
  const handleClear = () => {
    setFormData({
      lastname: "",
      firstname: "",
      middlename: "",
      suffix: "",
      email: "",
      contactNumber: "",
      username: "",
      password: "",
      role: "",
      department: "",
    });
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "4rem",
            backgroundColor: "#FFFF",
            cursor: "pointer",
          },
        }}
      >
        <List>
          <ListItem
            button
            onClick={() => handleListItemClick(0, "/home")}
          >
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleListItemClick(1, "/ppe-entry")}
          >
            <ListItemIcon>
              <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="PPE Entry Form" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleListItemClick(2, "/inven-inspect")}
          >
            <ListItemIcon>
              <ReportIcon/>
            </ListItemIcon>
            <ListItemText primary="Inspection" />
          </ListItem>
          {/* Main Report Button */}
          <ListItem button onClick={toggleReportMenu}>
            <ListItemIcon>
              <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Records" />
            {isReportMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {/* Sub-Buttons (collapsible) */}
          <Collapse in={isReportMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                style={{ paddingLeft: 32}}
                onClick={() => handleListItemClick(5, "/par-ics")}
              >
                <ListItemIcon>
                <AssignmentIcon/>
              </ListItemIcon>
                <ListItemText primary="PAR & ICS" />
              </ListItem>
              <ListItem
                button
                style={{ paddingLeft: 32}}
                onClick={() => handleListItemClick(4, "/inventory")}
              >
              <ListItemIcon>
                <AssignmentIcon/>
              </ListItemIcon>
                <ListItemText primary="Inventory" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem
            button
            style={{ color: selectedIndex === 0 ? "#0F1D9F" : "inherit" }}
            onClick={() => handleListItemClick(4, "/account-management")}
          >
            <ListItemIcon>
              <PeopleIcon style={{ color: "#0F1D9F"}} />
            </ListItemIcon>
            <ListItemText primary="Account Management" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleListItemClick(5, "/manage-tables")}
          >
            <ListItemIcon>
              <TableChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Manage Tables" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleListItemClick(6, "/ppe-entry")}
          >
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          {/* Add other ListItems similarly */}
          <ListItem 
            button
            onClick={() => handleListItemClick(7, "/")}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: "2rem", backgroundColor: "#f5f5f5", marginTop: "4.2rem" }}>
        <Typography variant="h4" gutterBottom style={{ fontWeight: "bold", color: "#0F1D9F" }}>
          Add Account
        </Typography>
        <Typography variant="h7" gutterBottom style={{ fontWeight: "bold", color: "#0F1D9F", marginBottom: "2rem" }}>
          Account Information
        </Typography>
        <form style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "20px" }}>
          <TextField
            label="Lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            style={{ flex: "1 1 20%" }}
          />
          <TextField
            label="Firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            style={{ flex: "1 1 20%" }}
          />
          <TextField
            label="Middlename"
            name="middlename"
            value={formData.middlename}
            onChange={handleChange}
            style={{ flex: "1 1 20%" }}
          />
          <TextField
            label="Suffix"
            name="suffix"
            value={formData.suffix}
            onChange={handleChange}
            style={{ flex: "1 1 20%" }}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{ flex: "1 1 45%" }}
          />
          <TextField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            style={{ flex: "1 1 45%" }}
          />
        </form>

        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" onClick={handleClear} style={{ marginRight: "1rem" }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSave}
            style={{ backgroundColor: "#0F1D9F", color: "#fff" }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddAccount;
