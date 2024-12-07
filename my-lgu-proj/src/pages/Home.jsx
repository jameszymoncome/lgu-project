import React, { useState } from "react";
import "./Home.css"; // Import your custom styles here
import Icon from '../assets/images/sample_icon.png';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
import LogoutIcon from "@mui/icons-material/Logout";
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

const drawerWidth = 240;

function Home() {
    const [selectedIndex, setSelectedIndex] = useState(0); // Track the selected menu item

    const handleListItemClick = (index) => {
        setSelectedIndex(index); // Update selected menu item
    };
    return (
        <div style={{ display: "flex" }}>
          {/* Header */}
          <Header />
    
          {/* Sidebar using Drawer */}
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
              <ListItem button style={{background: "#E4E7F5", color: "#0F1D9F"}}>
                <ListItemIcon>
                  <HomeIcon style={{color: "#0F1D9F"}} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="PPE Entry Form" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Inspection" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Report" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Account Management" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Tables" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
    
          {/* Main Content */}
          <div
            style={{
              flexGrow: 1,
              padding: "80px 20px", // Add top padding to account for the AppBar
            }}
          >
            <header>
              <h1>Hello, Admin!</h1>
              <input type="search" placeholder="Search" className="search-bar" />
            </header>
    
            {/* Summary Cards */}
            <div className="summary-cards">
              <div className="card">
                <img src={Icon} alt="Asset Icon" />
                <p>Total No. of Assets</p>
              </div>
              <div className="card">
                <img src={Icon} alt="Issued Icon" />
                <p>Total Issued Items</p>
              </div>
              <div className="card">
                <img src={Icon} alt="Inspection Icon" />
                <p>Items Due for Inspection</p>
              </div>
              <div className="card">
                <img src={Icon} alt="Maintenance Icon" />
                <p>Items in Need of Maintenance</p>
              </div>
            </div>
    
            {/* Buttons and Recent Activity */}
            <div className="actions-activity">
              <div className="buttons" style={{marginTop: "20px"}}>
                <button className="add-item">+ Add Item</button>
                <button className="request-item">Requested Item</button>
                <button className="scan-item">Scan</button>
              </div>
              <div className="recent-activity">
                <h2>Recent Activity</h2>
                <TableContainer
                    component={Paper}
                    style={{
                    marginTop: "20px",
                    width: "100%",
                    maxWidth: "1200px",
                    height: "500px", // Fixed height
                    margin: "0 auto",
                    }}
                >
                    <Table size="medium">
                    <TableHead>
                        <TableRow>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", width: "500px" }}>
                            Activity
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", width: "500px" }}>
                            Status
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", width: "500px" }}>
                            Date
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem", width: "500px" }}>
                            Details
                        </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow sx={{ height: "80px" }}>
                        <TableCell sx={{ fontSize: "1rem" }}>Asset Added</TableCell>
                        <TableCell sx={{ fontSize: "1rem" }}>Completed</TableCell>
                        <TableCell sx={{ fontSize: "1rem" }}>2024-12-01</TableCell>
                        <TableCell sx={{ fontSize: "1rem" }}>Asset ID: 12345</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
                </div>

            </div>
          </div>
        </div>
      );
}

export default Home;
