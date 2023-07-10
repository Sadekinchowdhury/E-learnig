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
    <table className="bg-gray-200 min-w-full mx-auto divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-center text-gray-500 uppercase tracking-wider"
          >
            SL
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-center text-gray-500 uppercase tracking-wider"
          >
            Title
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-center text-gray-500 uppercase tracking-wider"
          >
            Publish Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold text-center text-gray-500 uppercase tracking-wider"
          >
            Download
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {notices.map((notice) => (
          <tr className="mt-2 bg-white">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center bg-[#00234a] content-center">
                <div className="text-sm py-2 px-3 rounded font-medium text-white flex items-center bg-[#00234a] justify-center">
                  {notice.sl}
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="font-bold text-[#00397b]">{notice.title}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {notice.date}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
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
