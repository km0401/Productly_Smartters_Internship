import Image from "next/image";
import validationImage from "../../public/img/validation/validation.png";
import styles from "../page-components/customers.module.css";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

const customers = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={6} md={6} lg={6} >
      {/* className={styles.columnContainer} */}
        <h5 className={styles.textHeadingCustomers}>Effortless Validation for</h5>
        <h2 className={styles.boldTextTitleCustomers}>Design Professionals</h2>
        <p>
          The Myspace page defines the individual,his or her characteristics, traits, personal choices and the overall personality of the person.
        </p>
        <h4 className={styles.textHeadingCustomers}>Accessory makers</h4>
        <p>
          While most people enjoy casino gambling, sports betting lottery and bingo playing for the fun
        </p>
        <h4 className={styles.textHeadingCustomers}>Alterationists</h4>
        <p>
          If you are looking for a new way to promote your business that won't cost you money,
        </p>
        <h4 className={styles.textHeadingCustomers}>Custom Design designers</h4>
        <p>
          If you are looking for a new way to promote your business that won't cost you more money,
        </p>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
      {/* <Box sx={{width:"100%"}}> */}
        <Image src={validationImage} alt=""/>
        {/* </Box> */}
      </Grid>
    </Grid>
  );
};

export default customers;
