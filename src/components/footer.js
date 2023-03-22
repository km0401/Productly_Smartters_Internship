import LogoImage from "../../public/img/logo.svg";
import styles from "../components/footer.module.css";
import Image from "next/image";

const footer = () => {
  return (
    <div className={styles.footerHeroContainer}>
        <div className={styles.footerContainer}>
            <div className={styles.columnContainerFooter}><Image  src={LogoImage} width="184" alt="" /></div>
            <div className={styles.columnContainerFooter}>
              <div className={styles.footerLinkHeadingText}>QuickLinks</div>
              <ul>
                <li className={styles.footerLinks}><a  href="#">About us</a></li>
                <li className={styles.footerLinks}><a href="#">Blog</a></li>
                <li className={styles.footerLinks}><a href="#">Contact</a></li>
                <li className={styles.footerLinks}><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className={styles.columnContainerFooter}>
              <div className={styles.footerLinkHeadingText}>Legal stuff</div>
              <ul>
                <li className={styles.footerLinks}><a href="#">Disclaimer</a></li>
                <li className={styles.footerLinks}><a href="#">Financing</a></li>
                <li className={styles.footerLinks}><a href="#">Privacy Policy</a></li>
                <li className={styles.footerLinks}><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className={styles.footerFormContainer}>
              <div className={styles.footerLinkHeadingText}>
                Knowing you are always on the best energy deal.</div>
                <div>
                <input className={styles.formInputFooter} type="email" placeholder="Enter your phone Number" aria-label="phone"/>
                </div>
              <button className={styles.signUpButtonFooter} >Sign up Now</button>
            </div>
          </div>
    </div>
  )
}

export default footer