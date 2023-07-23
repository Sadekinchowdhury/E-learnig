import React from "react";
import { HiDownload } from "react-icons/hi";
import "./Notice.css";
const Notifications = () => {
  const notices = [
    {
      sl: "6",
      title: "Learn how to become a full stack web developer",
      date: "09/07/2023",
    },
    {
      sl: "5",
      title: "Learn how to become a full stack web developer",
      date: "09/07/2023",
    },
    {
      sl: "4",
      title: "Learn how to become a full stack web developer",
      date: "09/07/2023",
    },
    {
      sl: "3",
      title: "Learn how to become a full stack web developer",
      date: "09/07/2023",
    },
    {
      sl: "2",
      title: "Learn how to become a full stack web developer",
      date: "09/07/2023",
    },
    {
      sl: "1",
      title: "Learn how to become a full stack web developer",
      date: "09/07/2023",
    },
  ];
  return (
    <table className="shadow min-w-full mx-auto divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-3 border-1 bg-black text-center text-xsm  text-center text-white uppercase tracking-wider"
          >
            SL
          </th>
          <th
            scope="col"
            className="px-6 py-3 border-1 bg-black text-center text-xsm  text-center text-white uppercase tracking-wider"
          >
            Title
          </th>
          <th
            scope="col"
            className="px-6 py-3 border-1 bg-black text-center text-xsm  text-center text-white uppercase tracking-wider"
          >
            Publish Date
          </th>
          <th
            scope="col"
            className="px-6 py-3 border-1 bg-black text-center text-xsm  text-center text-white uppercase tracking-wider"
          >
            Download
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {notices.map((notice) => (
          <tr className="mt-2 bg-white">
            <td className="border-1 px-6 py-2 whitespace-nowrap">
              <div className="flex items-center content-center">
                <div className="w-[35px] h-[35px] text-xsm flex items-center justify-center rounded font-medium text-white bg-[#00234a]">
                  {notice.sl}
                </div>
              </div>
            </td>
            <td className="border-1 px-6 py-3 text-[#00397b] text-xsm whitespace-nowrap">
              {notice.title}
            </td>
            <td className="border-1 px-6 py-3 text-center text-[#00397b] whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {notice.date}
              </span>
            </td>
            <td className="border-1 px-6  py-3 text-center whitespace-nowrap">
              <button className="notice-btn mx-auto">
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

export default Notifications;
