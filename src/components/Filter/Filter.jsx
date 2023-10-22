import React, { useState } from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  const tabs = ["Unread", "Read", "Favorites"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.tabs}>
        <span>Filter By: </span>
       <div className="buttons">
  {tabs.map((tab) => (
    <button
      key={tab}
      className={activeTab === tab ? styles.activeButton : styles.button}
      onClick={() => handleTabClick(tab)}
    >
      {tab}
    </button>
  ))}
</div>

      </div>
    </>
  );
};

export default Filter;
