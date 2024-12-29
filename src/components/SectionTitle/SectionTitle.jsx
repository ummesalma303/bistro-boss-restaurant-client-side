import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center space-y-3 w-fit mx-auto my-8'>
            <p className='text-[#D99904] text-xl font-medium'>---{subHeading}---</p>
            <h1 className='text-4xl mt-4 border-y-2 py-3'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;