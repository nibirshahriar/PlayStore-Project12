import React, { use, useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  //   const apps = use(appsPromise);
  //   console.log(apps);

  //2. use loader data fetch
  //   const apps = useLoaderData();
  //   console.log("da", apps);

  const [apps, setApps] = useState([]);

  // 3. useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const apps = await res.json();
      setApps(apps);
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
        <p className="text-gray-400 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      Total apps: {apps.length}
      <div className="grid grid-cols-3 gap-5">
        {apps.map((app, index) => {
          return (
            <div key={index} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={app.image} alt={app.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <div className="flex justify-between items-center gap-4">
                  <span className="bg-green-100 text-green-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
                    <FaDownload /> {app.downloads}
                  </span>
                  <span className="bg-orange-100 text-orange-500 flex items-center gap-1  py-1 px-2 font-semibold rounded-md">
                    <FaStar /> {app.ratingAvg}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingApps;
