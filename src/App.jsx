import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="flex flex-1 gap-5">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
