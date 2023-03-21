import React, { useState } from 'react';
import './Body.css';
import Data from '../../Data/Employee-data.json';
import Employee from './Employee/Employee';

const Body = () => {
    const [salary, setSalary] = useState([]);
    console.log(salary);

    function getSalary(emSalary){
        const salaries = [...salary, emSalary];
        setSalary(salaries)
    }
    // const total = salary.reduce((total , sala) => total + sala , 0);
    let total = 0;
    for (let i = 0; i < salary.length; i++) {
        const sala = salary[i];
        total = total + sala;
    }
    

    return (
        <div className='body'>
            <div className='sidebar'>
                <div className='top-sidebar'>
                    <h5>Home / Employee</h5>
                    <h3>Employees</h3>
                </div>
                <div className='bottom-sidebar'>
                    <h3>Selected Employee: {salary.length}</h3>
                    <h3>Total Salary: {total}</h3>

                </div>
            </div>
            <div className='main-body'>
                <div className='employees-body'>
                    {
                        Data.map(employee => <Employee employee={employee} getSalary={getSalary}></Employee>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Body;