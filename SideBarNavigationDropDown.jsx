import React, { useEffect } from "react";
import styled from "styled-components";
import SingleNavigation from "./SingleNavigation"; 
import MultiNavigation from "./MultiNavigation"; 
import NavTitle from "./NavTitle"; 

function SideBarNavigationDropDown({ list, isOutClick, className, ...props }) {
  useEffect(() => console.log(isOutClick), [isOutClick]);

  const renderNavItem = (item, index) => {
    if (item.path) {
      return <SingleNavigation key={item.id || index} info={item} />;
    } else if (item.sub) {
      return (
        <MultiNavigation
          isOutClick={isOutClick}
          key={item.id || index}
          info={item}
        />
      );
    } else {
      return <NavTitle key={item.id || index} text={item.text} />;
    }
  };

  return (
    <SideBarDropDownStyle className={className} {...props}>
      {list.map(renderNavItem)}
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
