/* eslint-disable prettier/prettier */
import styled from "styled-components";

import { regions } from "../../types/OptionType";

const SelectorContainer = styled.div`
  width: 45%;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
`;

interface Data extends React.SelectHTMLAttributes<HTMLSelectElement> {
  lableText?: string;
  datas?: regions;
  onChangeHandler?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  control?: boolean;
}

const Selector: React.FC<Data> = ({
  lableText,
  datas,
  onChangeHandler,
  control,
  ...props
}) => {
  if (!control) {
    return (
      <SelectorContainer>
        <label>{lableText}</label>
        <Select disabled>
          <option>동네를 선택해주세요</option>
        </Select>
      </SelectorContainer>
    );
  }
  return (
    <SelectorContainer>
      <label>{lableText}</label>
      <Select onChange={onChangeHandler}>
        {datas &&
          datas.map(data => (
            <option key={data.value} value={data.value}>
              {data.name}
            </option>
          ))}
      </Select>
    </SelectorContainer>
  );
};

export default Selector;
