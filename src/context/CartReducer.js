const CartReducer = (state, action) => {
    let index = -1;

    if (action.payload) {
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    }

    switch (action.type) {
        case 'ADD':
            if (index === -1) {
                state.cartItems.push({...action.payload, quantity: 1});
            } else {
                state.cartItems[index].quantity++;
            }
            break;
        case 'INCREASEQTY':
            if (index > -1) {
                state.cartItems[index].quantity++;
            }
            break;
        case 'REMOVE':
            if (index > -1) { 
                state.cartItems.splice(index, 1);
            }
            break;
        case 'DECREASEQTY':
            if  (index > -1) {
                state.cartItems[index].quantity--;
            }
            break;
        case 'CLEARCART':
            state.cartItems = [];
            break;
        default:
            break;
    }
    return state;
}

export default CartReducer