import { useEffect } from "react";
import Character from "./Character";
import { useUserStore, useApplicationStore } from "@/store/store";
import axios from "axios";
import MobileTab from "./MobileTab";
async function getRandomName() {
  const response = await axios.get(
    "https://random-word-api.vercel.app/api?words=2&type=capitalized"
  );
  return response.data.join("");
}
const Hero = () => {
  const user = useUserStore();
  const app = useApplicationStore();
  useEffect(() => {
    if (user.name === "") {
      try {
        getRandomName().then((gameName) => {
          user.setName(gameName);
        });
      } catch (error) {
        console.error("Error fetching random words:", error);
        user.setName("Player" + Math.floor(Math.random() * 1000));
      }
    }
  }, []);
  return (
    <div className="w-full h-[calc(100vh-64px)] flex overflow-hidden bg-white/20 relative">
      <div
        className={`${app.tab == "Character" ? "w-full" : "w-0"} sm:w-1/2 bg-white overflow-hidden transition-all `}
      >
        <div className="w-full h-full flex items-center justify-center border-r border-black">
          <div className="w-12 lg:w-16 bg-background rounded-lg divide-y flex flex-col border border-slate-900 divide-slate-900">
            <button
              className="w-full h-full flex items-center justify-center p-3"
              onClick={() => {
                user.nextValue("gender", "possibleGenderValues");
              }}
            >
              <img
                src="/icons/gender.svg"
                alt="Scribbd Logo"
                className="h-8 w-8"
              />
            </button>
            <button
              className="w-full h-full flex items-center justify-center p-3"
              onClick={() => {
                user.nextValue("clothing", "possibleClothingValues");
              }}
            >
              <img
                src="/icons/cloth.svg"
                alt="Scribbd Logo"
                className="h-7 w-7"
              />
            </button>
            <button
              className="w-full h-full flex items-center justify-center p-3"
              onClick={() => {
                user.nextValue("eyebrow", "possibleEyebrowValues");
              }}
            >
              <img
                src="/icons/eyebrow.svg"
                alt="Scribbd Logo"
                className="h-7 w-7"
              />
            </button>
            <button
              className="w-full h-full flex items-center justify-center p-3"
              onClick={() => {
                user.nextValue("eyes", "possibleEyesValues");
              }}
            >
              <img
                src="/icons/eye.svg"
                alt="Scribbd Logo"
                className="h-7 w-7"
              />
            </button>
          </div>
          <div className="flex flex-col items-center justify-around gap-10">
            <Character />
            <div className="mx-auto pb-3">
              <button
                title="Randomize Character"
                onClick={() => {
                  user.randomize();
                }}
                className=" flex items-center gap-2 px-5 py-2 text-sm font-medium font-cursive border border-b-4 border-r-4 active:border-b active:border-r border-foreground rounded-full shadow-lg active:shadow-sm bg-background text-foreground"
              >
                <svg
                  viewBox="0 0 47.999997 60"
                  version="1.1"
                  x="0px"
                  y="0px"
                  className="h-8 w-8 fill-black dark:fill-white"
                >
                  <path
                    // style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;img-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
                    d="M 17.099609 2 C 16.547329 2 16.099609 2.44772 16.099609 3 L 16.099609 9 C 16.099609 9.55228 16.547329 10 17.099609 10 C 17.651889 10 18.099609 9.55228 18.099609 9 L 18.099609 3 C 18.099609 2.44772 17.651889 2 17.099609 2 z M 7.1132812 3.0136719 C 6.8573613 3.0136719 6.60151 3.1113706 6.40625 3.3066406 C 6.01573 3.6971606 6.01573 4.3301831 6.40625 4.7207031 L 10.40625 8.7207031 C 10.79677 9.1112231 11.429793 9.1112231 11.820312 8.7207031 C 12.210833 8.3301831 12.210833 7.6971606 11.820312 7.3066406 L 7.8203125 3.3066406 C 7.6250525 3.1113806 7.3692013 3.0136719 7.1132812 3.0136719 z M 38.640625 4 C 37.991175 3.994 37.329189 4.1155362 36.693359 4.3789062 L 26.085938 8.7734375 C 23.542618 9.826908 22.324916 12.764044 23.378906 15.308594 L 27.771484 25.912109 C 28.825484 28.456659 31.763331 29.674554 34.306641 28.621094 L 44.914062 24.226562 C 47.457372 23.173092 48.675094 20.235956 47.621094 17.691406 L 43.228516 7.0878906 C 42.438026 5.1794806 40.588975 4.0172 38.640625 4 z M 38.636719 5.9921875 C 39.806839 5.9951875 40.898619 6.6892756 41.380859 7.8535156 L 45.771484 18.457031 C 46.414474 20.009341 45.699978 21.734283 44.148438 22.376953 L 33.541016 26.771484 C 31.989466 27.414154 30.262141 26.698784 29.619141 25.146484 L 25.228516 14.542969 C 24.585526 12.990659 25.300013 11.265717 26.851562 10.623047 L 37.458984 6.2285156 C 37.846874 6.0678856 38.246679 5.9912375 38.636719 5.9921875 z M 37.5 10 A 1.5 1.5 0 0 0 36 11.5 A 1.5 1.5 0 0 0 37.5 13 A 1.5 1.5 0 0 0 39 11.5 A 1.5 1.5 0 0 0 37.5 10 z M 6.0996094 13 C 5.5473294 13 5.0996094 13.44772 5.0996094 14 C 5.0996094 14.55228 5.5473294 15 6.0996094 15 L 12.099609 15 C 12.651889 15 13.099609 14.55228 13.099609 14 C 13.099609 13.44772 12.651889 13 12.099609 13 L 6.0996094 13 z M 30.5 13 A 1.5 1.5 0 0 0 29 14.5 A 1.5 1.5 0 0 0 30.5 16 A 1.5 1.5 0 0 0 32 14.5 A 1.5 1.5 0 0 0 30.5 13 z M 35.5 15 A 1.5 1.5 0 0 0 34 16.5 A 1.5 1.5 0 0 0 35.5 18 A 1.5 1.5 0 0 0 37 16.5 A 1.5 1.5 0 0 0 35.5 15 z M 40.5 17 A 1.5 1.5 0 0 0 39 18.5 A 1.5 1.5 0 0 0 40.5 20 A 1.5 1.5 0 0 0 42 18.5 A 1.5 1.5 0 0 0 40.5 17 z M 9.359375 19 C 7.4110349 19.0172 5.5619144 20.179301 4.7714844 22.087891 L 0.37890625 32.691406 C -0.67508377 35.235956 0.5425875 38.173113 3.0859375 39.226562 L 13.693359 43.621094 C 16.236659 44.674554 19.174626 43.456899 20.228516 40.912109 L 24.621094 30.308594 C 25.675094 27.764044 24.457403 24.826897 21.914062 23.773438 L 11.306641 19.378906 C 10.670811 19.115536 10.008825 18.99426 9.359375 19 z M 33.5 20 A 1.5 1.5 0 0 0 32 21.5 A 1.5 1.5 0 0 0 33.5 23 A 1.5 1.5 0 0 0 35 21.5 A 1.5 1.5 0 0 0 33.5 20 z M 9.3632812 20.992188 C 9.7533313 20.991238 10.153126 21.067786 10.541016 21.228516 L 21.148438 25.623047 C 22.699997 26.265717 23.414434 27.990679 22.771484 29.542969 L 18.380859 40.146484 C 17.737859 41.698784 16.010554 42.414184 14.458984 41.771484 L 3.8515625 37.376953 C 2.3000025 36.734273 1.5855656 35.009321 2.2285156 33.457031 L 6.6191406 22.853516 C 7.1013906 21.689276 8.1931512 20.995017 9.3632812 20.992188 z M 10.71875 23.849609 A 1.5 1.5 0 0 0 9.21875 25.349609 A 1.5 1.5 0 0 0 10.71875 26.849609 A 1.5 1.5 0 0 0 12.21875 25.349609 A 1.5 1.5 0 0 0 10.71875 23.849609 z M 18.109375 26.912109 A 1.5 1.5 0 0 0 16.609375 28.412109 A 1.5 1.5 0 0 0 18.109375 29.912109 A 1.5 1.5 0 0 0 19.609375 28.412109 A 1.5 1.5 0 0 0 18.109375 26.912109 z M 8.8046875 28.46875 A 1.5 1.5 0 0 0 7.3046875 29.96875 A 1.5 1.5 0 0 0 8.8046875 31.46875 A 1.5 1.5 0 0 0 10.304688 29.96875 A 1.5 1.5 0 0 0 8.8046875 28.46875 z M 16.195312 31.53125 A 1.5 1.5 0 0 0 14.695312 33.03125 A 1.5 1.5 0 0 0 16.195312 34.53125 A 1.5 1.5 0 0 0 17.695312 33.03125 A 1.5 1.5 0 0 0 16.195312 31.53125 z M 35.099609 33 C 34.553959 33.008 34.099609 33.45252 34.099609 34 C 34.099609 34.55228 34.547329 35 35.099609 35 L 41.099609 35 C 41.651889 35 42.099609 34.55228 42.099609 34 C 42.099609 33.44772 41.651889 33 41.099609 33 L 35.099609 33 z M 6.890625 33.087891 A 1.5 1.5 0 0 0 5.390625 34.587891 A 1.5 1.5 0 0 0 6.890625 36.087891 A 1.5 1.5 0 0 0 8.390625 34.587891 A 1.5 1.5 0 0 0 6.890625 33.087891 z M 14.28125 36.150391 A 1.5 1.5 0 0 0 12.78125 37.650391 A 1.5 1.5 0 0 0 14.28125 39.150391 A 1.5 1.5 0 0 0 15.78125 37.650391 A 1.5 1.5 0 0 0 14.28125 36.150391 z M 30.099609 38 C 29.552129 38 29.107309 38.45435 29.099609 39 L 29.099609 45 C 29.099609 45.55228 29.547329 46 30.099609 46 C 30.651889 46 31.099609 45.55228 31.099609 45 L 31.099609 39 C 31.099609 38.44772 30.651889 38 30.099609 38 z M 36.113281 39.013672 C 35.857361 39.013672 35.60151 39.111371 35.40625 39.306641 C 35.02053 39.692371 35.018161 40.313538 35.394531 40.705078 L 35.392578 40.707031 L 35.40625 40.720703 L 39.392578 44.707031 C 39.783098 45.097551 40.429793 45.111043 40.820312 44.720703 C 41.210833 44.330183 41.197341 43.683489 40.806641 43.292969 L 36.820312 39.306641 L 36.806641 39.292969 L 36.804688 39.294922 C 36.611357 39.109162 36.362901 39.013672 36.113281 39.013672 z "
                    transform="translate(-1.9073486e-6,0)"
                  />
                </svg>
                Randomize
              </button>
            </div>
          </div>
          <div className="w-12 lg:w-16 bg-background rounded-lg divide-y flex flex-col border border-slate-900 divide-slate-900">
            <button
              className="w-full h-full flex items-center justify-center p-3"
              onClick={() => {
                user.nextValue("hair", "possibleHairValues");
              }}
            >
              <img
                src="/icons/hair.svg"
                alt="Scribbd Logo"
                className="h-7 w-7"
              />
            </button>
            <button
              className="w-full h-full flex items-center justify-center p-3"
              onClick={() => {
                user.nextValue("mouth", "possibleMouthValues");
              }}
            >
              <img
                src="/icons/mouth.svg"
                alt="Scribbd Logo"
                className="h-8 w-8"
              />
            </button>
            <button
              className="w-full h-full flex items-center justify-center p-3"
              onClick={() => {
                user.nextValue("skintone", "possibleSkintoneValues");
              }}
            >
              <img
                src="/icons/skintone.svg"
                alt="Scribbd Logo"
                className="h-7 w-7"
              />
            </button>
            <button
              className="w-full h-full flex items-center justify-center p-3"
              onClick={() => {
                user.nextValue("accessory", "possibleAccessoryValues");
              }}
            >
              <img
                src="/icons/accessory.svg"
                alt="Scribbd Logo"
                className="h-8 w-8"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${app.tab == "Play" ? "w-full" : "w-0"} sm:w-1/2 flex items-center justify-center relative overflow-hidden transition-all`}
      >
        <div className="p-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white border-2 rounded-lg border-foreground">
            <div className="md:py-8 py-4 md:px-4 px-4 shadow sm:rounded-lg min-w-80">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Enter Your Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={20}
                    value={user.name}
                    onChange={(e) => {
                      user.setName(e.target.value);
                    }}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    // placeholder="Enter your Name"
                  />
                </div>
              </div>
              <div className="relative md:mt-5 mt-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  {/* <span className="px-2 bg-gray-100 text-gray-500">Or</span> */}
                </div>
              </div>
              <div className="md:my-6 my-3">
                <div className="md:mb-6 mb-3  grid gap-2">
                  {/* <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        className="h-5 w-5"
                        src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                        alt=""
                      />
                    </a>
                  </div> */}
                  <div>
                    <a
                      href="/lobbies"
                      className="w-full flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        className="h-6 w-6 mr-2"
                        src="/icons/lobbies.gif"
                        alt=""
                      />
                      <p>Lobbies</p>
                    </a>
                  </div>
                  <div>
                    <a
                      href="/play"
                      className="w-full flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <img
                        className="h-6 w-6 mr-2"
                        src="/icons/room.gif"
                        alt=""
                      />
                      <p>Create a Room</p>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-100 text-gray-500">Or</span>
                  </div>
                </div>
              </div>
              {/* <form className="space-y-6" action="#" method="POST"> */}
              {/* <div>
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember_me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div> */}

              <div>
                <button
                  href="/play"
                  className="group relative w-full flex justify-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#85c5e5] hover:bg-[#78b1ce] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <a href="/play" className="w-full">
                    Play Online
                  </a>
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
      <MobileTab />
    </div>
  );
};

export default Hero;
