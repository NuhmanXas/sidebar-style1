import React from "react";
import { Image } from "react-bootstrap";
import AppFlexBox from "../AppFlexBox";
import AppText from "../../FontStyle/AppText";
import { UIColorScheme } from "../../../xCodeInfo";
import styled from "styled-components";

function LoggedUserDetail({ ...props }) {
  const userInfo = {
    image: "https://via.placeholder.com/60", // Placeholder image URL
    name: "Admin",
    position: "Welcome",
  };

  return (
    <LoggedUserDetailStyle {...props}>
      <AppFlexBox flexType="d-flex" alignItems="align-items-center">
        <AppFlexBox flexType="d-flex" className="logged-user-image-container">
          <Image src={userInfo.image} roundedCircle height={60} width={60} />
        </AppFlexBox>
        <AppFlexBox flexType="d-flex" direction="flex-column">
          <AppText
            text={userInfo.name}
            textColor={UIColorScheme.sideBar.primaryFontColor}
          />
          <AppText
            text={userInfo.position}
            textColor={UIColorScheme.sideBar.secondaryFontColor}
          />
        </AppFlexBox>
      </AppFlexBox>
    </LoggedUserDetailStyle>
  );
}

export default LoggedUserDetail;

const LoggedUserDetailStyle = styled.div`
  .logged-user-img {
    height: 60px;
    width: 60px;
  }
`;
