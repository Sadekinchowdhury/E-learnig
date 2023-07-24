import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import LiveInput from "../../components/live/LiveInput";

const TeacherMessage = () => {
  const onlinUser = [
    {
      name: "Sadekin",
      icons: [FaCircle],
      color: "text-green-700",
    },

    {
      name: "Chowdhury",
      icons: [FaCircle],
      color: "text-green-700",
    },
  ];
  const OfflineUser = [
    {
      name: "Sadekin",
      icons: [FaCircle],
      color: "text-red-300",
    },

    {
      name: "Chowdhury",
      icons: [FaCircle],
      color: "text-red-300",
    },

    {
      name: "karim",
      icons: [FaCircle],
      color: "text-red-300",
    },

    {
      name: "Sojib",
      icons: [FaCircle],
      color: "text-red-300",
    },
  ];

  const [user, setUser] = useState(false);

  const userCondition = () => {
    setUser(!user);
  };
  return (
    <div className="flex">
      {/* active and deactive users in left side */}
      <div className="lg:block hidden bg-black from-slate-900  to-gray-800 bg-gradient-to-l">
        {/* Content for the first column */}

        <div className="bg-purple-900 items-center shadow-2xl flex justify-between gap-2 px-6 py-3">
          <button
            onClick={userCondition}
            className="text-white font-semibold  bg-green-700 py-1 px-2 rounded-2xl "
          >
            online
          </button>
          <button
            onClick={userCondition}
            className="text-white font-semibold  bg-red-400 py-1 px-2 rounded-2xl"
          >
            Offline
          </button>

          <span
            className={`${
              user ? "bg-green-700" : "bg-red-400"
            }  text-white px-2 rounded-full `}
          >
            {user ? onlinUser.length : OfflineUser.length}
          </span>
        </div>
        <div>
          {user &&
            onlinUser.map((online) => (
              <div>
                <ul className="flex">
                  <li className="flex items-center px-2">
                    <img className="w-7 h-7 rounded-full" src="" alt="" />
                    <h1 className="text-white p-3">{online.name}</h1>

                    {online.icons.map((Icon, index) => (
                      <div>
                        <Icon
                          size={10}
                          className={`${online.color}`}
                          key={index}
                        />
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
          {!user &&
            OfflineUser.map((offline) => (
              <div>
                <ul className="flex">
                  <li className="flex items-center px-2">
                    <img className="w-7 h-7 rounded-full" src="" alt="" />
                    <h1 className="text-white p-3">{offline.name}</h1>

                    {offline.icons.map((Icon, index) => (
                      <div>
                        <Icon
                          size={10}
                          className={`${offline.color}`}
                          key={index}
                        />
                      </div>
                    ))}
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>

      {/* message box in right side */}
      <div className="col-span-3 relative lg:block hidden bg-slate-800">
        <div className="p-3">
          <div className="py-4 shadow-[4px]">
            <p className="font-semibold text-sky-400">Md Mursalin</p>
            <div
              style={{ borderRadius: "10px 0px 10px 0px" }}
              className="bg-white py-2 px-3   border-blue-400"
            >
              <p className="text-black">How to go your won way?</p>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <div>
              <p className="font-semibold text-sky-400 text-right">
                Md Mursalin
              </p>
              <div
                style={{ borderRadius: "0px 10px 0px 10px" }}
                className="bg-white py-2 px-3  border-blue-400"
              >
                <p className="text-black">How to go your won way?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 bg-slate-900 p-3 w-full flex">
          <input
            className="w-[98%] mx-auto bottom-2  bg-white border border-gray-300  rounded-[4px] py-4 px-6 pl-11 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Send a message..."
          ></input>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r">
            <FaPaperPlane />
          </button>
        </div>
        <LiveInput className="absolute items-center justify-start" />
      </div>
    </div>
  );
};

export default TeacherMessage;
