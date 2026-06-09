import { BREAKPOINTS } from "@/constants/breakpoints";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = BREAKPOINTS.mobile;
const TABLET_BREAKPOINT = BREAKPOINTS.tablet;

export const useResponsive = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    isMobile: width < MOBILE_BREAKPOINT,
    isTablet: width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT,
    isDesktop: width >= TABLET_BREAKPOINT,
  };
};
