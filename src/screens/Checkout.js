import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const confirmOrder = (ev) => {
    navigate('/orderConfirmation')
  };

  return (
    <article className="h-screen p-2 text-dark text-xs md:text-sm">
      <div className="h-screen">
        <h3 className="text-sm md:text-md font-bold pt-4 pb-6 md:pb-10">
          Checkout
        </h3>

        <h4 className="font-semibold">Your Details</h4>
        <hr></hr>

        <form className="px-1 py-2 flex flex-col md:flex-row md:justify-between">
          <label>
            Name
            <input className="border border-grey w-96 rounded-sm mx-1 my-1 md:my-2 p-2 outline-none" type="text" name="name" />
          </label>
          <label>
            Email
            <input className="border border-grey w-96 rounded-sm mx-2 my-1 md:my-2 p-2 outline-none" type="email" name="email" />
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
            Personal Address
            <br></br>
            <input className="border border-grey w-full rounded-sm mx-1 my-1 md:my-2 p-2 outline-none" type="text" name="personal-address" />
          </label>
          <br></br>
        </aside>

        <aside className="mx-1">
          <label className="mx-1">
            Shipping Address
            <br></br>
            <input className="border border-grey w-full rounded-sm mx-1 my-1 md:my-2 p-2 outline-none" type="text" name="shipping-address" />
          </label>
          <br></br>
        </aside>

        <section className="flex px-4 py-2 mt-8 justify-between">
          <button className="text-green font-medium border rounded-md px-6 py-1.5 hover:text-white hover:bg-green hover:border-none" onClick={() => navigate("/cart")} >
            Cancel
          </button>
          <button className="text-green font-medium border rounded-md px-5 py-1.5 hover:text-white hover:bg-green hover:border-none" onClick={confirmOrder} >
            Confirm Order
          </button>
        </section>
      </div>

    </article>
  );
};

export default Checkout;
