import React from 'react';

function Card() {
  return (
    <div className="m-5 rounded-lg w-72 overflow-hidden object-cover shadow-xl  overflow-hidden hover:scale-50">
      <img src="/assets/card.jpg" alt="poster" className="w-full h-36" />

      <div className="px-5 py-2 rounded-b-lg ">
        <div className="mb-2">
          <h4 className="text-xl  font-medium">Mountains</h4>
          <p className="text-xs text-gray-500 font-normal">20th July, 2021</p>
        </div>
        <div className="my-4 flex flex-row flex-wrap">
          <p className="text-sm rounded-full px-2 m-1 border-2 border-gray-300 text-gray-500">
            React
          </p>
          <p className="text-sm rounded-full px-2 m-1 border-2 border-gray-300 text-gray-500">
            Javascript
          </p>
          <p className="text-sm rounded-full px-2 m-1 border-2 border-gray-300 text-gray-500">
            Next
          </p>
          <p className="text-sm rounded-full px-2 m-1 border-2 border-gray-300 text-gray-500">
            Node
          </p>
        </div>
        <p className="text-sm  text-gray-700">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled{' '}
        </p>
        <div className="flex my-5 justify-end">
          <button className="px-3 py-1 bg-green-600 rounded-md mx-2  text-white hover:shadow-md">
            Accept
          </button>
          <button className="px-3 py-1 mx-2 text-gray-500 rounded-md hover:bg-gray-300">
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
