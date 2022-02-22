import { useEffect, useState } from "react";
import Link from "../../components/base/Link/Link";

import "./Header.css";

interface IProps {
  data: string[];
  scrollToFunction?: any;
  refs?: any;
}

const Header = ({ data, refs }: IProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const vw: number = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const vh: number = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  enum deviceSize {
    mobile = "mobile",
    tablet = "tablet",
    desktop = "desktop",
    largeDesktop = "largeDesktop",
  }

  // const useViewportSize = () => {
  //   useEffect(() => {
  //     if (window.innerWidth > 768) {
  //       setMobileMenu(false);
  //     } else if (window.innerWidth <= 768) {
  //       setMobileMenu(true);
  //     }
  //   }, []);
  // };

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMobile(false);
    } else if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenu(false);
        setIsMobile(false);
      } else if (window.innerWidth <= 768) {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header col-xs-12">
      <img
        src={`${process.env.PUBLIC_URL}/assets/Evopack_GreenLogoBlueWritingHorizontal.svg`}
        alt=""
      />

      {isMobile ? (
        <nav
          className={`${
            mobileMenu ? "header__mobileMenuCloseButton" : null
          } header__mobileMenu`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <ul className="header__mobileMenuLinks">
              {data.map((link) => {
                return <Link label={link} />;
              })}
            </ul>
          ) : null}
        </nav>
      ) : (
        <nav className="header__links">
          {data.map((link) => {
            return <Link label={link} />;
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
