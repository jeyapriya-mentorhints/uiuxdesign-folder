import amazon_logo from "../../../assets/Amazon_Logo.png";
import microsoft_logo from "../../../assets/Microsoft-Logo.png";
import zoho from "../../../assets/zoho1.png";
import IBM from "../../../assets/ibm.jpg";
import google from "../../../assets/google.svg";
import "./Partner.css";
import { MEMBERS } from "../../../data";
import CourseDetail from "../CouseDetail/CourseDetail";
import { PARTNERS } from "../../../data";

const Partner = () => {
  return (
    <>
    <section className="partner">
      <h1>Our Trusted Partners</h1>
      <div className="logo-slide">
        <div className="image">
        {PARTNERS.map((image)=>(
          <img src={image} alt={image} key={image} />
            ))}
        </div>
        <div className="image">
        {PARTNERS.map((image)=>(
            <img src={image} alt={image} key={image} />
            ))}
        </div>
      </div>
      <div className="orangeBox">
        <h1>
          Get{" "}
          <div className="placeholder">
            <div className="type">
              <span></span>
            </div>
            <span>Mentor</span>
          </div>{" "}
          From Top 1% <pre>Software Engineers</pre>
        </h1>
        <p>Our experts brings out best in you</p>
        <div className="members">
          {MEMBERS.map((image) => (
            <img src={image} alt="members" key={image} />
          ))}
        </div>
      </div>
    </section>
    <CourseDetail/>
    </>
  );
};

export default Partner;
