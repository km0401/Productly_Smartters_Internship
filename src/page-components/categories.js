import Image from "next/image";
import Icon1 from "../../public/img/category/icon1.png";
import Icon2 from "../../public/img/category/icon2.png";
import Icon3 from "../../public/img/category/icon3.png";
import Icon4 from "../../public/img/category/icon4.png";
import styles from "../page-components/categories.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const categories = () => {
  return (
        <Box className={styles.categoriesContainer}>
        <h1 className={styles.categoriesTextHeading}> We design tools to unveil <br/>your superpowers</h1>
          <Grid container style={{padding:"20px"}} spacing={6}>
            <Grid item sx={6} lg={3} style={{width:"290px", fontSize:"18px"}}> 
            {/* className={styles.categoriesData} */}
            <Image src={Icon1} alt="Feature" width="75" height="75"/>
              <h4>First click tests</h4>
              <p>While most people enjoy casino gambling,</p>
            </Grid>
            <Grid item sx={6} lg={3} style={{width:"290px", fontSize:"18px"}}> 
            <Image src={Icon2} width="75" height="75" alt="Feature" />
              <h4>Design surveys</h4>
              <p>Sports betting,lottery and bingo playing for the fun</p>
            </Grid>
            <Grid item sx={6} lg={3} style={{width:"290px", fontSize:"18px"}}> 
            <Image src={Icon3} width="75" height="75" alt="Feature" />
              <h4>Preference tests</h4>
              <p>The Myspace page defines the individual.</p>
            </Grid>
            <Grid item sx={6} lg={3} style={{width:"290px", fontSize:"18px"}}> 
            <Image src={Icon4} width="75" height="75" alt="Feature" />
              <h4>Five second tests</h4>
              <p>Personal choices and the overall personality of the person.</p>
            </Grid>
          </Grid>
          <div><a href="#!" role="button" className={styles.SignUpButton}>SIGN UP NOW</a></div>
        </Box>
  )
}

export default categories