import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card} style={{ backgroundColor: props.bgColor }}>
      <img
        className={styles.profile_icon}
        style={{ border: props.iconBorder }}
        src={props.img}
        alt="profile_icon"
      />
      <div className={styles.name} style={{ color: props.nameColor }}>
        <span>{props.name}</span>
        <span className={styles.title}>{props.title}</span>
      </div>
      <p className={styles.heading} style={{ color: props.headingColor }}>
        {props.heading}
      </p>
      <p
        className={styles.text}
        style={{
          color: props.cardTextColor,
          fontWeight: props.fontWeight,
          opacity: props.fontOpacity,
        }}
      >
        {props.cardText}
      </p>
    </div>
  );
};

export default Card;
