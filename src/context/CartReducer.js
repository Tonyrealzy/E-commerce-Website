const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}

const CartReducer = (state, action) => {
    let index = -1;

    if (action.payload) {
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    }

    let newItems = [...state.cartItems];

    switch (action.type) {
        case 'ADD':
            if (index === -1) {
                newItems.push({ ...action.payload, quantity: 1 });
                // state.cartItems.push({...action.payload, quantity: 1});
            } else {
                newItems[index].quantity++;
                // state.cartItems[index].quantity++;
            }
            break;
        case 'INCREASEQTY':
            if (index > -1) {
                newItems[index].quantity++;
                // state.cartItems[index].quantity++;
            }
            break;
        case 'REMOVE':
            if (index > -1) {
                newItems = state.cartItems.filter(x => x.id !== action.payload.id);
                // state.cartItems.splice(index, 1);
            }
            break;
        case 'DECREASEQTY':
            if  (index > -1) {
                if (newItems[index].quantity > 1) {
                    newItems[index].quantity--;
                }
                // state.cartItems[index].quantity--;
            }
            break;
        case 'CLEARCART':
            newItems = [];
            // state.cartItems = [];
            break;
        default:
            break;
    }
    state.cartItems = newItems;
    Storage(newItems);
    return state;

}

export default CartReducer