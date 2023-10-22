import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Slave from "../Slave/Slave";

const Homepage = () => {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCardClick = (email) => {
    setSelectedEmail(email);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://flipkart-email-mock.now.sh/");
        if (response.ok) {
          const data = await response.json();
          setEmails(data.list);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  
  return (
    <>
      {selectedEmail ? (
        <div>
          <div style={{ width: "30%", float: "left" }}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              emails.map((email) => (
                <Card
                  key={email.id}
                  subject={email.subject}
                  desc={email.short_description}
                  id={email.id}
                  from={email.from.email}
                  name={email.from.name}
                  date={email.date}
                  onClick={() => handleCardClick(email)}
                />
              ))
            )}
          </div>

          <div style={{ width: "70%", float: "left" }}>
            <Slave email={selectedEmail} />
          </div>
        </div>
      ) : (
        <div style={{ width: "100%", float: "left" }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            emails.map((email) => (
              <Card
                key={email.id}
                subject={email.subject}
                desc={email.short_description}
                id={email.id}
                from={email.from.email}
                name={email.from.name}
                date={email.date}
                onClick={() => handleCardClick(email)}
              />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default Homepage;
