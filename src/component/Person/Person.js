import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name, role,age, country, salary, img}=props.person;

    return (
        <div className="person-blog col-lg-4">
           <img src={img} alt="" />
            <h3>Name:   {name}</h3>
            <h6>Role:   {role}</h6>
            <h6>Age:   {age}</h6>
            <h6>Country:   {country}</h6>
            <p>Salary:   ${salary}</p>
            <button onClick={()=>props.handler(props.person)} className="button"> <i class="fas fa-female text-warning"></i> Add The Contest</button>

        </div>
    );
};

export default Person;