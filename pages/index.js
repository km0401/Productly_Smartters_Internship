import styles from '../styles/Home.module.css';
import Header from "../src/components/header";
import HeroBanner from '../src/page-components/heroBanner';
import Categories from '../src/page-components/categories';
import Footer from '../src/components/footer';
import Customers from '../src/page-components/customers';
import Pricing from '../src/page-components/pricing';
import Resources from '../src/page-components/resources';
import { Container } from '@mui/system';



export default function Home() {
  return (
    <div className={styles.container}>
    
      <Header id={styles.Header}/>
      <Container>
      <HeroBanner id={styles.HeroBanner}/>
      <Categories id={styles.Categories}/>
      <Customers id={styles.Customers}/>
      <Pricing id={styles.Pricing}/>
      {/* <Resources id={styles.Resources}/>
      <Footer id={styles.Footer}/> */}
      </Container>
    </div>
  )
}
