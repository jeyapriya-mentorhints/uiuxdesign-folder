import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.cards}>
      <div className={classes.imgpart}>
        <img src={props.live} alt="" className={classes.live} />
        <img src={props.image} alt="" className={classes.courseimg} />
      </div>
      <div className={classes.textpart}>
        <p className={classes.titles}>{props.titles}</p>
        <p className={classes.duration}>{props.duration}</p>
        <button className="dark-btn">Enroll Now</button>
      </div>
    </div>
  );
};

export default Card;
