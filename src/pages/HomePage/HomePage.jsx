import { MapChart } from "../../components";
import styled from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styled.homePage}>
      <MapChart />
    </div>
  );
};

export default HomePage;
