import { useState } from "react"

export default function App() {
  const [shiftAmount, setShiftAmount] = useState(0);

  const shiftLeft = () => {
    if (shiftAmount === 0) return;
    setShiftAmount(prev => prev - 1);
  }

  const shiftRight = () => {
    if (shiftAmount >= 1) return;
    setShiftAmount(prev => prev + 1);
  }

  return (
    <div className="h-screen bg-slate-800">
      <div className="flex overflow-hidden">
        <button
          onClick={shiftLeft} className="flex-shrink-0 w-7 z-10 text-6xl bg-white/25 my-1 pb-3 rounded-tr-lg rounded-br-lg group">
          <p className="transition-all group-hover:scale-125 group-focus:scale-125">
            &#8249;
          </p>
        </button>
        <div className="flex mx-1 transition-all" style={{ transform: `translateX(-${shiftAmount * 100}%)` }}>
          <img className="w-1/4 aspect-video p-1 flex-shrink-0" src="https://via.placeholder.com/110/0000FF?text=1" />
          <img className="w-1/4 aspect-video p-1 flex-shrink-0" src="https://via.placeholder.com/120/0000FF?text=2" />
          <img className="w-1/4 aspect-video p-1 flex-shrink-0" src="https://via.placeholder.com/130/0000FF?text=3" />
          <img className="w-1/4 aspect-video p-1 flex-shrink-0" src="https://via.placeholder.com/140/0000FF?text=4" />
          <img className="w-1/4 aspect-video p-1 flex-shrink-0" src="https://via.placeholder.com/150/0000FF?text=5" />
          <img className="w-1/4 aspect-video p-1 flex-shrink-0" src="https://via.placeholder.com/160/0000FF?text=6" />
          <img className="w-1/4 aspect-video p-1 flex-shrink-0" src="https://via.placeholder.com/170/0000FF?text=7" />
          <img className="w-1/4 aspect-video p-1 flex-shrink-0" src="https://via.placeholder.com/180/0000FF?text=8" />
        </div>
        <button onClick={shiftRight} className="flex-shrink-0 w-7 z-10 text-6xl bg-blue-400/25 my-1 pb-3 rounded-tl-lg rounded-bl-lg group">
          <p className="transition-all group-hover:scale-125 group-focus:scale-125">
            &#8250;
          </p>
        </button>
      </div>

    </div>
  )
}