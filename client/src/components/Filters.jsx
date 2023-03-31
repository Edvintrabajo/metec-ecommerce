const Filters = () => {
    return(
    <div id="filters" className="flex justify-center flex-wrap">
        <div className=" w-full bg-slate-200 p-4 pl-8 flex leading-loose">
            <label htmlFor="burger" className="burger">
                <input id="burger" className="closed" type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
            </label>
            <h1 className="text-2xl font-bold pl-4">Filters</h1>
        </div>
        
        <div id="filter-container" className="w-4/5 bg-white h-70 rounded-b-lg hidden">
            <div id="filter-options" className="p-4 flex flex-col leading-loose border-r-4 border-opacity-100 w-2/4 rounded-bl-lg text-xl">
                <div className="filter-item w-full">
                    <button id="filter-components">Components</button>
                </div>
                <div className="filter-item w-full">
                    <button id="filter-pc">PC</button>
                </div>
                <div className="filter-item w-full">
                    <button id="filter-laptops">Laptops</button>
                </div>
                <div className="filter-item w-full">
                    <button id="filter-smartphones">Smartphones</button>
                </div>
                <div className="filter-item w-full">
                    <button id="filter-tv">TV</button>
                </div>
                <div className="filter-item w-full">
                    <button id="filter-gaming">Gaming</button>
                </div>
                <div className="filter-item w-full">
                    <button id="filter-Setup">Setup</button>
                </div>
            </div>
            <div id="filter-checks" className="w-2/4 flex flex-col leading-loose overflow-y-scroll p-4">
                <button href="" className="w-3/4 border-none shadow-low-box-shadow p-1 ml-2 mb-2 pl-3 text-left hover:scale-110 hover:shadow-high-box-shadow transition-all">Test 1</button>
            </div>
        </div>
    </div>
    )
}

export default Filters