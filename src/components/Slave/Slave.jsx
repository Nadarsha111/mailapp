import React, { useState, useEffect } from "react";
import styles from "./Slave.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addfav } from "../../redux/slice";

const Slave = ({email}) => {
// njnj
// id={selectedEmail.id} name={selectedEmail.from.name} subject={selectedEmail.subject} date={selectedEmail.date}
// kkk
  const dipatch=useDispatch();
  const favorites=useSelector((state)=>state.fav);
const fav=!!favorites.find((item)=>item.id===email.id);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://flipkart-email-mock.now.sh/?id=${email.id}`)
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
  }, [email.id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.slaveBody}>
          <header>
            <div className={styles.headercontent}>
              <span className={styles.nameletter}>
                {email.from.name.charAt(0).toUpperCase()}
              </span>
              <div>
                <h2>{email.subject}</h2>
                <span>{email.date}</span>
              </div>
            </div>
            <button className={styles.button}
            onClick={()=>dipatch(addfav(email))}
            >{fav?"favorite":"Mark as favorite"}</button>
          </header>

          <div dangerouslySetInnerHTML={{ __html: data?.body }} />
        </div>
      )}
    </div>
  );
};

export default Slave;
