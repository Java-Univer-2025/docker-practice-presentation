import React, { useState } from 'react';
import { Server, Layout, Layers } from 'lucide-react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';

function App() {
  const [currentPart, setCurrentPart] = useState(1);

  return (
    <div>
      <div className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-white text-center mb-4">
          Розгортання Full Stack додатку в Docker
        </h1>
        <div className="flex justify-center gap-4">
        <button
          onClick={() => setCurrentPart(1)}
          className={`flex items-center gap-2 px-6 py-2 rounded font-semibold transition ${
            currentPart === 1
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Server className="w-5 h-5" />
          Backend
        </button>
        <button
          onClick={() => setCurrentPart(2)}
          className={`flex items-center gap-2 px-6 py-2 rounded font-semibold transition ${
            currentPart === 2
              ? 'bg-green-600 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Layout className="w-5 h-5" />
          Frontend
        </button>
        <button
          onClick={() => setCurrentPart(3)}
          className={`flex items-center gap-2 px-6 py-2 rounded font-semibold transition ${
            currentPart === 3
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Layers className="w-5 h-5" />
          Docker Compose
        </button>
        </div>
      </div>

      {currentPart === 1 && <Part1 />}
      {currentPart === 2 && <Part2 />}
      {currentPart === 3 && <Part3 />}
    </div>
  );
}

export default App;