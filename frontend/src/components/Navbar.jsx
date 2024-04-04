import {Link, useNavigate} from "react-router-dom";

function Navbar() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    function handleLogoutClick(){
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">MERN JWT Auth</a>
            </div>
            <div className="flex-none gap-2">
                {token ? (
                    <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component"
                                     src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                            </div>
                        </div>
                        <button className="btn btn-outline btn-error" onClick={handleLogoutClick}>Logout</button>
                    </>
                ) : (
                    <>
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar;