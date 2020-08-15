import { useMediaQuery } from "react-responsive";

const useMediaQueries = () => {
  const largeDesktopCondition = useMediaQuery({ minWidth: 1200 });
  const desktopCondition = useMediaQuery({ minWidth: 992 });
  const tabletCondition = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const mobileCondition = useMediaQuery({ maxWidth: 767 });
  const Desktop = ({ children }) => {
    return desktopCondition ? children : null;
  };
  const Tablet = ({ children }) => {
    return tabletCondition ? children : null;
  };
  const Mobile = ({ children }) => {
    return mobileCondition ? children : null;
  };

  return {
    Desktop,
    Tablet,
    Mobile,
    largeDesktopCondition,
    desktopCondition,
    tabletCondition,
    mobileCondition,
  };
};

export default useMediaQueries;
