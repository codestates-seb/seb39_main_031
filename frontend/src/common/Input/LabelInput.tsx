import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  -webkit-appearance: none;
  display: block;
  background: white;
  color: ${({ theme }) => theme.colors.black900};
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black400};

  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 10px;

  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${({ theme }) => theme.colors.cyan400};
    transition: all 0.2s ease;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  ${Input}:focus ~ .bar:before, ${Input}:focus ~ .bar:after {
    width: 50%;
  }

  ${Input}:focus ~ .bar {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: ${({ theme }) => theme.colors.cyan400};
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

const Label = styled.label<{ left?: string }>`
  color: ${({ theme }) => theme.colors.black500};
  font-size: 15px;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 10px;
  transition: all 0.2s ease;

  ${Input}:focus ~ &, ${Input}.used ~ & {
    top: -15px;
    left: ${({ left }) => (left ? left : "-2px")};
    transform: scale(0.8);
    color: ${({ theme }) => theme.colors.cyan700};
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  lableText?: string;
  left?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({ lableText, left, ...props }: Props) => {
  const [className, setClassName] = useState("");

  const bluerHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value) {
      setClassName("used");
    } else {
      setClassName("");
    }
  };

  return (
    <Container>
      <Input className={className} onBlur={bluerHandler} {...props} />
      <span className="highlight"></span>
      <span className="bar"></span>
      <Label left={left}>{lableText}</Label>
    </Container>
  );
};

export default LabelInput;
