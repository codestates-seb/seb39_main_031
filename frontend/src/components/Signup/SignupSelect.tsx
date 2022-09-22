/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import styled from "styled-components";

import {
  regionOptions,
  townOptions,
} from "../../assets/Selector/SeletorOptions";
import SignSeleForm from "../../common/Select/SignSeletForm";
import { regions } from "../../types/OptionType";

const SelectContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const SignupSelect = () => {
  const [region, setRegion] = useState<string>("");
  const [townData, setTownData] = useState<regions>([]);
  const [control, setControl] = useState<boolean>(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    if (region === "지역을 선택해주세요") {
      setControl(false);
    }

    if (region === "서울특별시") {
      const town = townOptions.filter(reg => reg["서울특별시"]);
      setTownData(town[0]["서울특별시"]);
      setControl(true);
    }

    if (region === "경기도") {
      const town = townOptions.filter(reg => reg["경기도"]);
      setTownData(town[0]["경기도"]);
      setControl(true);
    }
  }, [region]);

  return (
    <SelectContent>
      <SignSeleForm
        lableText="지역"
        datas={regionOptions}
        onChangeHandler={onChangeHandler}
        control={true}
      />
      <SignSeleForm lableText="동네" datas={townData} control={control} />
    </SelectContent>
  );
};

export default SignupSelect;
