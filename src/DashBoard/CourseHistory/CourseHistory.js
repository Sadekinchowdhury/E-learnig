import React from "react";
<<<<<<< HEAD

const courses = [
  {
    id: 1,
    title: "Course 1",
    country: "United States",
    applyLastDate: "2023-08-15",
    classStartDate: "2023-09-01",
    courseCompleteDate: "2023-12-15",
    language: "English",
  },
  {
    id: 2,
    title: "Course 2",
    country: "Canada",
    applyLastDate: "2023-08-20",
    classStartDate: "2023-09-05",
    courseCompleteDate: "2024-01-15",
    language: "French",
  },
  // Add more courses as needed
];

const CourseHistory = () => {
  return (
    <div className="p-3 lg:p-6">
      <div>
        <h1 className="text-2xl font-semibold text-left py-5 text-white">
          Course History
        </h1>
      </div>
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-black ">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Course ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Course Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white  uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Apply Last Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Class Start Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Course Complete Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Course Language
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="px-6 py-4 whitespace-nowrap">{course.id}</td>
                <td className="px-6 py-4 whitespace-nowrap bg-sky-700 text-white">
                  {course.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap bg-indigo-700 text-white">
                  {course.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap bg-lime-700 text-white">
                  {course.applyLastDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap bg-pink-700 text-white">
                  {course.classStartDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap bg-orange-500 text-white">
                  {course.courseCompleteDate}
                </td>
                <td className="px-6 bg-purple-900 text-white py-4 whitespace-nowrap">
                  {course.language}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
=======
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
>>>>>>> c3e8cf275b057dc521756b8e22af13106d055137
      </div>
    </div>
  );
};

export default CourseHistory;
