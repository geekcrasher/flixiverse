import Header from "./components/Header"
import { Outlet } from "react-router-dom"

function App() {
  return (
    // 262c39
    // 20252e
    <main className="min-h-screen w-full flex flex-col bg-white">
      <Header />
      <Outlet />
    </main>
  )
}

export default App
