import React from "react";
import styled from "styled-components";

const LayoutStyle = styled.main`
  height: 100vh;
  background: linear-gradient(
    200deg,
    ${(p) => p.theme.primary[1]} 0%,
    ${(p) => p.theme.primary[2]} 100%
  );
  padding-top: ${(p) => p.paddingTop};
  padding-left: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Layout = ({ children, ...rest }) => {
  return <LayoutStyle {...rest}>{children}</LayoutStyle>;
};
