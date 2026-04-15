import React from "react";
import { useParams } from "react-router";
import UseApps from "../../components/Hook/UseApps";

const AppDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const { apps, loading } = UseApps();

  const expectedApp = apps.find((app) => String(app.id) === id);
  //   console.log(expectedApp);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!expectedApp) {
    return <div className="text-center mt-10">App not found</div>;
  }
  return (
    <div className="container mx-auto">
      <div className="shadow p-6 space-y-2 text-center">
        <img src={expectedApp.image} alt="" className="mx-auto" />
        <h2 className="font-semibold text-3xl">{expectedApp.title}</h2>
        <p>
          Developed By:{" "}
          <span className="font-semibold text-3xl">
            {expectedApp.companyName}
          </span>
        </p>
        <button className="btn bg-purple-500 text-white">Install Now</button>
      </div>
    </div>
  );
};

export default AppDetails;
