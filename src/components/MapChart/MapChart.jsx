import classNames from "classnames";
import { useState, memo, useRef, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography as G,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";
import MapPopover from "./MapPopover";
import MapPopoverContent from "./MapPopoverContent";
import usePopover from "./usePopover";
import styled from "./MapChart.module.scss";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const Geography = memo(
  (props) => <G {...props} />,
  (prevProps, nextProps) => true
);

const MapChart = () => {
  const [country, setCountry] = useState(null);
  // const ref = useRef(null);
  // const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const {
    popoverContainerRef,
    isPopoverShow,
    popoverTargetDOM,
    showPopover,
    hidePopover,
    setPopoverTargetDOM,
  } = usePopover();

  // useEffect(() => {
  //   ref.current = document.querySelector(".rsm-zoomable-group");
  // }, []);

  return (
    <div ref={popoverContainerRef} className="container  h-100">
      <MapPopover
        popoverContainerRef={popoverContainerRef}
        popoverTargetDOM={popoverTargetDOM}
        isPopoverShow={isPopoverShow}
        placement="top"
        containerPadding={50}
      >
        <MapPopoverContent country={country} />
      </MapPopover>
      <div className="row h-100 align-items-center">
        <ComposableMap
          className={classNames("border border-5 border-info col", styled.map)}
        >
          <ZoomableGroup
          // center={position.coordinates}
          // zoom={position.zoom}
          // onMoveEnd={(pos) => {
          //   setPosition(pos);
          //   // console.log(pos.coordinates);
          // }}
          // onMove={
          //   onMapMove
          //   (e) => {
          //   let zoomAttr = ref.current.getAttribute("transform");
          //   console.log(zoomAttr);
          //   console.log(e.y);
          //   if (e.y > 400) {
          //     ref.current.setAttribute(
          //       "transform",
          //       zoomAttr.replace(e.y.toString(), "400")
          //     );
          //   }
          // }
          // }
          >
            <Sphere stroke="#ddd" strokeWidth={1} />
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
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
                      setCountry({
                        name: geo.properties.NAME,
                        iso: geo.properties.ISO_A3.toLowerCase(),
                      });
                      setPopoverTargetDOM(e.target);
                      showPopover();
                    }}
                    onMouseLeave={hidePopover}
                    onClick={() => {}}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
};

export default MapChart;
