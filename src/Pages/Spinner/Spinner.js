import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='h-[100vh] mx-auto content-center items-center'>
            <h2 className='text-5xl text-center mt-[40vh] animate-pulse'>React Challenge</h2>
            <PropagateLoader color="#36d7b7" />
        </div>
    );
};

export default Spinner;