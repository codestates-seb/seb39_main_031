import styled from "styled-components";

import { OauthButtonType } from "../../types/Button";

const OauthButton = styled.button<OauthButtonType>`
  width: ${({ width }) => (width ? width : "50px")};
  height: ${({ height }) => (height ? height : "50px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ({ theme }) => theme.colors.black300};
  border: none;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "100%"};
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OauthButtonForm: React.FC<OauthButtonType> = ({ ...props }) => {
  return <OauthButton {...props}>{props.children}</OauthButton>;
};

export default OauthButtonForm;
