"use client";
import React, { useState } from "react";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      userType: e.target.userType.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 py-12 gap-8 relative">
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10">
        <h5 className="text-3xl font-semibold text-white mb-4">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-6 text-lg">
          Please reach out to us with any questions or concerns. We’re happy to hear from you.
        </p>
        <div className="socials flex flex-col gap-2">
          <ul>
            <li>5th Floor, Suite 18, Vision Plaza, Mombasa Road</li>
            <li>P.O Box 24235 - 00100, Nairobi, Kenya</li>
            <li>Phone: +254 727 857785</li>
            <li>Email: info@the-orth.com</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#18191E] p-6 rounded-lg shadow-lg z-10">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="text-white text-sm font-medium">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  required
                  className="bg-[#2A2D37] text-white placeholder-[#9CA2A9] border border-[#33353F] rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="John"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="text-white text-sm font-medium">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  required
                  className="bg-[#2A2D37] text-white placeholder-[#9CA2A9] border border-[#33353F] rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-white text-sm font-medium">Your Email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#2A2D37] text-white placeholder-[#9CA2A9] border border-[#33353F] rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="phone" className="text-white text-sm font-medium">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  id="phone"
                  required
                  className="bg-[#2A2D37] text-white placeholder-[#9CA2A9] border border-[#33353F] rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="+254 712 345678"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="userType" className="text-white text-sm font-medium">User Type</label>
                <select
                  name="userType"
                  id="userType"
                  required
                  className="bg-[#2A2D37] text-white border border-[#33353F] rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="company">Company</option>
                  <option value="individual">Individual</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-white text-sm font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#2A2D37] text-white placeholder-[#9CA2A9] border border-[#33353F] rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white text-sm font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#2A2D37] text-white placeholder-[#9CA2A9] border border-[#33353F] rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-lg w-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
