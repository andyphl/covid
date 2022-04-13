import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components";
import { CountryPage, HomePage } from "./pages";
import {
  FETCH_COUNTRIES_COVID,
  selectCountriesCovidStatus,
} from "./slice/countriesCovidSlice";

const App = () => {
  const dispatch = useDispatch();
  const contriesCovidStatus = useSelector(selectCountriesCovidStatus);

  useEffect(() => {
    if (contriesCovidStatus === "idle") {
      dispatch(FETCH_COUNTRIES_COVID());
    }
  }, []);

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/:country" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
