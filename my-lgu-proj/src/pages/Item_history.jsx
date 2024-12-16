import React from "react";
import "./Item_history.css";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Header from "../components/Header/Header.jsx";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/system";




const drawerWidth = 240;


const TextInput = () => {
    return (
      <div className="input-container">
        {/* First Input */}
        <div className="input-group">
          <label htmlFor="description" className="label">
            Description:
          </label>
          <input
            type="text"
            id="description"
            className="text-input"
            placeholder="Enter description "
            style={{ width: "53%" }}
          />
        </div>
 
        {/* Second Input */}
        <div className="input-group">
          <label htmlFor="par/ics no." className="label">
            PAR/ICS No.:
          </label>
          <input
            type="text"
            id="par/ics no."
            className="text-input"
            placeholder="Enter PAR/ICS no."
            style={{ width: "63%" }}
          />
        </div>
 
        {/* Third Input */}
        <div className="input-group">
          <label htmlFor="date acquired" className="label">
            Date Acquired:
          </label>
          <input
            type="text"
            id="date acquired"
            className="text-input"
            placeholder="Enter date acquired"
            style={{ width: "50%" }}
          />
        </div>
 
        {/* Fourth Input */}
        <div className="input-group">
          <label htmlFor="property/inventory no." className="label">
            Property/Inventory No.:
          </label>
          <input
            type="text"
            id="property/inventory no."
            className="text-input"
            placeholder="Enter property/inventory no."
            style={{ width: "50%" }}
          />
        </div>
      </div>
    );
  };


  const StyledTableCell = styled(TableCell)(({ isHeader }) => ({
    fontWeight: isHeader ? "bold" : "normal",
    fontSize: isHeader ? "16px" : "14px",
    color: isHeader ? "#0f1d9f" : "#333333",
    textAlign: "center",
    padding: "10px 16px",
    borderBottom: isHeader ? "2px solid #979797" : "none",
    borderLeft: "none",
    borderRight: "none",
  }));
 
  const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    marginTop: "10px",
    marginLeft: "30px",
    marginRight: "20px",
    width: "100%",
    maxWidth: "1130px",
    overflowY: "auto",
    borderRadius: "10px",
    border: "1px solid #979797",
  }));
 
function Item_history() {
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
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
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
          <ListItem button style={{ background: "#E4E7F5", color: "#0F1D9F" }}>
            <ListItemIcon>
              <ReportIcon style={{ color: "#0F1D9F" }} />
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
      <div
        style={{
          flexGrow: 1,
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div className="header-container">
          <h1>Item History</h1>
          <p className="text">
            Generate and View Inventory, Issuance, Inspections, and Status
            Reports
          </p>
        </div>
        <TextInput/>


        <StyledTableContainer component={Paper}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <StyledTableCell isHeader={true}>Date</StyledTableCell>
            <StyledTableCell isHeader={true}>Unit</StyledTableCell>
            <StyledTableCell isHeader={true}>Original Quantity</StyledTableCell>
            <StyledTableCell isHeader={true}>Counted Quantity</StyledTableCell>
            <StyledTableCell isHeader={true}>Status</StyledTableCell>
            <StyledTableCell isHeader={true}>Remarks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell>12/13/9</StyledTableCell>
            <StyledTableCell>098</StyledTableCell>
            <StyledTableCell>9</StyledTableCell>
            <StyledTableCell>8</StyledTableCell>
            <StyledTableCell>Broken</StyledTableCell>
            <StyledTableCell>4567890</StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
      </div>
    </div>
  );
}


export default Item_history;