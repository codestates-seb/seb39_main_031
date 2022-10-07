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
  margin: 0 2em 6em 2em;
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
  right: calc(100% - 30px);
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
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
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
    slider.scrollLeft -= 200;
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
    slider.scrollLeft += 200;
  };

  return (
    <Container>
      <LeftBtnBox>
        <CategorySlideButton direction="left" onClick={leftHandler} />
      </LeftBtnBox>
      <CategoryList ref={slideRef}>
        {categories.map((item, index) => {
          return (
            <CategoryButton
              key={index}
              className={selected === index ? "active" : ""}
              onClick={() => setSelected(index)}
              label={item.label}
              icon={item.icon}
            />
          );
        })}
      </CategoryList>
      <RightBtnBox>
        <CategorySlideButton direction="right" onClick={rightHandler} />
      </RightBtnBox>
    </Container>
  );
};

export default CategoryFilter;
