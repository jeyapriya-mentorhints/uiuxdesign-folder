import Card from "../Card/Card";
import { CARDDETAIL } from "../../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FAQ from "../FAQ/FAQ";

const SwipetoSlide = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "0px", // Removed center padding
    slidesToShow: 1.2,
    swipeToSlide: true,
  };

  return (
    <>
      <p className="choose">Explore Other Courses</p>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <Slider {...settings}>
          {CARDDETAIL.map((cardItem) => (
            <Card key={cardItem.titles} {...cardItem} />
          ))}
        </Slider>
      </div>
      <FAQ/>
    </>
  );
};

export default SwipetoSlide;
