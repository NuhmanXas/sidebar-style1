import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SingleNavigation({ info, className }) {
  // Destructuring with defaults to handle missing info
  const { text = "", path = "#", icon = null } = info || {};

  return (
    <StyledSingleNavigation className={className}>
      <Link to={path} className="nav-link">
        {icon && <span className="icon">{icon}</span>}
        <span className="text">{text}</span>
      </Link>
    </StyledSingleNavigation>
  );
}

export default SingleNavigation;

const StyledSingleNavigation = styled.div`
  /* Add your styling here */
  .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit; // Set your color here

    .icon {
      /* Styling for the icon */
    }

    .text {
      /* Additional styling for text */
    }
  }

  &:hover {
    /* Styles for hover state */
  }
`;
