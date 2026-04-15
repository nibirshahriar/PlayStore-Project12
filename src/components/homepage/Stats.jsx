import React from 'react';

const Stats = () => {
    return (
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 py-16 text-white text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          {/* Stat 1 */}
          <div>
            <p className="text-sm text-gray-200 mb-2">Total Downloads</p>
            <h3 className="text-4xl font-extrabold">29.6M</h3>
            <p className="text-xs text-gray-300 mt-1">
              21% More Than Last Month
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-sm text-gray-200 mb-2">Total Reviews</p>
            <h3 className="text-4xl font-extrabold">906K</h3>
            <p className="text-xs text-gray-300 mt-1">
              46% More Than Last Month
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-sm text-gray-200 mb-2">Active Apps</p>
            <h3 className="text-4xl font-extrabold">132+</h3>
            <p className="text-xs text-gray-300 mt-1">31 More Will Launch</p>
          </div>
        </div>
      </div>
    );
};

export default Stats;