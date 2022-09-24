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
  return (
    <PageHeader>
      <h1>공동구매</h1>
      <DataSelector>
        <SelectForm />
      </DataSelector>
    </PageHeader>
  );
};

export default GroupPageHeader;
