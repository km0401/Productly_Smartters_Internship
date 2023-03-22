import validationImage from "../../public/img/validation/validation.png";
import styles from "../page-components/pricing.module.css";

const pricing = () => {
  return (
    <div className={styles.pricingContainer}>
        <h1 className={styles.textHeadingPricing}>Need a super hero?</h1>
        <div className={styles.textParagraphPricing}>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</div>
        <button className={styles.contactButtonPricing}>Contact our expert</button>
    </div>
  )
}

export default pricing