import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Persons.css'

const Persons = () => {
    const [persons, setPersons]=useState([]);  //all person state
    const [carts, setCarts]=useState([]);      //using cart state   

    ///get data to json file
 useEffect(()=>{
    fetch('./person.json')
    .then(res=> res.json())
    .then(data=> setPersons(data));

 },[])

 ///handler
 const CardHandler=(person)=>{
  const newCart=[...carts, person];
  setCarts(newCart)

 }
    return (
      ///person blog
        <div className="person-container row">
          <div className="col-lg-8">
              <div className="row">
              {
           persons.map(person=> <Person person={person} key={person.id} handler={CardHandler}></Person>)
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