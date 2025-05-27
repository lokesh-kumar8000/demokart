import React from "react";

function Contact() {
  return (
    <div className=" w-full py-10 ">
      <div className="contianer md:grid grid-cols-2">
        <div className="col-span-1">
          <div className="max-w-xl mx-auto mt-0 lg:mt-10 p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Contact Us
            </h2>
            <form className="space-y-5">
              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  className="block mb-1 text-sm font-medium text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mx-3 mt-4 col-span-1 md:mt-0 " >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198687.32507018358!2d75.62574434445716!3d26.88511514270427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2z4KSc4KSv4KSq4KWB4KSwLCDgpLDgpL7gpJzgpLjgpY3gpKXgpL7gpKg!5e1!3m2!1shi!2sin!4v1748161472247!5m2!1shi!2sin"
            width={'100%'}
            height={500} 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"  
            className = 'rounded-xl'
          /> 
        </div>
      </div>
    </div>
  );
}

export default Contact;
