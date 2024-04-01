function OptionsAdditionnels() {
  return (
    <div className="flex flex-wrap bg-gray-300 overflow-hidden">
      <div className="flex w-full justify-around">
        <div className="w-1/3 mx-12 h-auto my-12"></div>
        <div className="my-8 w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-auto mb-6 md:mb-0 md:mr-8">
              <p>
                <input
                  type="checkbox"
                  className="mr-4 appearance-none rounded-full border-2 bg-white w-5 h-5 checked:bg-colorButtonHeader checked:border-white"
                />
                <label className="text-lg">
                  Options additionnels{" "}
                  <span className="text-sm text-gray-400">(plus value)</span>
                </label>
              </p>
              <p className="mb-2 md:mb-0 text-sm">Vitrage</p>
              <div>
                <select className="border-2 rounded-lg border-gray-500">
                  <option>Vitrage imprimé thermique GA</option>
                  <option>Vitrage imprimé thermique GA</option>
                  <option>Vitrage imprimé thermique GA</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center w-full"></div>
      </div>
    </div>
  );
}
export default OptionsAdditionnels;
