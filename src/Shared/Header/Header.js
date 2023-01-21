import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';

const Header = () => {
    const menuItems = <>
        <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
        <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
        <li className='mx-2'><NavLink to='/'>Home</NavLink></li>
    </>
    return (
        <div className="navbar bg-emerald-600 sticky top-0">
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
            <div className="navbar-end">
                <Link to='/register' className='btn btn-primary px-10 btn-square btn-outline'>Register</Link>
            </div>
        </div>
    );
};

export default Header;