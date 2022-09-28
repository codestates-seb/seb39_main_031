/* eslint-disable prettier/prettier */
import styled from "styled-components";

import { options } from "../../types/OptionType";

const SelectorContainer = styled.div`
  width: 100%;
  > label {
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fontSize.size15};
  }
  margin-bottom: 2rem;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  padding: 5px 12px;
`;

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  lableText?: string;
  options?: options;
  onChangeHandler?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategorySelector: React.FC<Props> = ({
  lableText,
  options,
  onChangeHandler,
}) => {
  return (
    <SelectorContainer>
      <label>{lableText}</label>
      <Select onChange={onChangeHandler} placeholder="카테고리를 선택해주세요.">
        {options &&
          options.map(data => (
            <option key={data.value} value={data.value}>
              {data.name}
            </option>
          ))}
      </Select>
    </SelectorContainer>
  );
};

export default CategorySelector;
