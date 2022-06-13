import React from "react";
import "./App.css";
import Card from "./features/card/Card";
import styles from "./App.module.css";
import data from "./data.js";

function App() {
  return (
    <div className={styles.card_container}>
      {data.map((e) => {
        return (
          <Card
            name={e.name}
            title={e.title}
            bgColor={e.bgColor}
            heading={e.heading}
            headingColor={e.headingColor}
            cardText={e.cardText}
            nameColor={e.nameColor}
            cardTextColor={e.cardTextColor}
            img={e.img}
            iconBorder={e.iconBorder}
            fontWeight={e.fontWeight}
            fontOpacity={e.fontOpacity}
          />
        );
      })}
    </div>
  );
}

export default App;
