import React, { useState } from "react";
import Scans from '../assets/images/scans.png';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Collapse } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
import LogoutIcon from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";
import Header from "../components/Header/Header.jsx";
import { red } from "@mui/material/colors";

const drawerWidth = 240;

const Inspection_Scanner = () => {
  const [proInvenID, setproInvenID] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const options = ['Broken', 'Irreparable', 'Good'];

  const data = [
    { Description: "MAYOR'S OFFICE", PropertyInventory: "2024-12-01", PARICS: "Completed", ExItem: "2", ItemSca: "2", ItemRem: "2", stats: "Good" },
    { Description: "ACCOUNTING", PropertyInventory: "2024-12-02", PARICS: "In Progress", ExItem: "2", ItemSca: "2", ItemRem: "2", stats: "Good" },
    { Description: "MPDO", PropertyInventory: "2024-12-03", PARICS: "Completed", ExItem: "2", ItemSca: "2", ItemRem: "2", stats: "Good" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null); // Track selected menu item
    const [isReportMenuOpen, setReportMenuOpen] = useState(false); // Track sub-menu visibility

  const navigate = useNavigate();

  const handleListItemClick = (index, path) => {
    setSelectedIndex(index);
    navigate(path);
  };

  const toggleReportMenu = () => {
    setReportMenuOpen((prev) => !prev);
  };

  const handleChange = (event) => {
    setproInvenID(event.target.value);
  }

  const selStats = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
        <Header />

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
              <HomeIcon  />
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
            onClick={() => handleListItemClick(1, "/inven-inspect")}
            style={{color: "#0F1D9F"}}
          >
            <ListItemIcon>
              <ReportIcon style={{ color: "#0F1D9F" }} />
            </ListItemIcon>
            <ListItemText primary="Inspection" />
          </ListItem>
          <ListItem button onClick={toggleReportMenu}>
            <ListItemIcon>
              <ReportIcon/>
            </ListItemIcon>
            <ListItemText primary="Records" />
            {isReportMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
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
            style={{ color: selectedIndex === 7 ? "#0F1D9F" : "inherit" }}
            onClick={() => handleListItemClick(7, "/account-management")}
          >
            <ListItemIcon>
              <PeopleIcon style={{ color: selectedIndex === 7 ? "#0F1D9F" : "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Account Management" />
          </ListItem>
          <ListItem
            button
            style={{ color: selectedIndex === 5 ? "#0F1D9F" : "inherit" }}
            onClick={() => handleListItemClick(5, "/manage-tables")}
          >
            <ListItemIcon>
              <TableChartIcon style={{ color: selectedIndex === 5 ? "#0F1D9F" : "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Manage Tables" />
          </ListItem>
          <ListItem
            button
            style={{ color: selectedIndex === 6 ? "#0F1D9F" : "inherit" }}
            onClick={() => handleListItemClick(6, "/ppe-entry")}
          >
            <ListItemIcon>
              <AccountCircleIcon style={{ color: selectedIndex === 6 ? "#0F1D9F" : "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            button
            style={{ color: selectedIndex === 8 ? "#0F1D9F" : "inherit" }}
            onClick={() => handleListItemClick(8, "/logout")}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

        <div style={{flexGrow: 1, padding: "80px 40px"}}>
            <header>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                  <h1 style={{color: "#0F1D9F"}}>Inventory Inspection</h1>
                  <img src={Scans} alt="Asset Icon"/>
                </div>
                <div style={{marginTop: 50}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                    <h4 style={{color: "#0F1D9F"}}>Description:</h4>
                    <h4 style={{color: "#000"}}></h4>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                    <h4 style={{color: "#0F1D9F", margin: 0}}>Property/Inventory Number</h4>
                    <input
                      type="text"
                      value={proInvenID}
                      onChange={handleChange}
                      placeholder=""
                      style={{
                        border: "2px solid #ccc",
                        borderRadius: "5px",
                        fontSize: "18px",
                        paddingLeft: 5
                      }}
                    />
                  </div>

                  <div style={{display: 'flex', gap: "10px"}}>
                    <h4 style={{color: "#0F1D9F"}}>PAR/ICS No.</h4>
                    <h4 style={{color: "#000"}}></h4>
                  </div>
                  
                  <div style={{display: "flex", gap: "10px", marginBottom: "10px"}}>
                    <h4 style={{color: "#0F1D9F", margin: 0 }}>Status</h4>
                    <select 
                      value={selectedStatus} 
                      onChange={selStats}
                      style={{
                        fontSize: "16px",
                        width: "150px",
                      }}
                      >
                      <option value="" disabled>
                        Filters
                      </option>
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={{display: 'flex', gap: "10px"}}>
                    <button 
                      style={{backgroundColor: 'white',
                      color: 'black',
                      border: "2px solid #0F1D9F",
                      borderWidth: "2px",
                      borderRadius: "10px"
                      }}>
                      Cancel
                    </button>
                    <button 
                      style={{
                        borderRadius: "10px"
                      }}>
                      Confirm
                    </button>
                  </div>
                    
                </div>
              </div>
            </header>

            <div style={{ marginTop: "40px", width: "100%", marginBottom: "100px"}}>
              <TableContainer component="div">
                <Table size="medium" sx={{ borderCollapse: 'collapse' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", borderBottom: '1px solid #000', borderTop: '1px solid #000', width: "14.28%", textAlign: "center", padding: "0.5em" }}>
                        Description
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", borderBottom: '1px solid #000', borderTop: '1px solid #000', width: "14.28%", textAlign: "center", padding: "0.5em" }}>
                        Property/Inventory Number
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", borderBottom: '1px solid #000', borderTop: '1px solid #000', width: "14.28%", textAlign: "center", padding: "0.5em" }}>
                        PAR/ICS No.
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", borderBottom: '1px solid #000', borderTop: '1px solid #000', width: "14.28%", textAlign: "center", padding: "0.5em" }}>
                        Expected Item
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", borderBottom: '1px solid #000', borderTop: '1px solid #000', width: "14.28%", textAlign: "center", padding: "0.5em" }}>
                        Item Scanned
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", borderBottom: '1px solid #000', borderTop: '1px solid #000', width: "14.28%", textAlign: "center", padding: "0.5em" }}>
                        Items Remaining
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", borderBottom: '1px solid #000', borderTop: '1px solid #000', width: "14.28%", textAlign: "center", padding: "0.5em" }}>
                        Staus
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ fontSize: "1rem", borderBottom: '1px solid #000', textAlign: 'center', padding: "0.5em" }}>
                        {row.Description}
                      </TableCell>
                      <TableCell sx={{ fontSize: "1rem", borderBottom: '1px solid #000', textAlign: 'center', padding: "0.5em" }}>
                        {row.PropertyInventory}
                      </TableCell>
                      <TableCell sx={{ fontSize: "1rem", borderBottom: '1px solid #000', textAlign: 'center', padding: "0.5em" }}>
                        {row.PARICS}
                      </TableCell>
                      <TableCell sx={{ fontSize: "1rem", borderBottom: '1px solid #000', textAlign: 'center', padding: "0.5em" }}>
                        {row.ExItem}
                      </TableCell>
                      <TableCell sx={{ fontSize: "1rem", borderBottom: '1px solid #000', textAlign: 'center', padding: "0.5em" }}>
                        {row.ItemSca}
                      </TableCell>
                      <TableCell sx={{ fontSize: "1rem", borderBottom: '1px solid #000', textAlign: 'center', padding: "0.5em" }}>
                        {row.ItemRem}
                      </TableCell>
                      <TableCell sx={{ fontSize: "1rem", borderBottom: '1px solid #000', textAlign: 'center', padding: "0.5em" }}>
                        {row.stats}
                      </TableCell>
                    </TableRow>
                  ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <div style={{display: 'flex', justifyContent: 'end', gap: "10px"}}>
              <button 
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  border: "2px solid #0F1D9F",
                  borderWidth: "2px",
                  borderRadius: "10px"
                }}>
                Cancel
              </button>
              <button
                style={{
                  borderRadius: "10px"
                }}>
                Save
              </button>
            </div>
        </div>

    </div>
  )
}

export default Inspection_Scanner;