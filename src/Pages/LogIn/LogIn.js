import React from 'react';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const LogIn = () => {
    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        form.value = '';

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(err => console.error(err))
    }
    return (
        <form onSubmit={submitHandler} className='w-96 mx-auto my-20 p-5 shadow-lg rounded-lg shadow-gray-400 border'>
            <FaUserCircle className='text-6xl mx-auto shadow-lg rounded-full' />
            <h2 className='text-4xl text-center font-bold'>Login</h2>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <label className="input-group">
                    <span className='bg-info'>Name</span>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" />
                </label>
            </div><div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="input-group">
                    <span className='bg-info'>Email</span>
                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <label className="input-group">
                    <span className='bg-info'>Password</span>
                    <input type="password" name='password' placeholder="Your Password" className="input input-bordered w-full" />
                </label>
            </div>
            <div className='my-6'>
                <input type="submit" value='Login' className='btn btn-info bg-info w-full shadow-lg' />
            </div>
            <p className='text-gray-400 text-center'>New here? Please, <Link to='/register' className='text-info link-hover'>register</Link></p>
        </form>
    );
};

export default LogIn;