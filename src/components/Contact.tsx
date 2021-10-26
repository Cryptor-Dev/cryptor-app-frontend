import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col px-4 lg:px-0">
      <div className="flex md:flex-row flex-col space-y-6 md:space-y-0">
        <div className="text-white my-auto md:mx-auto w-56 space-y-2">
          <h1 className="text-2xl">Stay Conencted</h1>
          <p className="text-xs font-light">
            Subscribe to our newsletter and never miss any update
          </p>
        </div>
        <div className="md:mx-auto my-auto space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-b w-60 focus:ring-green-600"
          />
          <button className="rounded-l-full rounded-r-full border text-white h-8 w-24 transition transform duration-200 hover:bg-green-500 hover:border-transparent">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col text-white my-28 space-y-12 md:space-y-0 ">
        <h3 className="text-2xl mx-auto mb-8 uppercase">We always love to hear you</h3>
        <div className="w-4/5 md:w-3/5 lg:w-1/2 mx-auto">
          <div className="rounded-3xl flex flex-col space-y-12 mx-8 px-8 py-12 shadow-2xl bg-gradient-to-tr from-black via-gray-900 to-emerald-900">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b focus:"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent border-b"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-transparent border-b"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="bg-transparent border-b"
            ></textarea>
            <button className="text-white ml-auto border w-20 h-8 rounded-lg transition transform duration-200 hover:bg-green-500 hover:border-transparent">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
