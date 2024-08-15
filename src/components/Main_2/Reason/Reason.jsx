import classes from "./Reason.module.css";
import { ReactSVG } from "react-svg";

const Reason = ({ title, img, description, index }) => {
  return (
    <div className={classes.reason}>
      <li>
        <h1 className={classes.head}>{title}</h1>
        {index === 2 ? (
          <img src={img} alt={title} className={classes.image} />
        ) : (
          <ReactSVG src={img} alt={title} className={classes.image} />
        )}
        <p>{description} </p>
      </li>
    </div>
  );
};

export default Reason;