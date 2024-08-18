import Header from "./components/Header"
import { Outlet } from "react-router-dom"

function App() {
  // 262c39
  // 20252e
  // 1d232e

  /* 
   * 171717
   * 0b1215
   * 101720
   * 0d1717
   * 020d19
   * 011222
  */
  return (
    <main className="min-h-screen w-full flex flex-col bg-[#20252e]">
      <Header />
      <section className="flex h-[calc(100vh-6rem)] w-full ">
        <section className=" w-[20rem] h-full">
          dad
        </section>
        <section className="flex-1 px-10 overflow-y-auto">
          <Outlet />
        </section>
      </section>
    </main>
  )
}

// function App() {
//   return (
//     <main className="min-h-screen w-full flex flex-col bg-[#20252e]">
//       <Header />
//       <section className="flex flex-1 w-full">
//         <section className="border w-[30rem] flex-none h-full">
//           {/* Sidebar content */}
//           da
//         </section>
//         <section className="flex-1 overflow-y-auto">
//           {/* Main content */}
//           <Outlet />
//         </section>
//       </section>
//     </main>
//   )
// }

export default App
