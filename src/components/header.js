import React, { Component } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import { FaBars } from "react-icons/fa";
import LogoImage from "../../public/img/logo.svg";
import styles from "../components/header.module.css";
import Burgermenu from '../components/burgermenu';

export class header extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDiv: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(name) {
    switch (name) {
      case "showHideDiv":
        this.setState({ showHideDiv: !this.state.showHideDiv });
        break;
      default:
        null;
    }
  }

  render() {
    const { showHideDiv } = this.state;
    return (
      <Box
        style={{
          fontFamily: "Poppins",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}>
      
      <Box style={{display:"flex",flexDirection:"row",justifyContent: "space-between", width:"100%"}}>
          <Box style={{display:"flex",flexDirection:"row",padding:"20px", justifyContent: "space-between", width: "100%"}}>
            <Image src={LogoImage} alt="logo-image" />
          
          <Hidden mdUp>
          <button onClick={() => this.hideComponent("showHideDiv")}>
                <FaBars style={{fontSize:"2rem"}}/>
          </button>
          {showHideDiv && (<Burgermenu/>)}
          </Hidden>
          </Box>

          <Hidden mdDown>
              <Box style={{display:"flex",flexDirection:"row", width:"100%", padding:"20px"}}>
                <Box>
                  <li id={styles.navbarLinks}>Product</li>
                </Box>
                <Box>
                  <li id={styles.navbarLinks}>Customers</li>
                </Box>
                <Box>
                  <li id={styles.navbarLinks}>Pricing</li>
                </Box>
                <Box>
                  <li id={styles.navbarLinks}>Resources</li>
                </Box>
                <Box>
                  <button className={styles.navbarSignInButton}>Sign In</button>
                </Box>
                <Box>
                  <button className={styles.navbarSignUpButton}>Sign Up</button>
                </Box>
              </Box>
          </Hidden>
        </Box>
      </Box>
    );
  }
}

export default header;
