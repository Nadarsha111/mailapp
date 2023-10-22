import React from "react";
import styles from "../Card/Card.module.css";

const Card = ({id,subject,desc,from,name,date,onClick}) => {

  
  return (
    <div className={styles.emailListCard} onClick={onClick}>
      <div className={styles.firstletter}>
        {name.charAt(0).toUpperCase()}
      </div>
<div className={styles.content}>
      <div className={styles.from}>
        <span className={styles.fromName}>{name}</span>
        <span className={styles.fromEmail}>&lt;{from}&gt;</span>
      </div>

      <span className={styles.subject}>{subject}</span>
      <span className={styles.description}>{desc}</span>
      <span className={styles.date}>{date}</span>

</div>
    </div>
  );
};

export default Card;
