import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { UpIcon, DownIcon, TrashIcon } from "../components/icons";

const Cart = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const navigate = useNavigate();
  const {
    getItems,
    clearCart,
    increaseQuantity,
    reduceQuantity,
    removeProduct,
  } = React.useContext(CartContext);

  React.useEffect(() => {
    setCartItems(getItems());
  }, [getItems]);

  const renderCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((p) => (
        <tbody key={p.id}>
          <tr className="text-left p-2">
            <td className="w-3/6 p-1">
              <Link to={`/products/${p.id}`} className="hover:font-medium">
                { p.title }
              </Link>
            </td>
            <td className="w-2/6 p-1 flex">
              <p className="font-bold mx-2">{ p.quantity }</p>
              <section className="flex mt-0.4 md:mt-1">
                <aside className="mx-0.5">
                  <UpIcon
                    width={15}
                    className="mx-2"
                    onClick={() => setCartItems(increaseQuantity({ id: p.id }))}
                  />
                </aside>
                <aside className="mx-0.5">
                  <DownIcon
                    width={15}
                    onClick={() => setCartItems(reduceQuantity({ id: p.id }))}
                  />
                </aside>
                <aside className="mx-0.5">
                  <TrashIcon
                    width={15}
                    onClick={() => setCartItems(removeProduct({ id: p.id }))}
                  />
                </aside>
              </section>
            </td>
            <td className="w-1/6 p-1">&pound;{ p.price }</td>
          </tr>
        </tbody>
      ));
    } else {
      return (
        <tbody>
          <tr>
            <td className="text-left p-2">
              Your cart is currently empty. Add items to cart?
            </td>
          </tr>
        </tbody>
      );
    }
  };

  const renderTotal = () => {
    const cartItems = getItems();

    const total = cartItems.reduce(
      (total, item) => total + item.price * (item.quantity),
      0
    );
    return total;
  };

  return (
    <div className="text-dark text-xs md:text-sm h-screen p-2">
      <aside className="flex justify-between px-2">
        <h2 className="text-sm md:text-md font-bold">Shopping Cart</h2>
        <button
          className="text-green font-medium border rounded-md px-5 py-1.5 hover:text-white hover:bg-green hover:border-none"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      </aside>

      <table className="w-full my-4">
        <thead>
          <tr className="border border-dark text-left p-2">
            <th className="w-3/6 p-1">Item</th>
            <th className="w-2/6 p-1">Quantity</th>
            <th className="w-1/6 p-1">Price</th>
          </tr>
        </thead>

        {renderCart()}
      </table>

      <aside className="flex justify-between px-2 my-3">
        <button
          className="text-green border py-1 px-5 font-medium rounded-md hover:text-white hover:bg-green hover:border-none"
          onClick={() => setCartItems(clearCart())}
        >
          Clear
        </button>
        <h3 className="text-sm font-bold">Total: &pound;{renderTotal()}</h3>
      </aside>
    </div>
  );
};

export default Cart;
