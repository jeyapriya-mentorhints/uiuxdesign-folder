import "./Home.css";
import menubar from "../../assets/menubar.jpg";
import logo from "../../assets/Logo.svg";

const Home = () => {
  return (
    <nav id="navbar">
      <div className="brand">
        <div className="toggle">
          <img src={menubar} className="menubar" />
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Home;
