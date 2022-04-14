import { MapChart } from "../../components";
import styled from "./HomePage.module.scss";
import classNames from "classnames";

const HomePage = () => {
  return (
    <div className={classNames("bg-secondary bg-gradient", styled.homePage)}>
      <MapChart />
    </div>
  );
};

export default HomePage;
