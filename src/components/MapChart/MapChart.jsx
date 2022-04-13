import { useRef, useState } from "react";
import { Overlay, Popover } from "react-bootstrap";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";
import styled from "./MapChart.module.scss";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const MapChart = () => {
  const [showCountryInfo, setShowCountryInfo] = useState(false);
  const [targetCountryDOM, setTargetCountryDOM] = useState(null);
  const [targetCountryInfo, setTargetCountryInfo] = useState(null);
  const popoverContainerRef = useRef(null);

  const showCountryPopover = (e, geoProperties) => {
    setShowCountryInfo(true);
    setTargetCountryDOM(e.target);
    console.log(geoProperties);
    setTargetCountryInfo(geoProperties);
  };

  return (
    <div ref={popoverContainerRef}>
      <Overlay
        placement="top"
        containerPadding={20}
        container={popoverContainerRef}
        target={targetCountryDOM}
        show={showCountryInfo}
      >
        <Popover>
          <Popover.Header as="h3" className="bg-primary">
            {targetCountryInfo?.NAME}
          </Popover.Header>
          <Popover.Body>ISO_A3: {targetCountryInfo?.ISO_A3}</Popover.Body>
        </Popover>
      </Overlay>
      <ComposableMap className={styled.container}>
        <ZoomableGroup>
          <Sphere stroke="#ff5533" strokeWidth={1} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <>
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
                      onClick={() => {
                        console.log(popoverContainerRef);
                      }}
                    />
                  </>
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
