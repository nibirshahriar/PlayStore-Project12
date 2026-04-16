import React from "react";
import AppCard from "../../components/UI/AppCard";
import { HashLoader } from "react-spinners";
import UseApps from "../../components/Hook/UseApps";

const Apps = () => {
  const { apps, loading } = UseApps();

  return (
    <div className="container mx-auto my-10">
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center">All Apps</h2>
        <p className="text-gray-400 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {apps.map((app, index) => {
            return <AppCard key={index} app={app} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Apps;
