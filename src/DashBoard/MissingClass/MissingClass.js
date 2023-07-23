import React from "react";
import { Link } from "react-router-dom";
const MissingClass = () => {
  const courses = [
    {
      sl: "5",
      title: "Web Development",
      compleationDate: "22/011/2023",
      language: "Banlga",
    },
    {
      sl: "4",
      title: "Digital Marketing",
      compleationDate: "22/011/2023",
      language: "Banlga",
    },
    {
      sl: "3",
      title: "Graphics Design",
      compleationDate: "22/011/2023",
      language: "Banlga",
    },
    {
      sl: "2",
      title: "Search Engine Optimization",
      compleationDate: "22/011/2023",
      language: "Banlga",
    },
    {
      sl: "1",
      title: "Node Js",
      compleationDate: "22/011/2023",
      language: "Banlga",
    },
  ];
  return (
    <div>
      <div className="py-10">
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
                  Title
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
                ></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course, i) => (
                <tr key={course.sl}>
                  <td className="bg-emerald-950 px-6 py-3 text-xsm text-white text-center whitespace-nowrap">
                    {course.sl}
                  </td>
                  <td className="bg-indigo-700 px-6 py-3 text-xsm text-white whitespace-nowrap">
                    {course.title}
                  </td>
                  <td className="bg-zinc-700 px-6 py-3 text-xsm text-white text-center whitespace-nowrap">
                    {course.compleationDate}
                  </td>
                  <td className="bg-indigo-700 px-6 py-3 text-xsm text-white text-center whitespace-nowrap">
                    {course.language}
                  </td>
                  <td className="bg-lime-950 px-6 py-3 text-xsm text-white text-center whitespace-nowrap">
                    <Link to="/profile/missingclass/video/wm5gMKuwSYk">
                      View
                    </Link>
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

export default MissingClass;
