import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    billingAddress: "",
    shoppingAddress: "",
  });

  const confirmOrder = () => {
    navigate("/cart");
  };

  const errors = {
    name: form.name.length === 0,
    email: form.email.length === 0,
    shoppingAddress: form.shoppingAddress.length === 0,
    touched: {
      name: false,
      email: false,
      billingAddress: false,
      shoppingAddress: false
    }
  };
  const disabled = Object.keys(errors).some(x => errors[x]);

  const handleChange = (ev) => {
    const {name, value} = ev.target;
    setForm((prevState) => {
      return {
       ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (ev) => {
    if (disabled) {
      ev.preventDefault();
      return;
    }
    navigate("/orderConfirmation")
  };


  return (
    <article className="h-screen p-2 text-dark text-xs md:text-sm">
      <div className="h-screen">
        <h3 className="text-sm md:text-md font-bold pt-4 pb-6 md:pb-10">
          Checkout
        </h3>

        <h4 className="font-semibold">Your Details</h4>
        <hr></hr>

        <form className="px-1 py-2 flex flex-col md:flex-row md:justify-between" onSubmit={handleSubmit}>
          <label>
            Name<span className="text-red px-0.5">*</span>
            <input
              className="border border-grey w-96 rounded-sm mx-1 my-1 md:my-2 p-2 outline-none"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
            Email<span className="text-red px-0.5">*</span>
            <input
              className="border border-grey w-96 rounded-sm mx-2 my-1 md:my-2 p-2 outline-none"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
        </form>
        <br></br>

        <h4 className="font-semibold">Address Details</h4>
        <hr></hr>
        <aside className="mx-1 mt-2 mb-2">
          <label className="mx-1 flex">
            Copy to Shipping?
            <input className="mx-2" type="checkbox" />
          </label>
        </aside>

        <aside className="mx-1">
          <label className="mx-1">
            Home Address
            <br></br>
            <input
              className="border border-grey w-full rounded-sm mx-1 my-1 md:my-2 p-2 outline-none"
              type="text"
              name="homeAddress"
              onChange={handleChange}
              placeholder="Enter your home address"
            />
          </label>
          <br></br>
        </aside>

        <aside className="mx-1">
          <label className="mx-1">
            Shipping Address<span className="text-red px-0.5">*</span>
            <br></br>
            <input
              className="border border-grey w-full rounded-sm mx-1 my-1 md:my-2 p-2 outline-none"
              type="text"
              name="shippingAddress"
              onChange={handleChange}
              placeholder="Enter your shipping address"
              required
            />
          </label>
          <br></br>
        </aside>

        <section className="flex px-4 py-2 mt-8 justify-between">
          <button
            className="text-green font-medium border rounded-md px-6 py-1.5 hover:text-white hover:bg-green hover:border-none"
            onClick={confirmOrder}
          >
            Cancel
          </button>
          <button
            className="text-green font-medium border rounded-md px-5 py-1.5 hover:text-white hover:bg-green hover:border-none"
            onClick={handleSubmit}
            disabled={disabled}
          >
            Confirm Order
          </button>
        </section>
      </div>
    </article>
  );
};

export default Checkout;
