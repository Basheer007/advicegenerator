import { useState } from "react";



export default function App() {
  const [advice, setAdvice] = useState('Click the button to get Advice from the Api')

  const url = `https://api.adviceslip.com/advice`

  async function getAdvice() {
    try {
      const data = await fetch(url)
      const result = await data.json();
      setAdvice(result.slip.advice)
    } catch (error) {
      if (error) {
        alert('error while fetcing data...')
        console.log(error)
      }
    }
  }
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-orange-600 to-red-500 flex flex-col items-center justify-center">

        <h2 className="text-white font-outfit text-center text-2xl md:text-3xl ">{advice}</h2>
        <div className="mt-7">
          <button onClick={getAdvice} className="text-white text-xl px-2 py-1 md:text-3xl bg-slate-800 rounded-md">Get Advice</button>
        </div>
      </main>

    </>
  );
}
