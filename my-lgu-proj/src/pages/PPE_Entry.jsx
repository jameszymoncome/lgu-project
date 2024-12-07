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

function PPE_Entry(){
    return(
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
              <ListItem>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button style={{background: "#E4E7F5", color: "#0F1D9F"}}>
                <ListItemIcon >
                  <AssignmentIcon style={{color: "#0F1D9F"}} />
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
        </div>
    );
}

export default PPE_Entry;