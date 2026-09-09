import React from 'react'

const NewTask = () => {
    return (
        <div className='shrink-0 h-full w-75 bg-blue-400 p-5 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>high</h3>
                <h4 className='text-sm'>20 aug 2026</h4>
            </div>
            <h2 className=' mt-5 text-2xl font-semibold'>make a website</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in iste excepturi quibusdam sunt quia.</p>
            <div className='mt-4'>
                <button className='bg-blue-500 rounded px-2'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask
