import { Outlet } from "react-router-dom"
import Drawer from "./components/Drawer"

function App() {
  return (
    <main className="min-h-screen w-full bg-infinity">
      <Drawer>
        <Outlet />
      </Drawer>
    </main>
  )
}

export default App
