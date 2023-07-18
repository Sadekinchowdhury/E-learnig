import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import EditPersonalMeeting from "./EditePersonalMeeting";
import CreateNewMeeting from "./CreateNewMeeting";
import PersonalLive from "./PersonalLive";
import { Link } from "react-router-dom";
const PersonalMeeting = () => {
  const users = [
    {
      sl: "6",
      courseId: "27923861",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: true,
    },
    {
      sl: "5",
      courseId: "27923861",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: true,
    },
    {
      sl: "4",
      courseId: "27923861",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: false,
    },
    {
      sl: "3",
      courseId: "27923861",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: true,
    },
    {
      sl: "2",
      courseId: "27923861",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: false,
    },
    {
      sl: "1",
      courseId: "27923861",
      name: "Sweet",
      country: "Bangladesh",
      title: "Manager",
      meaingId: "5739249",
      secret: "sg63ncdm",
      userName: "sweet007",
      password: "ZX3U4v//",
      ative: true,
    },
  ];

  const handleDelete = (i) => {
    console.log("Deleted", i);
  };
  return (
    <div className="p-5">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center text-white pt-5 pb-7">
        Personal Meeting Admin Panel
      </h1>
      <div className="">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          <div className="bg-sky-700 shadow-2xl rounded-lg px-4 py-6 text-center text-white">
            <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl mb-2">
              02
            </h2>
            <h2 className="lg:text-xl md:text-xl lg:font-semibold md:font-semibold">
              Account Mode
            </h2>
          </div>
          <div className="bg-pink-700 shadow-2xl rounded-lg px-4 py-6 text-center text-white">
            <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl mb-2">
              {30 - users.length}
            </h2>
            <h2 className="lg:text-xl md:text-xl lg:font-semibold md:font-semibold">
              Account Creation Pendin
            </h2>
          </div>
          <CreateNewMeeting />
          <Link
            to="/profile/personallive"
            className="flex items-center justify-center text-4xl bg-[#FF0000] font-bold py-3 px-8 text-white"
          >
            Live
          </Link>
        </div>
        <div className="overflow-x-scroll">
          <table className="min-w-full mt-5 divide-y divide-gray-200">
            <thead className="">
              <tr className="">
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Course ID
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider tracking-wider"
                >
                  Name
                </th>

                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Country
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Meating ID
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Secret Code
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Username
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Password
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Active Status
                </th>
                <th
                  scope="col"
                  className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, i) => (
                <tr key={user.meaingId}>
                  <td className="bg-emerald-950 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.sl}
                  </td>
                  <td className="bg-zinc-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.courseId}
                  </td>
                  <td className="bg-sky-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className="bg-indigo-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.country}
                  </td>
                  <td className="bg-lime-950 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.title}
                  </td>
                  <td className="bg-pink-950 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.meaingId}
                  </td>
                  <td className="bg-orange-950 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.secret}
                  </td>
                  <td className="bg-purple-950 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.userName}
                  </td>
                  <td className="bg-indigo-800 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.password}//
                  </td>
                  <td className="bg-gray-950 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {user.ative ? (
                      <span className="text-[green] font-bold">Active</span>
                    ) : (
                      <span className="text-[red] font-bold">Inactive</span>
                    )}
                  </td>
                  <td className="bg-sky-950 px-6 py-3 text-xsm text-white whitespace-nowrap flex items-center justify-between">
                    <EditPersonalMeeting />

                    <button
                      onClick={() => handleDelete(i)}
                      className="hover:text-[red] text-xl font-semibold transition duration-300"
                    >
                      <AiFillDelete />
                    </button>
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

export default PersonalMeeting;
