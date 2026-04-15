import React from "react";

import { Link } from "react-router";
import AppCard from "../UI/AppCard";
import { HashLoader } from "react-spinners";
import UseApps from "../Hook/UseApps";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  //   const apps = use(appsPromise);
  //   console.log(apps);

  //2. use loader data fetch
  //   const apps = useLoaderData();
  //   console.log("da", apps);

  //   const [apps, setApps] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   // 3. useEffect
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("/data.json");
  //       const apps = await res.json();
  //       setApps(apps);
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, []);

  const { apps, loading } = UseApps();
  return (
    <div className="container mx-auto my-6">
      <div className="my-8">
        <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
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
          {apps.slice(0, 9).map((app, index) => {
            return <AppCard key={index} app={app} />;
          })}
        </div>
      )}
      <div className="text-center mt-4">
        <Link to={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
