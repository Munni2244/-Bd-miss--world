import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name, role,age, country, salary, img}=props.person;

    return (
        <div className="person-blog col-lg-4">
           <img src={img} alt="" />
            <h3>Name:   {name}</h3>
            <h5>Role:   {role}</h5>
            <h5>Age:   {age}</h5>
            <h5>Country:   {country}</h5>
            <p>Salary:   {salary}</p>
            <button onClick={()=>props.handler(props.person)} className="button"> Add To Cart</button>

        </div>
    );
};

export default Person;