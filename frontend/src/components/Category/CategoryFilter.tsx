/* eslint-disable prettier/prettier */
import { useRef } from "react";
import styled from "styled-components";

import { categories } from "./Categories";
import CategoryButton from "./CategoryButton";
import CategorySlideButton from "./CategorySlideButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 30px;
  z-index: 1;
  padding-bottom: 1em;
  margin-bottom: 6em;
  border-bottom: 1px solid ${(props) => props.theme.colors.black300};
`;

const CategoryList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  padding: 5px 30px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LeftBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: -100;
  z-index: 2;
  height: 100%;
`;

const RightBtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  height: 100%;
`;

interface Props {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryFilter = ({ selected, setSelected }: Props) => {
  const slideRef = useRef<HTMLDivElement>(null);

  const leftHandler = () => {
    if (!slideRef.current) {
      return;
    }

    const slider = slideRef.current;
    if (slider.scrollLeft === 0) {
      slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
      return;
    }
    slider.scrollLeft -= 300;
  };

  const rightHandler = () => {
    if (!slideRef.current) {
      return;
    }

    const slider = slideRef.current;
    if (slider.scrollLeft === slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
      return;
    }
    slider.scrollLeft += 300;
  };

  return (
    <Container>
      <LeftBtnBox>
        <CategorySlideButton direction="left" onClick={leftHandler} />
      </LeftBtnBox>
      <RightBtnBox>
        <CategorySlideButton direction="right" onClick={rightHandler} />
      </RightBtnBox>
      <CategoryList ref={slideRef}>
        {categories.map((item, index) => {
          return (
            <CategoryButton
              key={index}
              className={selected === item.label ? "active" : ""}
              onClick={() => setSelected(item.label)}
              label={item.label}
              icon={item.icon}
            />
          );
        })}
      </CategoryList>
    </Container>
  );
};

export default CategoryFilter;
