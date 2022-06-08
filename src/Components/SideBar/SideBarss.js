import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../asset/logo.png";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
import "./SiderBarss.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { FaDiscord } from "react-icons/fa";
import HomePage from "../HomePage/HomePage"
import TVK from "../TVK/TVK"
import Users from "../Users/Users"
import Requests from "../Request/Requests";

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import { Link, Switch, Route } from "react-router-dom";
// import BondPopup from "../../BondPopup";
// import MyVerticallyCenteredModal from "../../BondPopup";
// import BondPopup from "../Buy Bond/BondPopup";
// import BondPopupOne from "../Buy Bond/BondPopupOne";
// import { loadAccountAddress } from "../../Apis/api";
const drawerWidth = 265;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [show, setShow] = React.useState(false);
  const [showone, setshowone] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  // const [Address, setAddress] = useState("CONNECT METAMASK");
  let connectaddress;
  // const getaddress = async () => {
  //   connectaddress = await loadAccountAddress();
  //   let acc =
  //     connectaddress.substring(0, 4) +
  //     "..." +
  //     connectaddress.substring(connectaddress.length - 4);
  //   setAddress(acc);
  // };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="stakeNMSColor1" style={{ color: "white" }}>
      <Toolbar style={{ marginTop: "30px", marginLeft: "30px" }}>
        <img src={logo} width="170px" />
      </Toolbar>
      <br />
      <List>
        <Link to="/" className="linkid">
          <ListItem button href="#deshborad" key="Dashboard">
            <ListItemIcon>
              <TuneIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <br />
        <Link to="/StakeNMS" className="linkid">
          <ListItem button key="Stake NMS">
            <ListItemIcon>
              <ArticleOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Stake NMS" />
          </ListItem>
        </Link>
        <br />
        <Link to="/BuyBond" className="linkid">
          <ListItem button key="Buy Bond">
            <ListItemIcon>
              <SettingsIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Buy Bond" />
          </ListItem>
        </Link>
        <div>
          <span className="text">with bonus yields</span>
        </div>

        <div style={{ paddingTop: "10px", cursor: "pointer" }}>
          <span onClick={() => setShow(true)}>
            {/* <Link to="/BondPopup"> */}
            &emsp;&emsp;&emsp; NMS-BUSDLP &emsp; 28.50%
            {/* </Link> */}
          </span>
        </div>
        <div style={{ paddingTop: "10px", cursor: "pointer" }}>
          <span onClick={() => setshowone(true)}>
            &emsp;&emsp;&emsp; BUSD &emsp;&emsp;&emsp;&emsp;&emsp; 25.78%
          </span>
        </div>
        <br />
        <br />

        <ListItem button key="Buy NMS">
          <ListItemIcon>
            <AttachMoneyIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Buy NMS" />
        </ListItem>
      </List>
      <br />
      <div className="icons">
        <a href="">
          <GitHubIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <TwitterIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <TelegramIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <FaDiscord style={{ color: "white" }} size={24} />
        </a>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "rgb(30,35,43)", height: "100px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ color: "white", display: "flex" }}>
            <div className="container dropdownmenu">

              <div>
                <button
                  // onClick={() => getaddress()}
                  className="btn btn-secondary  p-2"
                >
                  <b>Address</b>
                </button>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ backgroundColor: "rgb(23,25,27)" }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* 

        <Typography className="mt-4" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tvk' element={<TVK />} />
          <Route path='/users' element={<Users />} />
          <Route path='/request' element={<Requests />} />

        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {

  window: PropTypes.func,
};

export default ResponsiveDrawer;
