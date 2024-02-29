import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";

function MultiNavigation({ info, isOutClick, className }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const { text, icon, sub } = info;

  const isActive = sub.some((item) => item.path === currentPath);

  useEffect(() => {
    if (isOutClick && isOpen) {
      setIsOpen(false);
    }
  }, [isOutClick, isOpen]);

  return (
    <MultiNavigationStyle
      className={className}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`navigation-item ${isActive ? "active" : ""}`}>
        {icon && <span className="icon">{icon}</span>}
        <span>{text}</span>
        <span className="down-arrow">
          <FaCaretDown />
        </span>
      </div>
      {isOpen &&
        sub.map(({ text, path, id }) => (
          <Link
            key={id || path}
            to={path}
            className={`sub-item nav-link ${
              currentPath === path ? "active" : ""
            }`}
          >
            {text}
          </Link>
        ))}
    </MultiNavigationStyle>
  );
}

export default MultiNavigation;

const MultiNavigationStyle = styled.div`
  /* Add your styling here */
  .navigation-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    // Add more styles as needed
  }

  .sub-item {
    display: block;
    padding-left: 15px;
    // Add more styles as needed
  }

  .down-arrow {
    margin-left: auto;
  }
`;
