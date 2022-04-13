import { Overlay, Popover, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  selectCountriesCovid,
  selectCountriesCovidStatus,
} from "../../slice/countriesCovidSlice";
const MapChartPopover = ({
  popoverContainerRef,
  targetCountryDOM,
  countryName,
  countryISO,
  isShowCountryPopover,
}) => {
  const countriesCovid = useSelector(selectCountriesCovid);
  const countriesCovidStatus = useSelector(selectCountriesCovidStatus);

  const target = countriesCovid.find(
    (country) => country.ThreeLetterSymbol === countryISO.toLowerCase()
  );

  return (
    <Overlay
      placement="top"
      containerPadding={50}
      container={popoverContainerRef}
      target={targetCountryDOM}
      show={isShowCountryPopover}
    >
      <Popover>
        <Popover.Header as="h3" className="bg-secondary text-light">
          {countryName}
        </Popover.Header>
        <Popover.Body>
          {countriesCovidStatus !== "succeeded" ? (
            <Spinner
              className="mx-auto text-primary"
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : !target ? (
            <p>找不到相關資料</p>
          ) : (
            <>
              <p className="mb-1">總案例： {target.TotalCases}</p>
              <p className="mb-1">總死亡人數： {target.TotalDeaths}</p>
              <p className="mb-1">總康復人數： {target.TotalRecovered}</p>
            </>
          )}
        </Popover.Body>
      </Popover>
    </Overlay>
  );
};

export default MapChartPopover;
