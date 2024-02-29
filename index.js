import React, { useEffect, useRef, useState } from "react";
import SideBarNavigationDropDown from "./SideBarNavigationDropDown";
import styled from "styled-components";

/**
 * AppSideBar Component
 * 
 * Renders a sidebar navigation for an application. It includes functionality to detect clicks outside
 * of the sidebar and close it accordingly. The sidebar's width can be customized through props. The component
 * uses a `getNavigationList` function to retrieve the list of navigation items, where each item is an object
 * that may represent a single navigation link or a group of links (with sub-items).
 *
 * @param {Object} props - The props for the AppSideBar component.
 * @param {Function} props.getNavigationList - A function that returns an array of navigation items.
 *   Each navigation item is an object with the following properties:
 *   - text (string): The display text for the navigation item.
 *   - icon (React.Component): A React component representing the icon for the navigation item.
 *   - path (string, optional): The route/path for the navigation link.
 *   - sub (Array<Object>, optional): An array of sub-items for nested navigation links, following the same structure.
 * @param {string} [props.className] - Optional additional CSS class names to apply to the sidebar.
 * @param {string} [props.width='200px'] - Optional width for the sidebar, default is '200px'.
 * @param {...Object} rest - Any additional props that will be passed down to the SideBarNavigationDropDown component.
 * 
 * @returns {React.ReactElement} The rendered JSX for the AppSideBar component.
 *
 * @example
 * // Example usage of AppSideBar
 * <AppSideBar getNavigationList={TempNavList} width="250px" className="my-sidebar" />
 */

function AppSideBar({
  getNavigationList,
  className, // Consider renaming for clarity, e.g., `additionalClasses`
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
  }, []); // Runs only once when the component mounts

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
