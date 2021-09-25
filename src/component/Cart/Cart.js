import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const {carts}=props;
   let totalSalary=0;
for(const cart of carts){
    totalSalary=totalSalary+cart.salary;
   
}

    return (
        <div>
            <h3> Select Person: {carts.length}</h3>
            <h3>TotalCost: ${totalSalary}</h3>
     {
         carts.map(persons=> <div className="cart-div">
             <img src={persons.img} alt="" />
             <h5>{persons.name}</h5>
         </div> )
     }
        </div>
    );
};

export default Cart;