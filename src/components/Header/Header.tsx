import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Link from "../../components/base/Link/Link";
import { Languages } from "../../contexts/VisitorContext/VisitorContext";
import useOutsideAlerter from "../../hooks/useClickOutsideEffect/useClickOutsideEffect";
import Button from "../base/Buttons/Button";
import Icon from "../base/Icon/Icon";
import VerticalSpacing from "../base/Spacing/VerticalSpacing";
import Text, { TextColour, TextSize, TextWeight } from "../base/Text/Text";
import Toggle from "../base/Toggle/Toggle";

import "./Header.css";

interface IProps {
  data: any[];
  scrollToFunction?: any;
  refs?: any;
}

const Header = ({ data, refs }: IProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const globalHeader = useRef(null);

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

  useOutsideAlerter(globalHeader, setMobileMenu, false);

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

  const contactOptionsData = [
    { label: "Email", href: "mailto:info@evopack.tech", icon: "mail" },
    { label: "Call Us", href: "tel:+417921452239", icon: "phone" },
  ];

  return (
    <header className="header col-xs-12" ref={globalHeader}>
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
        <Toggle
          options={[
            {
              displayText: "EN",
              value: Languages.English,
            },
            {
              displayText: "DE",
              value: Languages.German,
            },
          ]}
          toggleTop
        />
      ) : null}

      {isMobile ? (
        <nav
          className={`${
            mobileMenu ? "header__mobileMenuCloseButton" : null
          } header__mobileMenu`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <div className="header__mobileMenuLinks">
              <NavLink
                to={`/`}
                // className={({ isActive }) => (isActive ? "link link--active" : "link")}
                key={"homepageLink"}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Evopack_GreenLogoWhiteWritingHorizontal.svg`}
                  alt=""
                />
              </NavLink>
              <VerticalSpacing size="md" />
              <ul className="header__navigationGroup">
                <div className="header__navigationGroupHeader">
                  <Text size={TextSize.sm} color={TextColour.greyBlue}>
                    Pages
                  </Text>
                </div>

                {data.map((link) => {
                  return (
                    <li
                      className="navlink__container align-center justify-center"
                      key={link.label}
                    >
                      <NavLink
                        to={`${link.urlPath}`}
                        className={({ isActive }) =>
                          isActive
                            ? "link row between-xs link--active"
                            : "link between-xs row"
                        }
                        key={link.label}
                      >
                        <Text size={TextSize.md} weight={TextWeight.regular}>
                          {link.label}
                        </Text>
                        <Icon size="sm" icon="chevron-right--white" />
                      </NavLink>
                    </li>
                  );
                })}
                <VerticalSpacing size="md" />
              </ul>
              <ul className="header__navigationGroup">
                <div className="header__navigationGroupHeader">
                  <Text size={TextSize.sm} color={TextColour.greyBlue}>
                    Contact Us
                  </Text>
                </div>
                {contactOptionsData.map((link) => {
                  return (
                    <li
                      className="navlink__container align-center justify-center"
                      key={link.label}
                    >
                      <Link
                        href={`${link.href}`}
                        className={"link between-xs row"}
                        key={link.label}
                      >
                        <Text size={TextSize.md} weight={TextWeight.regular}>
                          {link.label}
                        </Text>
                        <Icon size="sm" icon={link.icon} />
                      </Link>
                    </li>
                  );
                })}
                <VerticalSpacing size="md" />
              </ul>
              <div className="navlink__container row" key="closeMobileMenu">
                <Button
                  label="Close Menu"
                  handleClick={() => setMobileMenu(!mobileMenu)}
                  type="secondary-white"
                  icon="close--white"
                />
              </div>
            </div>
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
                  <Text size={TextSize.sm} weight={TextWeight.semibold}>
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
      {isMobile ? null : (
        <Toggle
          options={[
            {
              displayText: "EN",
              value: Languages.English,
            },
            {
              displayText: "DE",
              value: Languages.German,
            },
          ]}
          toggleTop
        />
      )}
    </header>
  );
};

export default Header;
