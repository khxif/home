import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ScrollToTop({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
}
