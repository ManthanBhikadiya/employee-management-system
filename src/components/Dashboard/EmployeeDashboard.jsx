import React from 'react'
import Header from '../other/Header'
import TaskListNumbars from '../other/TaskListNumbars'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
    return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskListNumbars data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
