import NavBar from "./NavBar";
import SideBar from "./SideBar";


const MainLayout = ({ children }) => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <NavBar />
                    </div>
                    {/* Page content here */}
                    {children}
                 
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <SideBar></SideBar>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;