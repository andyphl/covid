import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography as G,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";
import CustomPopover from "./Popover";
import usePopover from "./usePopover";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const Geography = memo(
  (props) => <G {...props} />,
  (prevProps, nextProps) => true
);

const MapChart = () => {
  const {
    popoverContainerRef,
    isPopoverShow,
    popoverTargetDOM,
    popoverData,
    showPopover,
    hidePopover,
    setPopoverData,
    setPopoverTargetDOM,
  } = usePopover();

  return (
    <div ref={popoverContainerRef}>
      <CustomPopover
        popoverData={popoverData}
        popoverContainerRef={popoverContainerRef}
        popoverTargetDOM={popoverTargetDOM}
        isPopoverShow={isPopoverShow}
      />
      <ComposableMap>
        <ZoomableGroup>
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
                    setPopoverData(geo.properties);
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
  );
};

export default MapChart;
