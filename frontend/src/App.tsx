import { ReactQueryDevtools } from "react-query/devtools";

import RoutesTree from "./RoutesTree";

const App = () => {
  return (
    <>
      <RoutesTree />
      <ReactQueryDevtools />
    </>
  );
};

export default App;
