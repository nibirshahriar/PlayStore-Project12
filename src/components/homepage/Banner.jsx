import React from "react";
import bannerIMG from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="min-h-[50vh] text-center space-y-6 pt-[50px]">
      <h2 className="font-bold text-6xl">
        We Build <br /> <span className="text-purple-500">Productive</span> Apps
      </h2>
      <p className="text-gray-500 max-w-[50%] mx-auto">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center gap-2 ">
        <button className="btn">Play Store</button>
        <button className="btn">App Store</button>
      </div>
      <img className="mx-auto" src={bannerIMG} alt="" />
    </div>
  );
};

export default Banner;
