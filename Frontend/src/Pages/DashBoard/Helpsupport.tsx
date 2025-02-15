import { useState } from "react";

const Helpsupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "",
      });
      setSubmitted(false);
      window.location.reload();
    }, 2000);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row">
        <div className="flex-1 lg:mb-0 mb-6 relative h-90">
          <img
            src="https://pagedone.io/asset/uploads/1696488602.png"
            alt="Contact Us"
            className="w-full h-full lg:rounded-l-xl rounded-xl bg-blend-multiply bg-indigo-700"
          />
          <h1 className="text-white text-3xl font-bold absolute top-8 left-8">
            Help & Support
          </h1>
        </div>

        <div className="flex-1 bg-gray-50 p-4 lg:p-8 lg:rounded-r-xl rounded-xl">
          <h2 className="text-indigo-600 text-3xl font-semibold mb-8">
            Send Us A Message
          </h2>
          {submitted && (
            <p className="text-green-600 text-lg font-semibold text-center my-4">
              Your message has been submitted successfully!
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-10 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
              placeholder="Phone"
              required
            />
            <div className="mb-6">
              <h4 className="text-gray-500 text-lg font-normal mb-3">
                Preferred method of communication
              </h4>
              <div className="flex">
                <label className="flex items-center mr-6 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span className={`border border-gray-300 rounded-full mr-2 w-4 h-4 flex items-center justify-center ${formData.preferredContact === "email" ? "bg-indigo-600" : ""}`}>
                    {formData.preferredContact === "email" && <span className="w-2 h-2 bg-white rounded-full"></span>}
                  </span>
                  Email
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span className={`border border-gray-300 rounded-full mr-2 w-4 h-4 flex items-center justify-center ${formData.preferredContact === "phone" ? "bg-indigo-600" : ""}`}>
                    {formData.preferredContact === "phone" && <span className="w-2 h-2 bg-white rounded-full"></span>}
                  </span>
                  Phone
                </label>
              </div>
            </div>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-10 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm rounded-full border border-gray-200 focus:outline-none pl-4 mb-6"
              placeholder="Message"
              required
            />
            <button
              type="submit"
              className="w-full h-10 text-white text-base font-semibold rounded-full bg-indigo-600 shadow-sm hover:bg-indigo-800 transition-all duration-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Helpsupport;
