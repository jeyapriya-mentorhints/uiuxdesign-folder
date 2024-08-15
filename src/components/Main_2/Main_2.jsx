import Card from "../Main_2/Card/Card"
import uiux from "../../assets/https___lottiefiles.com_animations_ui-ux-UDCu6xoboX.gif";
import live from "../../assets/Group 5.svg";
import Reason from "../Main_2/Reason/Reason";
import { Details,INTERNSHIP } from "../../data";
import Certificate from "../../components/Main_1/Certificate/Certificate";
import Slider from '../Main_2/Slider/Slider'

const Main_2 = () => {
  return (
    <>
      <p className="choose">Why you choose this course?</p>
      <Card
        live={live}
        image={uiux}
        titles="UI/UX Design"
        duration="Course Duration: 3 months"
      />
      <ul>
        {Details.map((detailItem) => (
          <Reason key={detailItem.title} {...detailItem} />
        ))}
      </ul>
      <Certificate {...INTERNSHIP}/>
      <Slider/>
    </>
  )
}

export default Main_2;
