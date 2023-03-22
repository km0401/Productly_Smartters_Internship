import Image from "next/image";
import styles from "../page-components/resourcesCard.module.css";

const resourcesCard = ({authorName, blogDate, blogTitle, src}) => {
  return (
      <div className={styles.resourcesCardContainer}>
        <div>
          <Image src={src} alt=""/>
        </div>
        <div>By {authorName}| {blogDate} </div>
        <h2>{blogTitle}</h2>
      </div>
  );
};

export default resourcesCard;
