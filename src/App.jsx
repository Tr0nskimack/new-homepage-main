import React from "react";

const App = () => {
  return (
    <div className="min-h-screen w-[1440px] mx-auto transition-all p-20">
      <header>
        <div className="flex justify-between items-center pr-[40px]">
          <img src="/logo.svg" className="w-[50px]" alt="" />
          <div>
            <ul className="flex gap-[60px] text-sm items-center  ">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">New</li>
              <li className="cursor-pointer">Popular</li>
              <li className="cursor-pointer">Trending</li>
              <li className="cursor-pointer">Categories</li>
            </ul>
          </div>
        </div>
      </header>

      {/* content */}
      <div className="flex gap-7 mt-10 ">
        {/* content */}
        <div className="w-2/3 ">
          <div>
            <img src="image-web-3-desktop.jpg" alt="" />
          </div>
          {/* article */}
          <div className="flex mt-3  ">
            <div className="w-[400px] p-4">
              <h1 className="text-6xl font-extrabold">
                The Bright <br />
                Future of <br /> Web 3.0?
              </h1>
            </div>
            <div className="flex px-11 justify-around flex-col w-[400px]">
              <p className="text-sm font-semibold text-gray-400 leading-6">
                We dive into the next evolution of the web that claims to put
                the power of the plattforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className=" uppercase w-[230px] py-2 tracking-widest text-white bg-[#f15e50] hover:bg-black transition-all">
                read more
              </button>
            </div>
          </div>
        </div>

        {/* aside */}
        <div className="w-[360px] h-[551px] bg-black text-gray-500 p-4  text-3xl">
          <div>
            <h1 className="font-bold text-[#e9ab53]">New</h1>
          </div>
          <div className="mt-3">
            <h1 className="text-white text-[20px] font-semibold hover:text-[#e9ab53] cursor-pointer">
              Hydrogen VS Electric Cars
            </h1>
            <p className="text-[18px]">
              Will Hydrogen-fueled cars ever catch up to EVs?
            </p>
            <hr className="mt-3"></hr>
          </div>
          <div className="mt-3">
            <h1 className="text-white text-[20px] font-semibold hover:text-[#e9ab53] cursor-pointer">
              The Downsides of Al Artistry
            </h1>
            <p className="text-[18px]">
              What are the possible adverse effects of on-demand Al image
              generation?
            </p>
            <hr className="mt-3"></hr>
          </div>
          <div className="mt-3">
            <h1 className="text-white text-[20px] font-semibold hover:text-[#e9ab53] cursor-pointer">
              Is VC Funding Drying Up?
            </h1>
            <p className="text-[18px] ">
              Private funding by VC firms is down 50$ YOY. We take a look at
              what that means.
            </p>
            <hr className="mt-3"></hr>
          </div>
        </div>
      </div>
      {/* card footer content */}
      <div className=" flex gap-20 mt-6">
        {/* card invididual */}
        <div className="flex gap-4 w-[360px]">
          <div>
            <img src="image-retro-pcs.jpg" className="w-[240px]" alt="" />
          </div>
          <div className="flex justify-around flex-col">
            <span className="text-4xl text-gray-300 font-bold">01</span>
            <h1 className="font-bold text-md hover:text-[#f15e50] cursor-pointer">
              Reviving Retro Pcs
            </h1>
            <p className="text-xs text-gray-400">
              What happens when old PCs are given modern upgrade?
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-[360px]">
          <div>
            <img src="image-top-laptops.jpg" className="w-[220px]" alt="" />
          </div>
          <div className="flex flex-col justify-between ">
            <span className="text-4xl text-gray-300 font-bold">02</span>
            <h1 className="font-bold text-md hover:text-[#f15e50] cursor-pointer">
              Top 10 Laptops 2022
            </h1>
            <p className="text-xs text-gray-400">
              Our best picks for various needs and budgets
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-[360px]">
          <div>
            <img src="image-gaming-growth.jpg" className="w-[260px]" alt="" />
          </div>
          <div className="flex flex-col justify-between ">
            <span className="text-4xl text-gray-300 font-bold">03</span>
            <h1 className="font-bold text-md hover:text-[#f15e50] cursor-pointer">
              The Growth of Gaming
            </h1>
            <p className="text-xs text-gray-400">
              How the pandemic has sparked fresh opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
