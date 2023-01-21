import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineLogin, HiOutlineLogout, HiOutlineMenu } from 'react-icons/hi';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    const menuItems = <>
        <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
        <li className='mx-2'><NavLink to='/logIn'>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-info z-50 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <HiOutlineMenu className='text-2xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-2xl text-gray-50">React Challenge</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="ml-auto">
                {
                    user ?
                        <Link to='/logOut'><button className='flex items-center btn-outline btn-error border-0 p-4 rounded-lg'><HiOutlineLogout className='text-2xl z-50 mr-1' />Logout</button></Link>
                        :
                        <Link to='/register'><button className='flex items-center btn-outline btn-error border-0 p-4 rounded-lg'><HiOutlineLogin className='text-2xl z-50 mr-1' />Register</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;