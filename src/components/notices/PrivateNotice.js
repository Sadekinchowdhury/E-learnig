import React from "react";
import { HiDownload } from "react-icons/hi";
import "./Notice.css";
const PrivateNotice = () => {
  const notices = [
    {
      sl: "7",
      title: "Learn how to increase your web development skills",
      date: "09/07/2023",
    },
    {
      sl: "6",
      title: "Learn how to increase your web development skills",
      date: "09/07/2023",
    },
    {
      sl: "5",
      title: "Learn how to increase your web development skills",
      date: "09/07/2023",
    },
    {
      sl: "4",
      title: "Learn how to increase your web development skills",
      date: "09/07/2023",
    },
    {
      sl: "3",
      title: "Learn how to increase your web development skills",
      date: "09/07/2023",
    },
    {
      sl: "2",
      title: "Learn how to increase your web development skills",
      date: "09/07/2023",
    },
    {
      sl: "1",
      title: "Learn how to increase your web development skills",
      date: "09/07/2023",
    },
  ];
  return (
    <table className="bg-gray-200 border-2 shadow min-w-full mx-auto divide-y divide-gray-200">
      <thead className="bg-gray-300">
        <tr>
          <th
            scope="col"
            className="px-6 py-6 border-2 border-gray-200 text-center text-sm font-bold text-center text-[#000000] uppercase tracking-wider"
          >
            SL
          </th>
          <th
            scope="col"
            className="px-6 py-6 border-2 border-gray-200 text-center text-sm font-bold text-center text-[#000000] uppercase tracking-wider"
          >
            Title
          </th>
          <th
            scope="col"
            className="px-6 py-6 border-2 border-gray-200 text-center text-sm font-bold text-center text-[#000000] uppercase tracking-wider"
          >
            Publish Date
          </th>
          <th
            scope="col"
            className="px-6 py-6 border-2 border-gray-200 text-center text-sm font-bold text-center text-[#000000] uppercase tracking-wider"
          >
            Download
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {notices.map((notice) => (
          <tr className="mt-2 bg-white">
            <td className="border-2 px-4 py-2 lg:px-8 lg:py-4 md:px-8 md:px-4 whitespace-nowrap">
              <div className="flex items-center content-center">
                <div className="w-[40px] h-[40px] text-xsm flex items-center justify-center rounded font-medium text-white bg-[#00234a]">
                  {notice.sl}
                </div>
              </div>
            </td>
            <td className="border-2 px-6 py-4 text-xsm whitespace-nowrap">
              <div className="font-bold text-[#00397b]">{notice.title}</div>
            </td>
            <td className="border-2 px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {notice.date}
              </span>
            </td>
            <td className="border-2 px-6  py-4 whitespace-nowrap">
              <button className="notice-btn">
                <span className="mr-3">
                  <HiDownload />
                </span>{" "}
                Download
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PrivateNotice;
