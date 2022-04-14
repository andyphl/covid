import React from "react";
import { useEffect, useState } from "react";
import { Popover, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  selectCountriesCovid,
  selectCountriesCovidStatus,
} from "../../slice/countriesCovidSlice";

export const MapPopoverContent = ({ country }) => {
  const [countryCovid, setCountryCovid] = useState(null);
  const countriesCovid = useSelector(selectCountriesCovid);
  const countriesCovidStatus = useSelector(selectCountriesCovidStatus);

  useEffect(() => {
    if (countriesCovidStatus === "succeeded") {
      setCountryCovid(
        countriesCovid.find((data) => data.ThreeLetterSymbol === country.iso)
      );
    }
  }, [countriesCovidStatus, country]);

  return (
    <>
      <Popover.Header as="h3" className="bg-secondary text-light">
        {country.name}
      </Popover.Header>
      <Popover.Body>
        {countriesCovidStatus !== "succeeded" ? (
          <Spinner
            className="d-block mx-auto text-primary"
            animation="border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : !countryCovid ? (
          <p>找不到相關資料</p>
        ) : (
          <>
            <p className="mb-1">總案例： {countryCovid.TotalCases}</p>
            <p className="mb-1">總死亡人數： {countryCovid.TotalDeaths}</p>
            <p className="mb-1">總康復人數： {countryCovid.TotalRecovered}</p>
          </>
        )}
      </Popover.Body>
    </>
  );
};

export default MapPopoverContent;
