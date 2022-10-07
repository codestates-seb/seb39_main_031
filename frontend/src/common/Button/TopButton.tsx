import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  visibility: hidden;
  cursor: pointer;
  border-radius: 50px;
  background: #fff;
  height: 0px;
  width: 0px;
  color: transparent;
  position: fixed;
  border: none;
  right: 80px;
  bottom: 75px;
  outline: none;
  z-index: 99;
  transition: all 0.3s ease-in-out;

  &.show {
    display: block;
    visibility: visible;
    color: ${(props) => props.theme.colors.cyan400};
    font-size: 27px;
    font-weight: 900;
    right: 45px;
    bottom: 50px;
    height: 50px;
    width: 50px;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  }

  &.show:active {
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
  }
`;

const TopButton = () => {
  const [className, setClassName] = useState("");

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setClassName("show");
      } else {
        setClassName("");
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  const moveToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <Button className={className} onClick={moveToTop}>
      <FaChevronUp />
    </Button>
  );
};

export default TopButton;
