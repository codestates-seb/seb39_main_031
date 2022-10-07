import React, { useState } from "react";
import styled from "styled-components";

import KeywordInput from "./KeywordInput";

const KeywordBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
`;

const KeywordItem = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  column-gap: 3px;
  background: ${(props) => props.theme.colors.black100};
  padding: 5px 10px;
  font-size: ${(props) => props.theme.fontSize.size15};
  color: ${(props) => props.theme.colors.cyan700};
  border-radius: 20px;

  &:hover {
    background: ${(props) => props.theme.colors.cyan50};
  }
`;

const DeleteButton = styled.button`
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 35px;
  background: ${(props) => props.theme.colors.black400};
  color: ${(props) => props.theme.colors.white000};
  font-size: ${(props) => props.theme.fontSize.size08};

  &:hover {
    background: ${(props) => props.theme.colors.red600};
  }
`;

const Keyword = () => {
  //TODO: 임시 지역
  const region = "서울특별시";
  const town = "강남구";

  const [keywordItem, setKeywordItem] = useState("");
  const [keywordList, setKeywordList] = useState<string[]>([region, town]);

  const enterHandler = (e: any) => {
    if (e.target.value.trim() !== "" && e.key === "Enter") {
      addKeywordHandler(e);
    }
  };

  const addKeywordHandler = (e: any) => {
    const updatedList: string[] = [...keywordList];
    if (!updatedList.includes(keywordItem)) {
      updatedList.push(keywordItem);
      setKeywordList(updatedList);
      setKeywordItem("");
    }
    e.target.value = "";
  };

  const deleteKeywordHandler = (e: React.MouseEvent) => {
    const target = e.target as SVGAElement;
    const deleteItem = target.parentNode?.firstElementChild?.innerHTML;
    const filtered = keywordList.filter((item) => item !== deleteItem);
    setKeywordList(filtered);
  };

  return (
    <>
      <KeywordInput
        onChange={(e) => setKeywordItem(e.target.value)}
        onKeyUp={enterHandler}
      />
      <KeywordBox>
        {keywordList.map((item, index) => {
          return (
            <KeywordItem key={index}>
              <div>{item}</div>
              <DeleteButton onClick={deleteKeywordHandler}>X</DeleteButton>
            </KeywordItem>
          );
        })}
      </KeywordBox>
    </>
  );
};

export default Keyword;
