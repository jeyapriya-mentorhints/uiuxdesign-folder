import { COURSE_DETAILS } from "../../../data";
import "./CourseDetail.css";
import { SAMPLE_CERTIFICATE } from "../../../data";
import Certificate from "../Certificate/Certificate";

const CourseDetail = () => {
  return (
    <>
    <div className="course_detail">
      <h1>Course Journey</h1>
      <p className="subtitle">Complete your course in just 4 steps</p>
      {COURSE_DETAILS.map((items, index) => {
        // Check if the current element is the first or last in the list
        const isFirst = index === 0;
        const isLast = index === COURSE_DETAILS.length - 1;
        const second = index === 1;
        return (
          <div key={index} className="parent">
            <div className="adjusting">
              <div className={`circle ${isFirst ? "f-circle" : ""}`}>
                {index + 1}
              </div>
              <h2>{items.item}</h2>
            </div>
            <div className="detail">
              <ul
                className={`fixer ${isFirst ? "first-detail" : ""} ${
                  isLast ? "last-detail" : ""
                } ${second ? "second-detail" : ""}`}
              >
                {items.value.map((detail) => (
                  <li key={detail.description} className="box">
                    <img src={detail.image} alt={detail.description} />
                    <p className="desc">{detail.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
    <Certificate {...SAMPLE_CERTIFICATE}/>
    </>
  );
};

export default CourseDetail;
