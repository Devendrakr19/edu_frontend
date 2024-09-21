import { Card } from "antd";
import React from "react";
import RecomendCoursePage from "./RecomendCoursePage";
import { useNavigate } from "react-router-dom";
import Page7 from "../layouts/landing-pages/Page7";
import Footer from "../layouts/landing-pages/Footer";

function CartPage({ AddCart, handleRemove, getTotalPrice, getMaxTotalPrice }) {
  const Navigate = useNavigate();
  return (
    <>
      <section className="max-w-[1280px] mx-auto">
        <div className="containerauto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-3xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {AddCart.length} Items
                </h2>
              </div>
              <div className="flex items-center justify-between mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-sm uppercase w-2/5">
                  Product Details
                </h3>

                <h3 className="font-semibold text-center text-gray-600 text-sm uppercase  ">
                  Price
                </h3>
              </div>
              {/* Cart iteam Start  */}
              {AddCart.map((cartIteams, index) => {
                const {
                  id,
                  img,
                  title,
                  name,
                  time,

                  price,
                  maxprice,
                } = cartIteams;

                return (
                  <div className="flex items-center justify-between hover:bg-gray-100 -mx-8 px-4 py-5">
                    <div className="flex ">
                      <div className="w-56 object-cover">
                        <img className="h-24" src={img} />
                      </div>
                      <div className="flex max-w-[60%] flex-col justify-between  flex-grow">
                        <span className="font-bold text-sm">{title} </span>
                        <span className=" text-xs">{name}</span>
                        <span
                          className="text-red-500 text-xs cursor-pointer"
                          onClick={() => handleRemove(id)}
                        >
                          Remove
                        </span>
                      </div>
                    </div>

                    <div className="w-1/12">
                      <p className="text-center  font-semibold text-sm">{`₹${price}`}</p>
                      <p className="text-center line-through  font-semibold text-sm">
                        {" "}
                        {`₹${maxprice}`}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Cart iteam End  */}

              <p
                className="flex font-semibold cursor-pointer text-background hover:text-teal-600 text-sm mt-10"
                onClick={() => Navigate("/")}
              >
                <svg
                  className="fill-current mr-2 text-background hover:text-teal-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </p>
            </div>
            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {AddCart.length}{" "}
                </span>
              </div>

              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-background hover:bg-teal-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-4 text-sm uppercase">
                  <span>Total cost </span>
                  <span className="text-2xl">{getTotalPrice()}</span>
                </div>
                <div className="flex font-semibold justify-end line-through pb-4 text-sm uppercase">
                  <span>{getMaxTotalPrice()}</span>
                </div>
                <button className="bg-background hover:bg-teal-600 font-semibold  py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <RecomendCoursePage />
        </div>
      </section>
      <Page7 />
      <Footer />
    </>
  );
}

export default CartPage;
