import React, { useEffect, useState } from "react";

const UseApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  // 3. useEffect
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const apps = await res.json();
      setApps(apps);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { apps, loading };
};

export default UseApps;
