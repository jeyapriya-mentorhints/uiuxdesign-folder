import Benifits from "../Benefits/Benifits.jsx";
import { CBenefits } from "../../../data.js";
import classes from "./Hero.module.css";
import Partner from "../Partner/Partner.jsx";

const Hero = () => {
  return (<>
    <section className={classes.herosec}>
      <div className={classes.item1}>
        <p>Book Your Free Demo Class For</p>
        <span className={classes.uiux}>UI/UX Design</span>
        <form className={classes.data}>
          <input type="text" placeholder="Name" required />
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
          />
          <input
            type="text"
            name="phno"
            id="phno"
            placeholder="Phone Number"
            required
          />
        </form>
        <button className="dark-btn">Book Demo Class</button>
        <button className="light-btn">Download Syllabus</button>
      </div>
      <div className={classes.item2}>
        <p className={classes.texts}>Just</p>
        <p className={classes.rate}>
          <span className={classes.Irate}>₹</span>499 Only
        </p>
        <p className={classes.benefit}>Course Benefits:</p>

        {CBenefits.map((benefit, index) => (
          <Benifits key={index} text={benefit} />
        ))}
        <div className={classes.contains}>
          <p>Top Mentors</p>

          <p>4K Learners</p>

          <p>97% Grabbed Internships</p>
        </div>
      </div>
    </section>
    <Partner/>
    </>
  );
};

export default Hero;
