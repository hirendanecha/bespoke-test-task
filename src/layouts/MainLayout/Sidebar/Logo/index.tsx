import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  background: #f3f9fe;
  height: 90px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src="/logo.png" alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;
