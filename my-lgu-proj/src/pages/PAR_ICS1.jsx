import React, { useState } from "react";
import "./PAR_ICS1.css";
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TextField, MenuItem, Select, InputLabel, FormControl, Button, Dialog, DialogTitle, DialogContent, DialogActions
} from "@mui/material";
import Header from "../components/Header/Header.jsx";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { color, styled } from "@mui/system";


const drawerWidth = 240;


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


const StyledTableDataCell = styled(TableCell)(({ theme, isHeader }) => ({
  fontWeight: isHeader ? "bold" : "normal",
  fontSize: isHeader ? "16px" : "14px",
  color: isHeader ? "#0f1d9f" : "#333333",
  textAlign: "center",
  padding: "10px 16px",
  borderBottom: isHeader ? "2px solid #979797" : "none",  
  borderLeft: "none",  
  borderRight: "none",  
}));




function PAR_ICS1() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [calendarVisible, setCalendarVisible] = useState(false);


  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleDropdownChange1 = (event) => setSelectedOption1(event.target.value);
  const handleDropdownChange2 = (event) => setSelectedOption2(event.target.value);
  const toggleCalendar = () => setCalendarVisible((prev) => !prev);
  const closeCalendar = () => setCalendarVisible(false);


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


      {/* Main Content */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          overflowX: "hidden",
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


        <div
          className="search-dropdown-container"
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
            style={{
              maxWidth: "712px",
            }}
            InputProps={{
              startAdornment: <SearchIcon className="search-icon" />,
            }}
          />


          <FormControl
            variant="outlined"
            className="dropdown"
            style={{
              maxWidth: "160px",
            }}
          >
            <InputLabel>Form</InputLabel>
            <Select
              value={selectedOption1}
              onChange={handleDropdownChange1}
              label="Form"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="optionA">Property Acknowledgement Receipt(PAR)</MenuItem>
              <MenuItem value="optionB">Inventory Custodian Slip (ICS)</MenuItem>
            </Select>
          </FormControl>


          <FormControl
            variant="outlined"
            className="dropdown"
            style={{
              maxWidth: "160px",
            }}
          >
            <InputLabel>Department</InputLabel>
            <Select
              value={selectedOption2}
              onChange={handleDropdownChange2}
              label="Department"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="optionC">General Service Office (GSO)</MenuItem>
              <MenuItem value="optionD">MDRRMO</MenuItem>
            </Select>
          </FormControl>


          <Button
            variant="contained"
            color="white"
            onClick={toggleCalendar}
            style={{
              height: "56px",
              color:"white",
              backgroundColor: "#0F1D9F"
            }}
          >
            <CalendarTodayIcon />
          </Button>
        </div>


        <Dialog open={calendarVisible} onClose={closeCalendar} fullWidth maxWidth="sm">
          <DialogTitle>Calendar</DialogTitle>
          <DialogContent>
            <p> Date Range Picker</p>
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              style={{ marginBottom: "10px" }}
            />
            <TextField
              label="End Date"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeCalendar} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                closeCalendar();
              }}
              color="primary"
            >
              Apply
            </Button>
          </DialogActions>
        </Dialog>


        <StyledTableContainer component={Paper}>
          <Table size="medium">
            <TableHead>
            <TableRow>
  <StyledTableDataCell isHeader={true}>ID No.</StyledTableDataCell>
  <StyledTableDataCell isHeader={true}>Entity No.</StyledTableDataCell>
  <StyledTableDataCell isHeader={true}>Fund Cluster</StyledTableDataCell>
  <StyledTableDataCell isHeader={true}>Date</StyledTableDataCell>
  <StyledTableDataCell isHeader={true}>Status</StyledTableDataCell>
  <StyledTableDataCell isHeader={true}>Action</StyledTableDataCell>
</TableRow>


            </TableHead>
            <TableBody>
              <TableRow>
              <StyledTableDataCell>19128</StyledTableDataCell>
                <StyledTableDataCell>987678</StyledTableDataCell>
                <StyledTableDataCell>Angeolo</StyledTableDataCell>
                <StyledTableDataCell>12/09/01</StyledTableDataCell>
                <StyledTableDataCell>Pending</StyledTableDataCell>
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