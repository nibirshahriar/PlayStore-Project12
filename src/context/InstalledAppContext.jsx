import React, { Children, useState } from "react";
import { InstalledContxt } from "./InstalledContxt";

const InstalledAppContext = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const data = {
    installedApps,
    setInstalledApps,
  };

  return (
    <InstalledContxt.Provider value={data}>{children}</InstalledContxt.Provider>
  );
};

export default InstalledAppContext;
