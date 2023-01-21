import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='h-[100vh] mx-auto content-center items-center'>
            <h2 className='text-5xl text-center mt-[40vh] animate-pulse'>React Challenge</h2>
            <div className='mx-auto items-center w-16 my-5'>
                <PropagateLoader color="#36d7b7" />
            </div>
        </div>
    );
};

export default Spinner;