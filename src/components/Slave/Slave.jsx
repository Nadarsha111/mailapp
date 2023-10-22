import React, { useState, useEffect } from "react";
import styles from "./Slave.module.css";

const Slave = ({ id, subject, name, date }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
      .then((res) => {
        setIsLoading(false);

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        return res.json();
      })
      .then((responseData) => {
        setData(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.slaveBody}>
          <header>
            <div className={styles.headercontent}>
              <span className={styles.nameletter}>
                {name.charAt(0).toUpperCase()}
              </span>
              <div>
                <h2>{subject}</h2>
                <span>{date}</span>
              </div>
            </div>
            <button className={styles.button}>Mark as favorites</button>
          </header>

          <div dangerouslySetInnerHTML={{ __html: data?.body }} />
        </div>
      )}
    </div>
  );
};

export default Slave;
