import React, { useState } from "react";
import "./PAR_ICS1.css";
import {
  Drawer,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
import Header from "../components/Header/Header.jsx";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import TableChartIcon from "@mui/icons-material/TableChart";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

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

const StyledTableDataCell = styled(TableCell)(({ isHeader }) => ({
  fontWeight: isHeader ? "bold" : "normal",
  fontSize: isHeader ? "16px" : "14px",
  color: isHeader ? "#0f1d9f" : "#333333",
  textAlign: "center",
  padding: "10px 16px",
  borderBottom: isHeader ? "2px solid #979797" : "none",
}));

function PAR_ICS1() {
  const navigate = useNavigate();
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isReportMenuOpen, setReportMenuOpen] = useState(true);
  
  const handleListItemClick = (index, path) => {
    setSelectedIndex(index);
    navigate(path);
  };

  const toggleReportMenu = () => {
    setReportMenuOpen((prevOpen) => !prevOpen);
  };

  const handleViewClick = () => {
    navigate("/par-ics2");
  }

  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const [selectedOption1, setSelectedOption1] = useState("");
  
  const handleDropdownChange1 = (event) => setSelectedOption1(event.target.value);

  const [selectedOption2, setSelectedOption2] = useState("");
  
  const handleDropdownChange2 = (event) => setSelectedOption2(event.target.value);

  const [calendarVisible, setCalendarVisible] = useState(false);
  
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
            cursor: "pointer",
          },
        }}
      >
        <List>
          <ListItem button onClick={() => handleListItemClick(0, "/home")}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleListItemClick(1, "/ppe-entry")}>
            <ListItemIcon><AssignmentIcon /></ListItemIcon>
            <ListItemText primary="PPE Entry Form" />
          </ListItem>
          <ListItem button onClick={() => handleListItemClick(2, "/inven-inspect")}>
            <ListItemIcon><ReportIcon /></ListItemIcon>
            <ListItemText primary="Inspection" />
          </ListItem>
          {/* Main Report Button */}
          <ListItem button onClick={toggleReportMenu}>
            <ListItemIcon><ReportIcon /></ListItemIcon>
            <ListItemText primary="Records" />
            {isReportMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {/* Sub-Buttons (collapsible) */}
          <Collapse in={isReportMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                style={{ paddingLeft: 32, color: "#0F1D9F"}}
                onClick={() => handleListItemClick(5, "/par-ics")}
              >
                <ListItemIcon style={{ color:"#0F1D9F"}} >
                <AssignmentIcon/>
              </ListItemIcon>
                <ListItemText primary="PAR & ICS" />
              </ListItem>
              <ListItem
                button
                style={{ paddingLeft: 32}}
                onClick={() => handleListItemClick(4, "/inventory")}
              >
              <ListItemIcon >
                <AssignmentIcon/>
              </ListItemIcon>
                <ListItemText primary="Inventory" />
              </ListItem>
            </List>
          </Collapse>
          {/* Additional List Items */}
          {/* Example for Account Management */}
          <ListItem button onClick={() => handleListItemClick(4, "/account-management")} style={{ color: selectedIndex === 4 ? "#0F1D9F" : "inherit" }}>
            <ListItemIcon><PeopleIcon/></ListItemIcon>
            <ListItemText primary="Account Management" />
          </ListItem>
          {/* Manage Tables and Profile */}
          <ListItem button onClick={() => handleListItemClick(5, "/manage-tables")}>
            <ListItemIcon><TableChartIcon /></ListItemIcon>
            <ListItemText primary="Manage Tables" />
          </ListItem>
          <ListItem button onClick={() => handleListItemClick(6, "/profile")}>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          {/* Logout Button */}
          <ListItem button onClick={() => handleListItemClick(7, "/")}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        overflowX: "hidden",
        height: "100vh",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "10px"
      }}>
        {/* Header Container */}
        <div className="header-container">
          <h1>PAR and ICS Records</h1>
          <p className="text">Generate and View Inventory, Issuance, Inspections, and Status Reports</p>
        </div>

        {/* Search and Dropdowns */}
        <div className="search-dropdown-container"
             style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px", }}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
            style={{ maxWidth: "712px", }}
            InputProps={{
              startAdornment: <SearchIcon className="search-icon" />,
            }}
          />
          
          {/* Form Dropdown */}
          <FormControl variant="outlined" className="dropdown" style={{ maxWidth: "160px", }}>
            <InputLabel>Form</InputLabel>
            <Select value={selectedOption1} onChange={handleDropdownChange1} label="Form">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="optionA">Property Acknowledgement Receipt(PAR)</MenuItem>
              <MenuItem value="optionB">Inventory Custodian Slip (ICS)</MenuItem>
            </Select>
          </FormControl>

          {/* Department Dropdown */}
          <FormControl variant="outlined" className="dropdown" style={{ maxWidth: "160px", }}>
            <InputLabel>Department</InputLabel>
            <Select value={selectedOption2} onChange={handleDropdownChange2} label="Department">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="optionC">General Service Office (GSO)</MenuItem>
              <MenuItem value="optionD">MDRRMO</MenuItem>
            </Select>
          </FormControl>

          {/* Calendar Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={toggleCalendar}
            style={{ height: "56px", backgroundColor: "#0F1D9F", color:"white"}}
          >
            <CalendarTodayIcon />
          </Button>
        </div>

        {/* Calendar Dialog */}
        <Dialog open={calendarVisible} onClose={closeCalendar} fullWidth maxWidth="sm">
          <DialogTitle>Calendar</DialogTitle>
          <DialogContent>
            <p>Date Range Picker</p>
            {/* Start Date Field */}
            <TextField
              label="Start Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              style={{ marginBottom: "10px" }}
            />
            
            {/* End Date Field */}
            <TextField
              label="End Date"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              style={{ marginBottom: "10px" }}
            />
          </DialogContent>

          {/* Dialog Actions */}
          <DialogActions>
            <Button onClick={closeCalendar} color="secondary">Cancel</Button>
            {/* Apply Button could have logic here to filter based on selected dates */}
            <Button onClick={() => { closeCalendar(); }} color="primary">Apply</Button>
          </DialogActions>
        </Dialog>

        {/* Data Table */}
        <StyledTableContainer component={Paper}>
          <Table size="medium">
            {/* Table Head */}
            <TableHead>
              <TableRow>
                {["ID No.", "Entity No.", "Fund Cluster", "Date", "Status", "Action"].map((header) =>
                  (<StyledTableDataCell key={header} isHeader>{header}</StyledTableDataCell>)
                )}
              </TableRow>
            </TableHead>

            {/* Table Body with Sample Data */}
            <TableBody>
              {[{ idNo: '19128', entityNo:'987678', fundCluster:'Angeolo', date:'12/09/01', status:'Pending' }].map((row) => (
                // Render each row dynamically
                (<TableRow key={row.idNo}>
                  {Object.values(row).map((value) =>
                    (<StyledTableDataCell key={value}>{value}</StyledTableDataCell>)
                  )}
                  {/* Action Button */}
                  <StyledTableDataCell>
                    {/* View Button with Alert for demonstration */}
                    <button
                      style={{
                        backgroundColor:"#0F1D9F", 
                        color:"white", 
                        border:"none", 
                        padding:"8px 16px", 
                        borderRadius:"4px", 
                        cursor:"pointer", 
                        fontSize:"14px"
                      }}
                      onClick={handleViewClick}
                    >
                      View
                    </button>
                  </StyledTableDataCell> 
                </TableRow>)
              ))}
              
              {/* Additional rows can be added here as needed */}
              
             </TableBody> 
           </Table> 
         </StyledTableContainer> 
       </div> 
     </div> 
   ); 
}

export default PAR_ICS1;
