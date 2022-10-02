import React from "react";
// eslint-disable-next-line import/named
import { CSSProp } from "styled-components";

export interface StyledButtonProps {
  customButtonStyle?: CSSProp;
}

export type ButtonType = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  hoverBackground?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
};

export type OauthButtonType = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  children?: React.ReactNode;
};

export interface BorderButtonType {
  onClick?: () => void;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

export interface IconButtonType extends StyledButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: JSX.Element;
}
