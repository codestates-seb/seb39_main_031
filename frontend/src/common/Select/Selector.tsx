/* eslint-disable prettier/prettier */
import styled from "styled-components";

import { options } from "../../types/OptionType";

const SelectorContainer = styled.div`
  width: 48%;
  border-radius: 5px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  height: 2rem;
  margin-top: 1rem;
`;

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  lableText?: string;
  options?: options;
  onChangeHandler?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  control?: boolean;
}

const Selector: React.FC<Props> = ({
  lableText,
  options,
  onChangeHandler,
  control,
}) => {
  return (
    <SelectorContainer>
      <label>{lableText}</label>
      {control ? (
        <Select onChange={onChangeHandler}>
          {options &&
            options.map(data => (
              <option key={data.value} value={data.value}>
                {data.name}
              </option>
            ))}
        </Select>
      ) : (
        <Select disabled>
          <option>동네를 선택해주세요</option>
        </Select>
      )}
    </SelectorContainer>
  );
};

export default Selector;
