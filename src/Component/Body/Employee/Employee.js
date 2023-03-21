import React from 'react';
import './Employee.css';

const Employee = (props) => {
    const employee = props.employee;
    return (
        <div className='card'>
            <div className='card-body'>
                <img src={employee.img} alt="" className='image-style'/>
                <h3 className='employee-name'>{employee.name}</h3>
                <p>{employee.designation}</p>
                <p style={{fontSize:'14px', color:'#888'}}>{employee.email}</p>
                <h5>Salary: {employee.salary} TK</h5>
                <button onClick={() => props.getSalary(employee.salary)} className='get-salary-btn'>Get Salary</button>
            </div>
        </div>
    );
};

export default Employee;