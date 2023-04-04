import fetchCategory from "../controllers/filters/filter.fetch.category";

const Filters = () => {
  fetchCategory();
  return (
    <div id="filters" className="flex justify-center flex-wrapº">
      <div
        id="burger-container"
        className=" w-full bg-blue-gray-100 p-4 pl-8 flex leading-loose z-20"
      >
        <label htmlFor="burger" className="burger">
          <input id="burger" className="closed " type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <h1 className="text-2xl font-bold pl-4">Filters</h1>
      </div>

      <div
        id="filter-container"
        className="w-full bg-white h-70 rounded-b-lg flex z-10 absolute"
      >
        <div
          id="filter-options"
          className="p-4 flex flex-col leading-loose border-r-4 border-opacity-100 w-2/4 rounded-bl-lg text-xl"
        >
          <div className="filter-item transition-all hover:scale-110 w-full">
            <button id="filter-components" value="Components">Components</button>
          </div>
          <div className="filter-item transition-all hover:scale-110 w-full">
            <button id="filter-pc" value="PC">PC</button>
          </div>
          <div className="filter-item transition-all hover:scale-110 w-full">
            <button id="filter-laptops" value="Laptops">Laptops</button>
          </div>
          <div className="filter-item transition-all hover:scale-110 w-full">
            <button id="filter-smartphones" value="Smartphones">Smartphones</button>
          </div>
          <div className="filter-item transition-all hover:scale-110 w-full">
            <button id="filter-tv" value="TV">TV</button>
          </div>
          <div className="filter-item transition-all hover:scale-110 w-full">
            <button id="filter-music" value="Music">Music</button>
          </div>
        </div>
        <div
          id="filter-checks"
          className="p-4 flex flex-col leading-loose border-r-4 border-opacity-100 w-2/4 rounded-bl-lg text-xl overflow-y-auto"
        >
          
        </div>
      </div>
    </div>
  );
};

export default Filters;
