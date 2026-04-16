import React, { useContext } from "react";
import { InstalledContxt } from "../../context/InstalledContxt";
import { toast } from "react-toastify";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstalledContxt);

  const handleUninstall = (app) => {
    const restApps = installedApps.filter((iApp) => iApp.id != app.id);
    setInstalledApps(restApps);
    toast.warning(`${app.title} is Uninstalled!`);
  };

  return (
    <div className="container mx-auto my-8">
      {installedApps.length == 0 ? (
        <h2 className="text-bold text-4xl text-center my-6">
          No installed apps found!
        </h2>
      ) : (
        installedApps.map((app, ind) => {
          return (
            <div
              key={ind}
              className="flex gap-4 items-center justify-between shadow p-4 rounded-md bg-slate-100 mb-4"
            >
              <div>
                <img src={app.image} className="h-[120px] w-auto" alt="" />
                <h2 className="font-semibold text-2xl">{app.title}</h2>
              </div>
              <button
                onClick={() => handleUninstall(app)}
                className="btn bg-secondary text-white"
              >
                Uninstall
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default InstallApps;
