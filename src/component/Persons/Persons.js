import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Persons.css'

const Persons = () => {
    const [persons, setPersons]=useState([]);
    const [carts, setCarts]=useState([]);

 useEffect(()=>{
    fetch('./person.json')
    .then(res=> res.json())
    .then(data=> setPersons(data));

 },[])

 const CartHandler=(person)=>{
  const newCart=[...carts, person];
  setCarts(newCart)

 }
    return (
        <div className="person-container row">
          <div className="col-lg-8">
              <div className="row">
              {
           persons.map(person=> <Person person={person} key={person.id} handler={CartHandler}></Person>)
             }
              </div>
       
          </div>

          <div className=" addCart col-lg-4">
        <Cart carts={carts}></Cart>
          </div>
    
        </div>
    );
};

export default Persons;