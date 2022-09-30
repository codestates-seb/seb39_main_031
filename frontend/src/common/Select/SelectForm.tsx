/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import {
  regionOptions,
  townOptions,
} from "../../assets/Selector/SeletorOptions";
import { useAppDispatch } from "../../hooks/Redux";
import { signupActions } from "../../redux/signupSlice";
import { options } from "../../types/OptionType";
import Selector from "./Selector";

const SelectContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface Select {
  label1?: string;
  label2?: string;
  onSelectRegion?: React.Dispatch<React.SetStateAction<string>>;
  onSelectTown?: React.Dispatch<React.SetStateAction<string>>;
}

const SelectForm = (props: Select) => {
  const dispatch = useAppDispatch();

  const [userRegion, setUserRegion] = useState<string>("");
  const [userTown, setUserTown] = useState<string>("");

  const [townData, setTownData] = useState<options>([]);
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

    props.onSelectRegion && props.onSelectRegion(userRegion);
  }, [userRegion]);

  useEffect(() => {
    props.onSelectTown && props.onSelectTown(userTown);
  }, [userTown]);

  useEffect(() => {
    dispatch(signupActions.regionHandler({ region: userRegion }));
    dispatch(signupActions.townHandler({ town: userTown }));
  }, [userRegion, userTown]);

  return (
    <SelectContent>
      <Selector
        lableText={props.label1}
        options={regionOptions}
        onChangeHandler={onRegionHandler}
        control={true}
      />
      <Selector
        lableText={props.label2}
        options={townData}
        control={control}
        onChangeHandler={onTownHandler}
      />
    </SelectContent>
  );
};

export default SelectForm;
