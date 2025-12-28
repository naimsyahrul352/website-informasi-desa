import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  useEffect(() => {
    // hanya scroll ke atas ketika navigasi PUSH atau REPLACE
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
}
