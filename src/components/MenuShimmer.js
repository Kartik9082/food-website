import React from "react";

const MenuShimmer = () => {
  return (
    <div className="flex flex-wrap gap-8 mt-5 justify-center">
      {Array(5)
        .fill("")
        .map((_, idx) => (
          <div key={idx} className="w-9/12 h-40 bg-gray-300 text-center">
          </div>
        ))}
    </div>
  );
};

export default MenuShimmer;