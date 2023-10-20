const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-5 w-full justify-center">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-56 h-[415px]  bg-gray-300 rounded-lg"></div>
        ))}
    </div>
  );
};

export default Shimmer;




