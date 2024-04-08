import React from "react";

const PlayerList = () => {
  return (
    <div className="h-full">
      <div className=" bg-background border border-foreground rounded-sm h-full overflow-y-auto">
        {/* <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">
          Chats
        </h3> */}
        <h1 className="w-full dark:bg-slate-900 p-2 dark:text-white text-xl font-semibold border-b border-foreground">
          Players
        </h1>
        <div className="divide-y divide-gray-200 overflow-y-auto px-2">
          <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
            <div className="flex items-center">
              <img
                className="rounded-full items-start flex-shrink-0 mr-3 h-12 w-12"
                src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
                alt="Marie Zulfikar"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Marie Zulfikar
                </h4>
                <div className="text-[13px]">#1 · 3000 points</div>
              </div>
            </div>
          </button>
          <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
            <div className="flex items-center">
              <img
                className="rounded-full items-start flex-shrink-0 mr-3 h-12 w-12"
                src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg"
                alt="Nhu Cassel"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Nhu Cassel
                </h4>
                <div className="text-[13px]">#2 · 3000 points</div>
              </div>
            </div>
          </button>
          <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
            <div className="flex items-center">
              <img
                className="rounded-full items-start flex-shrink-0 mr-3 h-12 w-12"
                src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-03_uzwykl.jpg"
                alt="Patrick Friedman"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Patrick Friedman
                </h4>
                <div className="text-[13px]">#3 · 3000 points</div>
              </div>
            </div>
          </button>
          <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
            <div className="flex items-center">
              <img
                className="rounded-full items-start flex-shrink-0 mr-3 h-12 w-12"
                src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg"
                alt="Byrne McKenzie"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Byrne McKenzie
                </h4>
                <div className="text-[13px]">#4 · 3000 points</div>
              </div>
            </div>
          </button>
          <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
            <div className="flex items-center">
              <img
                className="rounded-full items-start flex-shrink-0 mr-3 h-12 w-12"
                src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-05_bktgmb.jpg"
                alt="Scott Micheal"
              />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Scott Micheal
                </h4>
                <div className="text-[13px]">#5 · 3000 points</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerList;
