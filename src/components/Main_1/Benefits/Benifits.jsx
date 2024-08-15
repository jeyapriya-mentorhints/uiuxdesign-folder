import check from "../../../assets/check.png";
import classes from "./Benifits.module.css";

const Benifits = ({ text }) => {
  return (
    <div className={classes.maincontainer}>
      <div className={classes.container}>
        <img src={check} alt="bullet" />
        <p className={classes.detail}>{text}</p>
      </div>
    </div>
  );
};

export default Benifits;
