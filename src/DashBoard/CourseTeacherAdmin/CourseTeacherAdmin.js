import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateTeacherAdmin from "./CreateTeacherAdmin";
import EditTeacherAdmin from "./EditTeacherAdmin";
const CourseTeacherAdmin = () => {
  const [selects1, setSelects1] = useState("");
  const courses = [
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
      courseStats: "active",
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
      courseStats: "inactive",
    },
    {
      sl: "1",
      title: "SEO",
      country: "Canada",
      startDate: "22/05/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/11/2023",
      language: "Banlga",
      classDay: "Saturday-2pm Monday-2pm",
      appUser: "1340",
      totalRs: 19900,
      courseStats: "complete",
    },
    {
      sl: "1",
      title: "App Development",
      country: "USA",
      startDate: "22/05/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/11/2023",
      language: "Banlga",
      classDay: "Saturday-2pm Monday-2pm",
      appUser: "1340",
      totalRs: 19900,
      courseStats: "active",
    },
  ];

  return (
    <div className="p-5">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-center text-white pt-5 pb-7">
        Course Teacher Admin Panel
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
        <div className="bg-sky-700 shadow-2xl rounded-lg px-4 py-6 text-center text-white">
          <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl mb-2">
            02
          </h2>
          <h2 className="lg:text-xl md:text-xl lg:font-semibold md:font-semibold">
            Total Active Courses
          </h2>
        </div>
        <div className="bg-pink-700 shadow-2xl rounded-lg px-4 py-6 text-center text-white">
          <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl mb-2">
            02
          </h2>
          <h2 className="lg:text-xl md:text-xl lg:font-semibold md:font-semibold">
            Total Deactive Courses
          </h2>
        </div>
        <div className="bg-purple-900 shadow-2xl rounded-lg px-4 py-6 text-center text-white">
          <h2 className="font-bold lg:text-4xl md:text-4xl text-2xl mb-2">
            15
          </h2>
          <h2 className="lg:text-xl md:text-xl lg:font-semibold md:font-semibold">
            Completed Courses
          </h2>
        </div>
        <CreateTeacherAdmin />
      </div>
      <h3 className="font-semibold lg:text-2xl md:text-2xl text-xl text-white mt-3">
        Live Courses
      </h3>
      <div className="overflow-x-scroll">
        <table className="min-w-full mt-3 divide-y divide-gray-200 rounded-2xl">
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
                Title
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
                Apply Last Date
              </th>
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Class Start Date
              </th>
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Course Compleation Date
              </th>
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Course Language
              </th>
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Class day of the week, time
              </th>
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Application user
              </th>
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Course Status
              </th>
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Total Rs
              </th>
              {/* <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Online Status
              </th> */}
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              >
                Live
              </th>
              <th
                scope="col"
                className="bg-black text-center px-4 py-3 text-xs font-semibold text-white uppercase tracking-wider"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {courses.map((course, i) => (
              <tr key={i}>
                <td className="bg-emerald-950 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.sl}
                </td>
                <td className="bg-zinc-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.title}
                </td>
                <td className="bg-sky-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.country}
                </td>
                <td className="bg-indigo-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.applyLastDate}
                </td>
                <td className="bg-lime-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.startDate}
                </td>
                <td className="bg-pink-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.compleationDate}
                </td>
                <td className="bg-orange-500 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.language}
                </td>
                <td className="bg-purple-900 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.classDay}
                </td>
                <td className="bg-indigo-800 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.appUser}
                </td>
                <td className="bg-gray-900 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  <button
                    disabled={course.courseStats === "active"}
                    className="text-[14px] px-1 bg-sky-900 text-white rounded"
                  >
                    Active
                  </button>
                  <button
                    disabled={course.courseStats === "inactive"}
                    className="text-[14px] px-1 mx-1 bg-[red] text-white rounded"
                  >
                    Inactive
                  </button>
                  <button
                    disabled={course.courseStats === "complete"}
                    className="text-[14px] px-1 bg-[green] text-white rounded"
                  >
                    Complete
                  </button>
                </td>
                <td className="bg-sky-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  {course.totalRs}
                </td>
                {/* <td className="bg-gray-900 px-6 py-3 text-xsm whitespace-nowrap ">
                  <div className="flex items-center text-white justify-between">
                    {user.onlineStats ? (
                      <span className="text-[green] font-bold">Online</span>
                    ) : (
                      <span className="text-[red] font-bold">Offline</span>
                    )}
                  </div>
                </td> */}

                <td className="bg-lime-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  <Link
                    to="/profile/teacherLive"
                    className="bg-[#FF0000] font-bold text-xsm lg:text-sm py-3 px-8 text-white"
                  >
                    Live
                  </Link>
                </td>
                <td className="bg-pink-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                  <EditTeacherAdmin />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTeacherAdmin;
