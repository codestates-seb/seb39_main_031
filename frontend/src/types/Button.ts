export type ButtonType = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: string;
  hoverBackground?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
};

export type OauthButtonType = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  children?: React.ReactNode;
};
