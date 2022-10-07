import styled from "styled-components";

const CardContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "100%")};
  padding: ${({ padding }) => (padding ? padding : "16px")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  border-radius: 4px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "white"};
  border: 1px solid ${(props) => props.theme.colors.black200}; ;
`;

interface Props {
  width?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const Card = ({ children, ...props }: Props) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};

export default Card;
