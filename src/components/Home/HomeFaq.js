import React from "react";

const HomeFaq = () => {
  return (
    <section className="bg-white">
      <div className=" w-4/5 mx-auto py-10 rounded-md">
        <div className="">
          <h2 className="text-3xl text-purple-600 font-bold flex justify-center">
            Frequently Asked Questions
          </h2>
          <div className="row">
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
              <div className="container flex flex-col justify-center px-2 py-4 mx-auto md:p-8">
                <div className="space-y-4">
                  <details className="w-full rounded-lg ring-1 ring-purple-600 p-2">
                    <summary className="px-1 py-2">
                      Q. Who can take a Disney Institute professional
                      development course?
                    </summary>
                    <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                      Disney Institute courses are open to anyone ages 18 and
                      older.
                    </p>
                  </details>
                  <details className="w-full rounded-lg ring-1 ring-purple-600 p-2">
                    <summary className="px-1 py-2">
                      Q. Do you offer scholarships or financial aid?
                    </summary>
                    <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                      No. Disney Institute does not offer any financial-aid
                      assistance or scholarships. We are neither a college nor
                      university.
                    </p>
                  </details>
                  <details className="w-full rounded-lg ring-1 ring-purple-600 p-2">
                    <summary className="px-1 py-2">
                      How to install tailwind css in react js ?
                    </summary>
                    <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                      What are synthetic events in React?
                    </p>
                  </details>
                </div>
              </div>
              <div className="container flex flex-col justify-center px-2 py-4 mx-auto md:p-8">
                <div className="space-y-4">
                  <details className="w-full rounded-lg ring-1 ring-purple-600 p-2">
                    <summary className="px-1 py-2">
                      Q. Who can take a Disney Institute professional
                      development course?
                    </summary>
                    <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                      Disney Institute courses are open to anyone ages 18 and
                      older.
                    </p>
                  </details>
                  <details className="w-full rounded-lg ring-1 ring-purple-600 p-2">
                    <summary className="px-1 py-2">
                      Q. Do you offer scholarships or financial aid?
                    </summary>
                    <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                      No. Disney Institute does not offer any financial-aid
                      assistance or scholarships. We are neither a college nor
                      university.
                    </p>
                  </details>
                  <details className="w-full rounded-lg ring-1 ring-purple-600 p-2">
                    <summary className="px-1 py-2">
                      How to install tailwind css in react js ?
                    </summary>
                    <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                      What are synthetic events in React?
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
