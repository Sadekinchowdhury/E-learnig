import React, { useState } from "react";
import PrivateNotice from "./PrivateNotice";
import PublicNotice from "./PublicNotice";
import { IoIosNotifications } from "react-icons/io";
const Notices = () => {
  const [privateNotice, setPrivateNotice] = useState(false);
  const [publicNotice, setPublicNotice] = useState(true);

  const showPrivateNotice = () => {
    if (!privateNotice) {
      setPrivateNotice(!privateNotice);
      setPublicNotice(false);
    }
  };
  const showPublicNotice = () => {
    if (!publicNotice) {
      setPublicNotice(!publicNotice);
      setPrivateNotice(false);
    }
  };
  return (
    <section className="py-8 bg-[#001030] overflow-hidded">
      <h2 className="text-4xl text-center text-white font-bold">
        {" "}
        <IoIosNotifications className="inline text-5xl text-[#00ba57]" />{" "}
        Notifications
      </h2>
      <ul className="mt-8 flex items-center justify-center">
        <li>
          <button
            onClick={showPublicNotice}
            className={`notice-toggle-btn btn btn-lg bg-gray-900 text-white font-semibold py-3 px-4 border-[#000000] ${
              publicNotice && "active-notice"
            }`}
            to="/notices/public"
          >
            Public Notice
          </button>
        </li>
        <li>
          <button
            onClick={showPrivateNotice}
            className={`notice-toggle-btn btn btn-lg bg-gray-900 text-white font-semibold py-3 px-4 border-[#000000] ${
              privateNotice && "active-notice"
            }`}
          >
            Private Notice
          </button>
        </li>
      </ul>
      <div className="max-w-[1000px] mx-auto mt-3">
        <div className="overflow-x-scroll">
          {privateNotice && <PrivateNotice />}
          {publicNotice && <PublicNotice />}
        </div>
      </div>
    </section>
  );
};

export default Notices;
