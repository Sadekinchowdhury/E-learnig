import React from "react";

const LiveMettings = () => {
  const users = [
    {
      sl: "1",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: true,
      online: false,
    },
    {
      sl: "2",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: true,
      online: false,
    },
    {
      sl: "3",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: false,
      online: true,
    },
    {
      sl: "4",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: true,
      online: false,
    },
    {
      sl: "5",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: false,
      online: true,
    },
    {
      sl: "6",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: true,
      online: false,
    },
  ];
  return (
    <div className="py-10 overflow-x-scroll">
      <div className="flex items-center justify-between">
        <div className="bg-[#00234a] font-bold text-sm py-4 px-8 text-white">
          <span>Live Meeting</span>
        </div>
        <div className="bg-[#00234a] font-bold text-sm py-4 px-8 text-white">
          <span>Account Mode</span>
        </div>
        <div className="bg-[#00234a] h-[50px] w-[50px] flex items-center justify-center font-bold text-sm py-4 px-4 text-white rounded rounded-full">
          <span>1</span>
        </div>
        <div className="bg-[#00234a] font-bold text-sm py-4 px-8 text-white">
          <span>Account Creation Pending</span>
        </div>
        <div className="bg-[#00234a] h-[50px] w-[50px] flex items-center justify-center font-bold font-bold text-sm py-4 px-4 text-white rounded rounded-full">
          <span>{30 - users.length}</span>
        </div>
        <div className="bg-[#FF0000] font-bold text-sm py-3 px-8 text-white">
          <button>Live</button>
        </div>
        <div className="bg-[#00234a] font-bold text-sm py-4 px-8 text-white">
          <span>Create New Account</span>
        </div>
      </div>
      <div className="overflow-x-scroll">
        <table className="min-w-full mt-5 divide-y divide-gray-200 border-2">
          <thead className="">
            <tr className="">
              <th
                scope="col"
                className="bg-[#00234a] border-1 border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                No
              </th>
              <th
                scope="col"
                className="bg-[#00234a] mx-1 border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Name
              </th>

              <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Country
              </th>
              <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Meating ID
              </th>
              <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Secret Code
              </th>
              <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Username
              </th>
              <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Password
              </th>
              <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Active Status
              </th>
              <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Online Status
              </th>
              <th
                scope="col"
                colSpan={2}
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              >
                Action
              </th>
              {/* <th
                scope="col"
                className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
              ></th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.meaingId}>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.sl}
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.country}
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.title}
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.meaingId}
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.secret}
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.userName}
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.password}//
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap">
                  {user.ative ? (
                    <span className="text-[green] font-bold">Active</span>
                  ) : (
                    <span className="text-[red] font-bold">Inactive</span>
                  )}
                </td>
                <td className="border-2 px-6 py-4 whitespace-nowrap border-2">
                  {user.online ? (
                    <span className="text-[green] font-bold">Online</span>
                  ) : (
                    <span className="text-[red] font-bold">Offline</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-2">
                  <button className="text-[#00234a] font-semibold decoration-underline">
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveMettings;
