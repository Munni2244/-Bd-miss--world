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
            <h3> <i class="fas fa-user text-warning"></i> Select Person: {carts.length}</h3>
            <h3>TotalCost: ${totalSalary}</h3>
            <button className="applyBtn">Apply Now</button>
     {
         carts.map(person=> <div className="cart-div">
             <img src={person.img} alt="" />
             <h5 style={{marginLeft:'5px'}}>{person.name}</h5>
         </div> )
     }
        </div>
    );
};

export default Cart;