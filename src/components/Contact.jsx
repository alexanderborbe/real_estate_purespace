import React from "react";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c2abc751-84e2-4013-9a21-e9eb142ed224");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        alert(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="py-20 px-6 lg:px-32 w-full bg-white" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact Us
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-md mx-auto">
        Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      {/* Card Style Form */}
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8">
        <form onSubmit={onSubmit} className="space-y-6 text-gray-700">
          <div>
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
              type="text"
              name="Name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none"
              type="email"
              name="Email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg py-3 px-4 h-40 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              name="Message"
              placeholder="Write your message..."
              required
            />
          </div>
          <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
