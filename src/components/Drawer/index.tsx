import Header from "../Header";
import Sidebar from "../Sidebar";

const Drawer = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:ml-20">
          <Header />
          {children}
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Drawer;