import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const CourseTeacherAdmin = () => {
  const users = [
    {
      sl: "2",
      title: "Web Design",
      country: "India",
      startDate: "22/07/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/11/2023",
      language: "English",
      classDay: "Saturday-2pm Monday-2pm",
      appUser: "1900",
      totalRs: 15000,
      onlineStats: true,
    },
    {
      sl: "1",
      title: "Graphics Design",
      country: "Bangladesh",
      startDate: "22/05/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/11/2023",
      language: "Banlga",
      classDay: "Saturday-2pm Monday-2pm",
      appUser: "1340",
      totalRs: 19900,
      onlineStats: false,
    },
  ];

  const handleDelete = (i) => {
    console.log("Deleted", i);
  };
  return (
    <div>
      <div className="py-10">
        <div className="flex items-center justify-between">
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
          <Link
            to="/personallive"
            className="bg-[#FF0000] font-bold text-xsm lg:text-sm py-3 px-8 text-white"
          >
            <button>Live</button>
          </Link>
          <button className="bg-[#00234a] font-bold text-xm lg:text-sm text-white">
            {/* <CreateNewMeeting /> */}
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
                  Title
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] mx-1 border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Country
                </th>

                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Apply Last Date
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Class Start Date
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Course Compleation Date
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Course Language
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Class day of the week, time
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Application user
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Course Status
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Total Rs
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
                  Live
                </th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, i) => (
                <tr
                  className={i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                  key={i}
                >
                  <td className=" px-6 py-4 whitespace-nowrap">{user.sl}</td>
                  <td className=" px-6 py-4 whitespace-nowrap">{user.title}</td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.country}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.applyLastDate}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.startDate}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.compleationDate}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.language}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.classDay}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap">
                    {user.appUser}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Active,Inactive,Complete
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.totalRs}
                  </td>
                  <td className="flex items-center justify-between px-6 py-4 whitespace-nowrap ">
                    {user.onlineStats ? (
                      <span className="text-[green] font-bold">Online</span>
                    ) : (
                      <span className="text-[red] font-bold">Offline</span>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-[#FF0000] font-bold text-xsm lg:text-sm py-3 px-8 text-white">
                      Live
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">Edit</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseTeacherAdmin;
