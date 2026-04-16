import React, { useContext } from "react";
import { InstalledContxt } from "../../context/InstalledContxt";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledContxt);
  return (
    <div className="container mx-auto my-8">
      {installedApps.map((app, ind) => {
        return (
          <div
            key={ind}
            className="flex gap-4 items-center shadow p-4 rounded-md bg-slate-100 mb-4"
          >
            <img src={app.image} className="h-[120px] w-auto" alt="" />
            <h2 className="font-semibold text-2xl">{app.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default InstallApps;
