import React, { useState } from "react";

const LobbyList = () => {
  // Example lobbies data
  const lobbies = [
    { name: "Fun Game Room", players: 5, rounds: 3, guessingTime: "30s" },
    { name: "Quick Match", players: 3, rounds: 5, guessingTime: "45s" },
    { name: "Serious Artists", players: 4, rounds: 4, guessingTime: "60s" },
    // Add more lobbies as needed
  ];

  // State to keep track of the search query
  const [search, setSearch] = useState("");

  // Filter lobbies based on the search query
  const filteredLobbies = lobbies.filter((lobby) =>
    lobby.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto h-auto">
      <div className="max-w-2xl mt-10 mx-auto p-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-100">
          <div className="pt-4 pr-4">
            <div className="relative mt-1">
              <h2 className="flex flex-row flex-nowrap items-center">
                <span className="flex-none block mx-4 px-4 py-2.5 text-sm leading-none font-medium uppercase bg-black text-white">
                  Public Lobbies
                </span>
                <span
                  className="flex-grow block border-t border-black"
                  aria-hidden="true"
                  role="presentation"
                ></span>
              </h2>
            </div>
          </div>
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for lobbies"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Lobby Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Players
                </th>
                <th scope="col" className="px-6 py-3">
                  Rounds
                </th>
                <th scope="col" className="px-6 py-3">
                  Guessing time
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Join</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredLobbies.map((lobby, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {lobby.name}
                  </th>
                  <td className="px-6 py-4">{lobby.players}</td>
                  <td className="px-6 py-4">{lobby.rounds}</td>
                  <td className="px-6 py-4">{lobby.guessingTime}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Join
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LobbyList;
