import React, { useEffect } from "react";
import styled from "styled-components";
import SingleNavigation from "./SingleNavigation"; // Ensure this component is correctly imported
import MultiNavigation from "./MultiNavigation"; // Ensure this component is correctly imported
import NavTitle from "./NavTitle"; // Ensure this component is correctly imported

function SideBarNavigationDropDown({ list, isOutClick, className, ...props }) {
  useEffect(() => console.log(isOutClick), [isOutClick]);

  return (
    <SideBarDropDownStyle className={className} {...props}>
      {list.map((item, index) =>
        item.path ? (
          <SingleNavigation key={index} info={item} />
        ) : item.sub ? (
          <MultiNavigation isOutClick={isOutClick} key={index} info={item} />
        ) : (
          <NavTitle key={index} text={item.text} />
        )
      )}
    </SideBarDropDownStyle>
  );
}

export default SideBarNavigationDropDown;

const SideBarDropDownStyle = styled.div`
  /* Add your styling here */
  padding-left: 15px;

  .nav-link,
  .navigation-item {
    padding: 5px;
    text-decoration: none;
    color: black;
    text-align: left;
  }

  .icon {
    padding-right: 8px;
  }
`;
