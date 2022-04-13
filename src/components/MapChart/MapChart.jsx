import { useRef, useState } from "react";
import { Container } from "react-bootstrap";

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";

import MapChartPopover from "./MapChartPopover";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const MapChart = () => {
  const [isShowCountryPopover, setIsShowCountryPopover] = useState(false);
  const [targetCountryDOM, setTargetCountryDOM] = useState(null);
  const [countryGeoInfo, setTargetCountryInfo] = useState(null);
  const popoverContainerRef = useRef(null);

  const showCountryPopover = (e, geoProperties) => {
    setIsShowCountryPopover(true);
    setTargetCountryDOM(e.target);
    setTargetCountryInfo(geoProperties);
  };

  const hideConuntryPopover = () => {
    setIsShowCountryPopover(false);
  };

  return (
    <div ref={popoverContainerRef}>
      {setIsShowCountryPopover && countryGeoInfo && (
        <MapChartPopover
          popoverContainerRef={popoverContainerRef}
          isShowCountryPopover={isShowCountryPopover}
          targetCountryDOM={targetCountryDOM}
          countryName={countryGeoInfo.NAME}
          countryISO={countryGeoInfo.ISO_A3}
        />
      )}
      <ComposableMap>
        <ZoomableGroup>
          <Sphere stroke="#ddd" strokeWidth={1} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#DDD"
                    stroke="#FFF"
                    style={{
                      default: { outline: "none" },
                      hover: {
                        outline: "none",
                        fill: "crimson",
                        cursor: "pointer",
                      },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={(e) => {
                      showCountryPopover(e, geo.properties);
                    }}
                    onMouseLeave={hideConuntryPopover}
                    onClick={() => {
                      console.log(popoverContainerRef);
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
