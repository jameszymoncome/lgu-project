import React, { useState } from "react";
import "./PPE_Entry.css"; // Import custom styles here, if necessary
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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
import LogoutIcon from "@mui/icons-material/Logout";
import Header from "../components/Header/Header.jsx";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import axios from "axios"; // Import Axios for API calls

const drawerWidth = 240;

function PPE_Entry() {
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

  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    entityName: "",
    fundCluster: "",
    department: "",
    description: "",
    dateAcquired: "",
    quantity: "",
    unit: "",
    unitCost: "",
    totalCost: "",
  });

  const departments = [
    "GSO",
    "MAYOR'S OFFICE",
    "ACCOUNTING",
    "ENGINEERING",
    "MPDO",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      // Dynamically calculate total cost if both quantity and unit cost are provided
      totalCost:
        name === "quantity" || name === "unitCost"
          ? (name === "quantity" ? parseFloat(value || 0) : parseFloat(prevData.quantity || 0)) *
            (name === "unitCost" ? parseFloat(value || 0) : parseFloat(prevData.unitCost || 0))
          : prevData.totalCost,
    }));
  };

  // State to control whether fields are disabled
  const [fieldsDisabled, setFieldsDisabled] = useState(false);

  // Add an item to the table
  const handleAddItem = () => {
    if (Object.values(formData).some((field) => !field)) {
        alert("Please fill out all fields.");
        return;
    }

    // Add the current form data to entries
    setEntries([...entries, formData]);

    // Clear the form after adding
    handleClear(); 

    setFieldsDisabled(true);
};

// Clear form inputs except for entityName, fundCluster, and department
const handleClear = () => {
    setFormData((prevData) => ({
        ...prevData,
        description: "",
        dateAcquired: "",
        quantity: "",
        unit: "",
        unitCost: "",
        totalCost: "", // Reset total cost
    }));
};

const handleClearAll = () => {
  setFormData({
    entityName: "",
    fundCluster: "",
    department: "",
    description: "",
    dateAcquired: "",
    quantity: "",
    unit: "",
    unitCost: "",
    totalCost: "",
  });
};

const handleSave = async () => {
    if (entries.length === 0) {
        alert("No entries to save.");
        return;
    }

    try {
        const response = await axios.post("http://localhost:5000/ppe-entries", entries);
        alert(response.data.message); // Show success message
        setEntries([]); // Clear entries after saving
        setFieldsDisabled(false);
        handleClearAll(); // Clear form inputs
    } catch (error) {
        console.error("Error saving entries:", error.response.data); // Log detailed error response
        alert("There was an error saving the entries.");
    }
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
            style={{ color: selectedIndex === 0 ? "#0F1D9F" : "inherit" }}
            onClick={() => handleListItemClick(1, "/ppe-entry")}
          >
            <ListItemIcon>
              <AssignmentIcon style={{ color: "#0F1D9F"}} />
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
            onClick={() => handleListItemClick(4, "/account-management")}
          >
            <ListItemIcon>
              <PeopleIcon/>
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
            onClick={() => handleListItemClick(6, "/profile")}
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
      <div style={{ flexGrow: 1, padding: "2rem", marginTop: "2.5rem", color: "#0F1D9F" }}>
        <Typography variant="h4" gutterBottom style={{color: "#0F1D9F", fontWeight: "bold"}}>
          PPE Entry Form
        </Typography>
        <Typography className="view-record" variant="subtitle1" gutterBottom style={{color: "#0F1D9F"}}>
          Record of Property or Equipment Issued
          <Button variant="contained" onClick={""} style={{background: "#0F1D9F"}}  startIcon={<VisibilityIcon />}>
              View Record
            </Button>
        </Typography>
        <form style={{ marginBottom: "2rem", color: "#0F1D9F"}}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", color: "#0F1D9F" }}>
            <TextField
              label="Entity Name"
              name="entityName"
              value={formData.entityName}
              onChange={handleChange}
              required
              disabled={fieldsDisabled}
            />
            <TextField
              label="Fund Cluster"
              name="fundCluster"
              value={formData.fundCluster}
              onChange={handleChange}
              required
              disabled={fieldsDisabled}
            />
            <FormControl style={{ flex: "1 1 45%" }} disabled={fieldsDisabled}>
            <InputLabel>Department</InputLabel>
            <Select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              {departments.map((dept) => (
                <MenuItem key={dept} value={dept}>
                  {dept}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              type="date"
              label="Date Acquired"
              name="dateAcquired"
              value={formData.dateAcquired}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              type="number"
              label="Quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
            <TextField
              label="Unit"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              required
            />
            <TextField
              type="number"
              label="Unit Cost"
              name="unitCost"
              value={formData.unitCost}
              onChange={handleChange}
              required
            />
            <TextField
              label="Total Cost"
              name="totalCost"
              value={formData.totalCost}
              InputProps={{ readOnly: true }}
            />
          </div>
          <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleAddItem} style={{background: "#0F1D9F"}}>
              + Add Item
            </Button>
            <Button
              variant="outlined"
              color="#0F1D9F"
              onClick={handleClear}
              style={{ marginLeft: "1rem" }}
            >
              Clear
            </Button>
          </div>
        </form>
        <TableContainer component={Paper}>
          <Table style={{color: "#0F1D9F"}}>
            <TableHead>
              <TableRow >
                <TableCell style={{color: "#0F1D9F", fontWeight: "bold"}}>Quantity</TableCell>
                <TableCell style={{color: "#0F1D9F", fontWeight: "bold"}}>Unit</TableCell>
                <TableCell style={{color: "#0F1D9F", fontWeight: "bold"}}>Description</TableCell>
                <TableCell style={{color: "#0F1D9F", fontWeight: "bold"}}>Date Acquired</TableCell>
                <TableCell style={{color: "#0F1D9F", fontWeight: "bold"}}>Unit Cost</TableCell>
                <TableCell style={{color: "#0F1D9F", fontWeight: "bold"}}>Total Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell style={{color: "#0F1D9F"}}>{entry.quantity}</TableCell>
                  <TableCell style={{color: "#0F1D9F"}}>{entry.unit}</TableCell>
                  <TableCell style={{color: "#0F1D9F"}}>{entry.description}</TableCell>
                  <TableCell style={{color: "#0F1D9F"}}>{entry.dateAcquired}</TableCell>
                  <TableCell style={{color: "#0F1D9F"}}>{entry.unitCost}</TableCell>
                  <TableCell style={{color: "#0F1D9F"}}>{entry.totalCost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Buttons below the table */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24rem" }}>
          <Button 
            variant="outlined" 
            color="#0F1D9F"
            onClick={handleClear} 
            style={{ marginRight: "1rem" }}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSave} 
            style={{background: "#0F1D9F"}}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PPE_Entry;
