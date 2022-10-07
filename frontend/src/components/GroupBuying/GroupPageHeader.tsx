/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import SelectForm from "../../common/Select/SelectForm";

const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  padding: 15px 0;

  > h1 {
    margin: 0;
  }
`;

const DataSelector = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

const GroupPageHeader = () => {
  const [selectRegion, setSelectRegion] = useState<string>("");
  const [selectTown, setSelectTown] = useState<string>("");
  const navigation = useNavigate();

  useEffect(() => {
    navigation(`/groupbuying/${selectRegion}`);
  }, [selectRegion]);

  useEffect(() => {
    navigation(`/groupbuying/${selectRegion}/${selectTown}`);
  }, [selectTown]);

  return (
    <PageHeader>
      <h1>공동구매</h1>
      <DataSelector>
        <SelectForm
          onSelectRegion={setSelectRegion}
          onSelectTown={setSelectTown}
        />
      </DataSelector>
    </PageHeader>
  );
};

export default GroupPageHeader;
