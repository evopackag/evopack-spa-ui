import { useEffect, useState } from "react";

const useViewportSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);
};
