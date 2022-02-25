import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Link from "../../components/base/Link/Link";
import Button from "../base/Buttons/Button";
import Text, { TextSize, TextWeight } from "../base/Text/Text";

import "./Header.css";

interface IProps {
  data: any[];
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
      <NavLink
        to={`/`}
        // className={({ isActive }) => (isActive ? "link link--active" : "link")}
        key={"homepageLink"}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/Evopack_GreenLogoBlueWritingHorizontal.svg`}
          alt=""
        />
      </NavLink>

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
                return (
                  <li
                    className="navlink__container row align-center justify-center"
                    key={link}
                  >
                    <NavLink
                      to={`${link.urlPath}`}
                      className={({ isActive }) =>
                        isActive ? "link link--active" : "link"
                      }
                      key={link.label}
                    >
                      <Text size={TextSize.sm} weight={TextWeight.medium}>
                        {link.label}
                      </Text>
                    </NavLink>
                  </li>
                );
              })}
              <li className="navlink__container row" key="closeMobileMenu">
                <Button
                  label="Close Menu"
                  handleClick={() => setMobileMenu(!mobileMenu)}
                  type="primary-green"
                />
              </li>
            </ul>
          ) : null}
        </nav>
      ) : (
        <nav className="header__links">
          {data.map((link) => {
            return (
              <>
                <NavLink
                  to={`${link.urlPath}`}
                  className={({ isActive }) =>
                    isActive ? "link link--active" : "link"
                  }
                  key={link.label}
                >
                  <Text size={TextSize.sm} weight={TextWeight.medium}>
                    {link.label}
                  </Text>
                  <div className="link__underline">
                    <img
                      className="link__underlineImage"
                      src={`${process.env.PUBLIC_URL}link-underline.svg`}
                      alt=""
                    />
                  </div>
                </NavLink>
              </>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
