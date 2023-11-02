import { NavLink } from "react-router-dom";


const SideBar = () => {
    return (
        <div className="flex flex-col gap-2">
            <NavLink to='/about' className={({isActive,isPending })=>
                isActive ? 'btn btn-primary' : isPending ? 'btn btn-ghost' :' '
            }>About</NavLink>
            <NavLink to='/contact' className={({isActive,isPending })=>
                isActive ? 'btn btn-primary' : isPending ? 'btn btn-ghost' :' '
            }>Contact</NavLink>
            <NavLink to='/login' className={({isActive,isPending })=>
                isActive ? 'btn btn-primary' : isPending ? 'btn btn-ghost' :' '
            }>Login</NavLink>
        </div>
    );
};

export default SideBar;