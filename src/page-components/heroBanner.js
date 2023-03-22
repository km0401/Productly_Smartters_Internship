import Image from "next/image";
import heroBannerImage from "../../public/img/hero/hero-img.png";
import styles from "../page-components/heroBanner.module.css";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
// import {AiFillPlayCircle} from 'react-icons/ai';

const heroBanner = () => {
  return (
        <Box style={{fontFamily: "Poppins",
          width: "100%",
          margin: "70px 0px 140px 0px"}}>
          <Grid container sx={{textAlign:"center", margin:"auto"}}>
            <Grid item xs={12}  md={6} lg={6} sx={{float: "left",textAlign:{lg:"left", sm:"center"}, margin: "0px"}}>
            <h1 className={styles.heroBannerHeading}>The Design Thinking 
            <br/>
            Superpowers</h1>
            <p className={styles.heroBannerText}>Tools tutorials, design and innovation experts, all<br/>in one place! The most intuitive way to imagine<br/>your next user experience.</p>
            <Box>
            <a href="#!" role="button" className={styles.heroBannerGetStartedButton}>Get started</a>
            <a className={styles.heroBannerVideoButton} href="#!" role="button">
            {/* <span><AiFillPlayCircle/></span> */}
            Watch the video </a>
            </Box>
            </Grid>
            <Grid item xs={12}  md={5} lg={5} style={{float: "right"}}><Image src={heroBannerImage} alt="" width={500} height={420}/></Grid>
            </Grid>
        </Box>
  )
}

export default heroBanner