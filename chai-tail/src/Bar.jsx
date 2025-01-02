import React, { useState } from 'react'

const Bar = () => {
    const [color, setColor] = useState("blue")
  return (
    <div
      className="w-full, h-screen duration-200  flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bottom-panel bg-white p-4 border-t bottom-12 fixed flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor("red")}>
          Button 1
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          Button 2
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          Button 3
        </button>
      </div>
    </div>
  );
}

export default Bar