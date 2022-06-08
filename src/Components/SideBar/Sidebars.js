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
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomePage from "../HomePage/HomePage"
import TVK from "../TVK/TVK"
import { GoRequestChanges } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

import Users from "../Users/Users"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
// import "./Siderbars.css";
import './SideBar.css'
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { FaDiscord, FaUser } from "react-icons/fa";
import { DiGitPullRequest } from "react-icons/di";
import Requests from "../Request/Requests";
import Advanced from "../Request/Advanced";
import Hero from "../Request/Hero";

// import BondPopup from "../../BondPopup";
// import MyVerticallyCenteredModal from "../../BondPopup";

const drawerWidth = 230;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [show, setShow] = React.useState(false);
    const [showone, setshowone] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [Address, setAddress] = useState("CONNECT METAMASK");
    // let connectaddress;
    // const getaddress = async () => {
    //     connectaddress = await loadAccountAddress();
    //     let acc =
    //         connectaddress.substring(0, 4) +
    //         "..." +
    //         connectaddress.substring(connectaddress.length - 4);
    //     setAddress(acc);
    // };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="stakeNMSColor1" style={{ color: "white" }}>
            {/* <Toolbar style={{ marginTop: "30px", marginLeft: "30px" }}>
                <img src='logo.png' width="170px" />
            </Toolbar>
            <br /> */}
            {/* <List> */}
            <div className="nav-side-menu">
                <div className="brand"><img src="logo.png" alt="" /></div>

                <div className="menu-list mt-5">

                    <ul id="menu-content" className="menu-content ">


                        <li data-toggle="collapse" data-target="#products" className="collapsed active d-flex justify-content-between" >

                            <a href="#" style={{ fontSize: "15px" }}><FaPen icon="fa-regular fa-pen" className="ms-4" /> Update </a>
                            <span className="arrow"></span>
                        </li>

                        <ul className="sub-menu collapse" id="products">
                            <li><Link to='/'>Daily</Link></li>

                            <li><Link to='/tvk'>TVK</Link></li>

                        </ul>
                        <li className="d-flex justify-content-start mb-4 mt-4" style={{ fontSize: "15px" }}>
                            <Link to='/users' style={{ textDecoration: 'none', color: 'white', }}>
                                <HiUsers /> Users

                            </Link>
                        </li>
                        <a href='#' style={{ textDecoration: 'none', color: 'white' }}>
                            <li data-toggle="collapse" data-target="#service" className="collapsed d-flex justify-content-between">
                                <a href="#" style={{ fontSize: "15px" }}><GoRequestChanges /> Request </a>

                                <span className="arrow"></span>
                            </li>
                        </a>

                        <ul className="sub-menu collapse" id="service">
                            <Link to='./poineer' style={{ textDecoration: 'none', color: 'white' }}>
                                <li>Poineer</li>
                            </Link>
                            <Link to='./advanced' style={{ textDecoration: 'none', color: 'white' }}>
                                <li>Advanced</li>
                            </Link>
                            <Link to='./hero' style={{ textDecoration: 'none', color: 'white' }}>
                                <li>Hero</li>
                            </Link>
                        </ul>

                    </ul>
                </div>

            </div>

            {/* <Link to="/" className="linkid">
                    <ListItem button href="#deshborad" key="Dashboard">
                        <ListItemIcon>
                            <TuneIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Link> */}
            {/* <br /> */}
            {/* <Link to="/StakeNMS" className="linkid">
                    <ListItem button key="Stake NMS">
                        <ListItemIcon>
                            <ArticleOutlinedIcon style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Stake NMS" />
                    </ListItem>
                </Link> */}
            {/* <br /> */}
            {/* <Link to="/" className="linkid"> */}
            {/* <ListItem button key="Update" style={{ fontSize: "15px" }}>
                    <ListItemIcon>
                        <SettingsIcon style={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: '22px', textDecoration: 'none', cursor: 'none' }} primary="Update" />
                </ListItem> */}
            {/* </Link> */}
            {/* <div>
                    <span className="text">with bonus yields</span>
                </div> */}

            {/* <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                    <span >
                        <Link to='/' className="links-style">
                            &emsp;&emsp; Daily
                        </Link>
                    </span>
                </div>
                <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                    <span >
                        &emsp;&emsp;&emsp; <Link to='/tvk' className="links-style">TVK</Link>
                    </span>
                </div>


                <Link to='/users'>
                    <ListItem button key="Users" style={{ fontSize: "15px" }}>
                        <ListItemIcon>
                            <FaUser style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Users" primaryTypographyProps={{ fontSize: '22px', color: "white" }} />
                    </ListItem>
                </Link>
                <Link to='/users'>
                    <ListItem button key="Request" style={{ fontSize: "15px" }}>
                        <ListItemIcon>


                            <DiGitPullRequest style={{ color: "white" }} />
                        </ListItemIcon>
                        <ListItemText primary="Request" primaryTypographyProps={{ fontSize: '22px', color: "white" }} />
                    </ListItem>
                </Link>
                <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                    <span >
                        <Link to='/request' className="links-style">
                            &emsp; Poineer
                        </Link>
                    </span>
                </div>
                <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                    <span >
                        &emsp;&emsp;&emsp; <Link to='/request' className="links-style">Advanced</Link>
                    </span>
                </div>
                <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                    <span >
                        <Link to='/request' className="links-style">Hero</Link>
                    </span>
                </div> */}
            {/* </List> */}
            <br />

        </div >
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

                <Toolbar style={{ backgroundColor: "rgb(30,35,43)", height: "auto   " }}>
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
                        <h1>Admin penal</h1>

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
                    width: { sm: `calc(100% - ${drawerWidth}px)`, },
                }}
                style={{ backgroundColor: "#1B1E30", height: "100vh" }}
            >
                <Toolbar />

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/tvk' element={<TVK />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/poineer' element={<Requests />} />
                    <Route path='/advanced' element={<Advanced />} />
                    <Route path='/hero' element={<Hero />} />



                </Routes>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
       * Injected by the documentation to work in an iframe.
       * You won't need it on your project.
       */
    window: PropTypes.func,
};

export default ResponsiveDrawer;