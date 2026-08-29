import React from 'react'

const TaskListNumbars = ({data}) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='rounded-2xl w-[45%] py-6 px-9 bg-blue-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
             <div className='rounded-2xl w-[45%] py-6 px-9 bg-emerald-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
             <div className='rounded-2xl w-[45%] py-6 px-9 bg-amber-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
             <div className='rounded-2xl w-[45%] py-6 px-9 bg-violet-400'>
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbars
