/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import styled from "styled-components";

import {
  regionOptions,
  townOptions,
} from "../../assets/Selector/SeletorOptions";
import SignSeleForm from "../../common/Select/SignSeletForm";
import { useAppDispatch } from "../../hooks/Redux";
import { signupActions } from "../../redux/signupSlice";
import { regions } from "../../types/OptionType";

const SelectContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const SignupSelect = () => {
  const dispatch = useAppDispatch();

  const [userRegion, setUserRegion] = useState<string>("");
  const [userTown, setUserTown] = useState<string>("");

  const [townData, setTownData] = useState<regions>([]);
  const [control, setControl] = useState<boolean>(false);

  const onRegionHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserRegion(event.target.value);
  };

  const onTownHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserTown(event.target.value);
  };

  useEffect(() => {
    if (userRegion === "지역을 선택해주세요") {
      setControl(false);
    }

    if (userRegion === "서울특별시") {
      const town = townOptions.filter(reg => reg["서울특별시"]);
      setTownData(town[0]["서울특별시"]);
      setControl(true);
    }

    if (userRegion === "경기도") {
      const town = townOptions.filter(reg => reg["경기도"]);
      setTownData(town[0]["경기도"]);
      setControl(true);
    }
  }, [userRegion]);

  useEffect(() => {
    dispatch(signupActions.regionHandler({ region: userRegion }));
    dispatch(signupActions.townHandler({ town: userTown }));
  }, [userRegion, userTown]);

  return (
    <SelectContent>
      <SignSeleForm
        lableText="지역"
        datas={regionOptions}
        onChangeHandler={onRegionHandler}
        control={true}
      />
      <SignSeleForm
        lableText="동네"
        datas={townData}
        control={control}
        onChangeHandler={onTownHandler}
      />
    </SelectContent>
  );
};

export default SignupSelect;
