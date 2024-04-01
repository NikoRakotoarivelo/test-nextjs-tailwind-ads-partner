function Flag() {
  return (
    <div className="flex flex-wrap bg-gray-300 overflow-hidden">
      <div className="flex w-full justify-around">
        <div className="w-3/4 mx-12 h-auto my-12"></div>

        <div className="my-12 w-full border-6 grid grid-cols-3">
          <div className="bg-blue-500 h-1"></div>
          <div className="bg-white h-1"></div>
          <div className="bg-red-500 h-1"></div>
        </div>

        <div className="flex flex-wrap justify-between items-center w-full"></div>
      </div>
    </div>
  );
}
export default Flag;
