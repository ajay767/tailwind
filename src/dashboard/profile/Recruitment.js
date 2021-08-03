import React from 'react';

function Recruitment() {
  return (
    <div className="m-2 h-24">
      <h4 className="text-md text-gray-800">Profile Recruitment</h4>
      <div className="mt-5 min-h-full  w-96 rounded-md bg-transparent flex flex-col overflow-hidden relative">
        <img
          alt="bg"
          src="/assets/wapp.png"
          className="absolute top-0 left-0 right-0 object-cover z-0 scale-50"
        />
        <div className="z-10 h-14 bg-green-900 flex items-center">
          <img
            src="/assets/img.jpg"
            alt="dp"
            className="h-10 w-10 object-cover rounded-full mx-2"
          />
          <div>
            <h4 className="text-sm text-gray-50 font-medium">Ashutosh Singh</h4>
            <p className="text-xs text-gray-100">last seen 1 min ago</p>
          </div>
        </div>
        <div className="m-2 z-10 self-center">
          <p className="p-1 px-3 text-xs rounded-md  bg-gray-900 text-gray-300 w-max">
            July 22, 2021
          </p>
        </div>
        <div className="m-2 z-10 ">
          <p className="p-1 px-3 text-sm rounded-md bg-gray-50 text-gray-600 w-max">
            Heyy!
          </p>
        </div>
        <div className="m-2 z-10  z-10 w-max  self-end">
          <p className="p-1 px-3 text-sm  rounded-md bg-green-600 text-white w-max">
            Hello
          </p>
        </div>
        <div className="m-2 z-10 ">
          <p className="p-1 px-3 text-sm  rounded-md bg-gray-50 text-gray-600 w-max">
            how are you.?
          </p>
        </div>
        <div className="m-2 z-10  z-10 w-max  self-end">
          <p className="p-1 px-3 text-sm  rounded-md bg-green-600 text-white w-max">
            I am good and u ?
          </p>
        </div>
        <div className="m-2 z-10 ">
          <p className="p-1 px-3 text-sm  rounded-md bg-gray-50 text-gray-600 w-max">
            me too...
          </p>
        </div>
        <div className="m-2 z-10 w-max  self-end">
          <p className="p-1 px-3 text-sm  rounded-md bg-green-600 text-white w-max">
            nice
          </p>
        </div>
        <div className=" z-10 h-9 bg-gray-100 m-2 rounded flex items-center justify-start cursor-pointer">
          <p className="text-gray-500 pl-3 text-sm ">Type Message..</p>
        </div>
      </div>
    </div>
  );
}

export default Recruitment;
