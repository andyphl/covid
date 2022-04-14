import { Overlay, Popover } from "react-bootstrap";

const MapPopover = ({
  children,
  popoverContainerRef,
  popoverTargetDOM,
  isPopoverShow,
  ...props
}) => {
  return (
    <Overlay
      container={popoverContainerRef}
      target={popoverTargetDOM}
      show={isPopoverShow}
      {...props}
    >
      <Popover>{children}</Popover>
    </Overlay>
  );
};

export default MapPopover;
