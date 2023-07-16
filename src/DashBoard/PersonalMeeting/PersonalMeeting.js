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
      online: false,
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
      online: false,
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
      online: true,
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
      online: false,
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
      online: true,
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
      online: false,
    },
  ];

  const handleDelete = (i) => {
    console.log("Deleted", i);
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="py-10 overflow-x-scroll">
        <div className="flex items-center gap-x-2 justify-between">
          <div className="bg-[#00234a] font-bold text-xsm lg:text-sm py-4 px-8 text-white">
            <span>Live Meeting</span>
          </div>
          <div className="bg-[#00234a] font-bold text-xsm lg:text-sm py-4 px-8 text-white">
            <span>Account Mode</span>
          </div>
          <div className="bg-[#00234a] h-[50px] w-[50px] flex items-center justify-center font-bold text-xsm lg:text-sm py-4 px-4 text-white rounded rounded-full">
            <span>1</span>
          </div>
          <div className="bg-[#00234a] font-bold text-xsm lg:text-sm py-4 px-8 text-white">
            <span>Account Creation Pending</span>
          </div>
          <div className="bg-[#00234a] h-[50px] w-[50px] flex items-center justify-center font-bold font-bold text-xsm lg:text-sm py-4 px-4 text-white rounded rounded-full">
            <span>{30 - users.length}</span>
          </div>
          <Link to='/profile/personallive' className="bg-[#FF0000] font-bold text-xsm lg:text-sm py-3 px-8 text-white">
            <button>Live
            </button>
          </Link>
          <button className="bg-[#00234a] font-bold text-xm lg:text-sm text-white">
            <CreateNewMeeting />
          </button>
        </div>
        <div className="overflow-x-scroll">
          <table className="min-w-full mt-5 divide-y divide-gray-200 border-2">
            <thead className="">
              <tr className="">
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Course ID
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
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, i) => (
                <tr
                  className={i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                  key={user.meaingId}
                >
                  <td className=" px-6 py-4 whitespace-nowrap">{user.sl}</td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.courseId}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.country}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">{user.title}</td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.meaingId}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.secret}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.userName}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.password}//
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.ative ? (
                      <span className="text-[green] font-bold">Active</span>
                    ) : (
                      <span className="text-[red] font-bold">Inactive</span>
                    )}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap border-2">
                    {user.online ? (
                      <span className="text-[green] font-bold">Online</span>
                    ) : (
                      <span className="text-[red] font-bold">Offline</span>
                    )}
                  </td>
                  <td className="flex items-center justify-between px-6 py-4 whitespace-nowrap ">
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
