import { useState, useRef, useCallback, useEffect } from "react";

const usePopover = () => {
  const popoverContainerRef = useRef(null);
  const [isPopoverShow, setIsPopoverShow] = useState(false);
  const [popoverTargetDOM, setPopoverTargetDOM] = useState(null);

  const showPopover = useCallback((e) => {
    setIsPopoverShow(true);
  }, []);

  const hidePopover = useCallback(() => {
    setIsPopoverShow((prevIsPopoverShow) => !prevIsPopoverShow);
  }, []);

  // useEffect(() => {
  //   console.log("showPopover recreated");
  // }, [showPopover]);

  // useEffect(() => {
  //   console.log("hidePopover recreated");
  // }, [hidePopover]);

  return {
    popoverContainerRef,
    isPopoverShow,
    popoverTargetDOM,
    showPopover,
    hidePopover,
    setPopoverTargetDOM,
  };
};

export default usePopover;
