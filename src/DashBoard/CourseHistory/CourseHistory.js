import React from "react";

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
      </div>
    </div>
  );
};

export default CourseHistory;
