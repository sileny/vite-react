// @ts-nocheck
import { useState } from 'react'
import './App.css'
import Button from "./components/button";
import RemoteExample from "./components/remote-example";
import RemoteRuntimeExample from "./components/remote-runtime-example";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button label="app" />
      <RemoteExample label="app RemoteExample" origin="app RemoteExample" />
      <RemoteRuntimeExample label="app RemoteRuntimeExample" origin="app RemoteRuntimeExample" />
    </>
  )
}

export default App
