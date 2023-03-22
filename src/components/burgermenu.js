import React from 'react';
import Box from "@mui/material/Box";
import Link from "next/link";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import { FaBars } from "react-icons/fa";
import LogoImage from "../../public/img/logo.svg";
import styles from "../components/header.module.css";
import header from "./header";

const burgermenu = () => {
  return (
                <Box style={{display:"flex", flexDirection:"column", width: "100%", backgroundColor:"blue", padding:"10px", margin:"50px 0px 50px -20px", position:"absolute", transition: "max-height 0.5s ease-in-out;"}}>
                  <Box style={{display:"flex", flexDirection:"column"}}>
                    <Box>Product</Box>
                    <Box>Customers</Box>
                    <Box>Pricing</Box>
                    <Box>Resources</Box>
                  <Grid container>
                    <Grid item sx={6}>
                      <button className={styles.navbarSignInButton}>
                        Sign In
                      </button>
                    </Grid>
                    <Grid item sx={6}>
                      <button className={styles.navbarSignUpButton}>
                        Sign Up
                      </button>
                    </Grid>
                  </Grid>
                  </Box>
                </Box>
  )
}

export default burgermenu