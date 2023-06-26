import React from 'react'
import {Link} from "react-router-dom";


export default function CertificateForm() {
    return (
        <div>
            <div class="max-w-lg mx-auto mt-8 bg-slate-600">
                <h1 class="text-2xl text-white font-bold mb-1 mt-2 flex justify-center">Certification</h1>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="dropdown">
                            Certificate Type
                        </label>
                        <div class="relative">
                            <select id="dropdown" name="dropdown" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="">Select Certificate Type</option>
                                <option value="option1">Company</option>
                                <option value="option2">Public</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.707,14.707L18,9.414V8h-0.414L12,12.586L6.414,7H6v1.414L11.293,14.707C11.488,14.902,11.744,15,12,15S12.512,14.902,12.707,14.707z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="field1">
                            Course Type :
                        </label>
                        <input id="field1" name="field1" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Course Type"/></div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="field2">
                            Course Batch No :
                        </label>
                        <input id="field2" name="field2" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Course Batch No"/></div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="field3">
                            Session :
                        </label>
                        <input id="field3" name="field3" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Session "/></div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="field4">
                            Roll number :
                        </label>
                        <input id="field4" name="field4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter roll number"/></div>

                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="field5">
                            Registration Number
                        </label>
                        <input id="field5" name="field5" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Registration Number"/></div>

                    <div class="flex items-center justify-between">
                        <button class="bg-slate-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            <Link to="/certificate">Submit</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
