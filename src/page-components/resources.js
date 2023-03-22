import Image from "next/image";
import styles from "../page-components/resources.module.css";
import Card from "../page-components/resourcesCard";
import Image01 from "../../public/img/marketing/marketing01.png";
import Image02 from "../../public/img/marketing/marketing02.png";
import Image03 from "../../public/img/marketing/marketing03.png";

const resources = () => {
  return (
    <div className={styles.resourcesMainContainer}>
        <div className={styles.resourcesHeadingText}>
            <h1>Marketing Strategies</h1>
            <p>Join 40,000+ other marketers and get proven strategies on email marketing</p>
        </div>
        <div className={styles.cardContainerResources}>
        <Card authorName={"Abdullah"} blogDate={"03 March 2019"} blogTitle={"Increasing Prosperity With Positive Thinking"} src={Image01}/>
        <Card authorName={"Abdullah"} blogDate={"03 March 2019"} blogTitle={"Motivation Is The First Step To Success"} src={Image02}/>
        <Card authorName={"Abdullah"} blogDate={"03 March 2019"} blogTitle={"Success Steps For Your Personal Or Business Life"} src={Image03}/>
        </div>
    </div>
  )
}

export default resources