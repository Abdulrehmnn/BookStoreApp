import React from "react";

const Contact = () => {
  return  (
    <div className="flex h-screen items-center justify-center ">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 outline-none rounded"
              />
            </div>
            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2 "
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full px-3 py-2 rounded outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message"
                className="w-full px-3 py-2 outline-none rounded"
                rows="4"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
