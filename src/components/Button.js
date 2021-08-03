import React from 'react';

function Button({ children, ...props }) {
  return (
    <button
      className="px-3 py-1 w-max h-9 md:w-32 transition-all  bg-blue-500 hover:bg-blue-600 text-white rounded-sm hover:shadow-md"
      {...props}
    >
      <p className="text-1xl"> {children}</p>
    </button>
  );
}

export default Button;
