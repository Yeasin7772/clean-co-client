import { NavLink } from "react-router-dom";


const SideBar = () => {
    return (
        <div className="flex flex-col gap-2">
            <NavLink to='/' className={({ isActive, isPending }) =>
                        isActive ? 'btn btn-primary btn-sm' : isPending ? 'btn btn-ghost  btn-sm' : ' '
                    }>Home</NavLink>
            <NavLink to='/about' className={({isActive,isPending })=>
                isActive ? 'btn btn-primary' : isPending ? 'btn btn-ghost' :' '
            }>About</NavLink>
            <NavLink to='/contact' className={({isActive,isPending })=>
                isActive ? 'btn btn-primary' : isPending ? 'btn btn-ghost' :' '
            }>Contact</NavLink>
              <NavLink to='/services' className={({ isActive, isPending }) =>
                        isActive ? 'btn btn-primary  btn-sm' : isPending ? 'btn btn-ghost  btn-sm' : ' '
                    }>Services</NavLink>
            <NavLink to='/login' className={({isActive,isPending })=>
                isActive ? 'btn btn-primary' : isPending ? 'btn btn-ghost' :' '
            }>Login</NavLink>
        </div>
    );
};

export default SideBar;