import React from "react";
const CourseHistory = () => {
  const courses = [
    {
      sl: "5",
      courseId: "27923861",
      country: "Bangladesh",
      title: "Manager",
      startDate: "22/05/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/011/2023",
      language: "Banlga",
      courseStats: "complete",
    },
    {
      sl: "4",
      courseId: "27923862",
      country: "Bangladesh",
      title: "Manager",
      startDate: "22/05/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/011/2023",
      language: "Banlga",
      courseStats: "complete",
    },
    {
      sl: "3",
      courseId: "27923863",
      country: "Bangladesh",
      title: "Manager",
      startDate: "22/05/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/011/2023",
      language: "Banlga",
      courseStats: "complete",
    },
    {
      sl: "2",
      courseId: "27923864",
      country: "Bangladesh",
      title: "Manager",
      startDate: "22/05/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/011/2023",
      language: "Banlga",
      courseStats: "complete",
    },
    {
      sl: "1",
      courseId: "27923865",
      country: "Bangladesh",
      title: "Manager",
      startDate: "22/05/2023",
      applyLastDate: "22/05/2023",
      compleationDate: "22/011/2023",
      language: "Banlga",
      courseStats: "complete",
    },
  ];
  return (
    <div>
      <div className="py-10 overflow-x-scroll">
        {/* <div className="flex items-center justify-between">
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
            <span>{30 - courses.length}</span>
          </div>
          <div className="bg-[#FF0000] font-bold text-xsm lg:text-sm py-3 px-8 text-white">
            <button>Live</button>
          </div>
        </div> */}
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
                  Start Class
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
                >{" "}</th>
                <th
                  scope="col"
                  className="bg-[#00234a] border-2 text-center font-bold px-6 py-3 text-xs font-semibold text-gray-200 uppercase tracking-wider"
                >
                  {" "}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course, i) => (
                <tr
                  className={i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                  key={course.courseId}
                >
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {course.sl}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {course.title}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {course.country}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {course.applyLastDate}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {course.startDate}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {course.compleationDate}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {course.language}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    {course.courseStats}
                  </td>
                  <td className="text-center px-6 py-4 whitespace-nowrap">
                    View
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

export default CourseHistory;
