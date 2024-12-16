import React, { useState } from "react"; 
import "./PAR_ICS1.css"; 
import { 
  Drawer, List, ListItem, ListItemIcon, ListItemText, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper 
} from "@mui/material";
import Header from "../components/Header/Header.jsx"; 
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
import LogoutIcon from "@mui/icons-material/Logout";
import { TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const drawerWidth = 240;

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: "10px",
  marginLeft: "35px", 
  marginRight: "20px",
  width: "100%",
  maxWidth: "1130px",
  overflowY: "auto",
}));

const StyledTableDataCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "16px",
  color: "#0f1d9f", 
  borderBottom: "2px solid #979797",
  textAlign: "center",
}));

function PAR_ICS1() {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedOption, setSelectedOption] = useState(""); 

  // Handlers
  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleDropdownChange = (event) => setSelectedOption(event.target.value);

  return (
    <div style={{ display: "flex" }}>
      {/* Header */}
      <Header />
      
      {/* Sidebar/Drawer */}
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
          },
        }}
      >
        <List>
          {[
            { text: "Home", icon: <HomeIcon /> },
            { text: "PPE Entry Form", icon: <AssignmentIcon /> },
            { text: "Inspection", icon: <ReportIcon /> },
            { text: "Report", icon: <ReportIcon />, style: { background: "#E4E7F5", color: "#0F1D9F" } },
            { text: "Account Management", icon: <AccountCircleIcon /> },
            { text: "Manage Tables", icon: <TableChartIcon /> },
            { text: "Profile", icon: <AccountCircleIcon /> },
            { text: "Logout", icon: <LogoutIcon /> },
          ].map((item, index) => (
            <ListItem button key={index} style={item.style || {}}>
              <ListItemIcon style={item.style?.color ? { color: item.style.color } : {}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto", // Enables vertical scrolling
          overflowX: "hidden", // Prevents horizontal scrolling
          height: "100vh",
          width: "100%", 
          maxWidth: "1200px",
          margin: "0 auto", 
          padding: "10px", 
        }}
      >
        <div className="header-container">
          <h1>PAR and ICS Report</h1>
          <p className="text">Generate and View Inventory, Issuance, Inspections, and Status Reports</p>
        </div>

        <div className="search-dropdown-container">
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
            InputProps={{
              startAdornment: <SearchIcon className="search-icon" />,
            }}
          />
          <FormControl variant="outlined" className="dropdown">
            <InputLabel>Options</InputLabel>
            <Select
              value={selectedOption}
              onChange={handleDropdownChange}
              label="Options"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="option">Inventory Custodian Slip (ICS)</MenuItem>
              <MenuItem value="option1">Property Acknowledgement Receipt (PAR)</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Table Section */}
        <StyledTableContainer component={Paper}>
          <Table size="medium">
            <TableHead>
            <TableRow>
          <StyledTableDataCell>ID No.</StyledTableDataCell>
          <StyledTableDataCell>Entity No.</StyledTableDataCell>
          <StyledTableDataCell>Fund Cluster</StyledTableDataCell>
          <StyledTableDataCell>Date</StyledTableDataCell>
          <StyledTableDataCell>Status</StyledTableDataCell>
          <StyledTableDataCell>Action</StyledTableDataCell>
        </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {Array(5).fill("-").map((cell, index) => (
                  <StyledTableDataCell key={index}>{cell}</StyledTableDataCell>
                ))}
                <StyledTableDataCell>
                  <button
                    style={{
                      backgroundColor: "#0F1D9F",
                      color: "white",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                    onClick={() => alert("View button clicked!")}
                  >
                    View
                  </button>
                </StyledTableDataCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
      </div>
    </div>
  );
}

export default PAR_ICS1;