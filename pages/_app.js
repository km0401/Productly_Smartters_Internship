import '../styles/globals.css';
// import Header from "../src/components/header";
// import Footer from '../src/components/footer';

function MyApp({ Component, pageProps }) {
  
  return (
  <>
  {/* <Header/> */}
  <Component {...pageProps} />
  {/* <Footer/> */}
  </>)
}

export default MyApp
