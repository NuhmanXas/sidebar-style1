import React, { useEffect, useRef, useState } from "react";
import SideBarNavigationDropDown from "./SideBarNavigationDropDown";
import styled from "styled-components";

function AppSideBar({
  getNavigationList,
  className,
  width = "200px",
  ...props
}) {
  const [clickedOutside, setClickedOutside] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AppSideBarStyle
      ref={wrapperRef}
      className={`col-lg-3 ${className}`}
      width={width}
    >
      <div className="sideBarContainer">
        <SideBarNavigationDropDown
          {...props}
          isOutClick={clickedOutside}
          list={getNavigationList()}
        />
      </div>
    </AppSideBarStyle>
  );
}

export default AppSideBar;

const AppSideBarStyle = styled.div`
  width: ${(props) => props.width};
`;
