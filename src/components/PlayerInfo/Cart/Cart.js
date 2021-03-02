import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    
    

    let totalBudget = 0 ;
    for (let i = 0; i < cart.length; i++) {
        let player = cart[i];
        totalBudget += player.salary;
        
    }
    return (
        <div>
            <h4>Total Player in the team : {cart.length}</h4>
            <>Total Budget = {totalBudget}</>
            
        </div>
    );
};

export default Cart;