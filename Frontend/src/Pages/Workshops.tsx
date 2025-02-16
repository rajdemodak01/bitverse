import React from "react";
import { Navbar } from "../Components/Navbar";

const workshops = [
  {
    title: "Fundamentals of a Successful Career",
    instructor: "Emily Johnson",
    profileUrl: "https://www.smart-academy.in/wp-content/uploads/2024/02/BLOG-Image-Six-Fundamentals-for-a-Successful-Career.jpg",
    about: "A comprehensive guide to career planning, skill development, and professional growth.",
  },
  {
    title: "Medical Innovations & Research",
    instructor: "Dr. Robert Carter",
    profileUrl: "https://as1.ftcdn.net/jpg/02/87/11/88/1000_F_287118885_QlC7leCsDngir8NEUUJyfwOjhAEOEIUU.jpg",
    about: "Explore advanced medical technologies, research methods, and AI in healthcare.",
  },
  {
    title: "Accounting & Financial Analysis",
    instructor: "Hannah Lee",
    profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BVOElQsBbrJw59HABVmtixEFvcPuD-CHcA&s",
    about: "Master the fundamentals of accounting, financial statements, and risk management.",
  },
  {
    title: "Finance & Investment Strategies",
    instructor: "Sarah Kim",
    profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7Oh-U_dSwHKoGVUtofm9d5rMU8Hf_JnnJA&s",
    about: "Understand investment principles, portfolio management, and financial planning.",
  },
  {
    title: "Fine Arts & Creative Expression",
    instructor: "Michael Scott",
    profileUrl: "https://rukminim2.flixcart.com/image/850/1000/l111lzk0/poster/r/a/j/large-self-adhesive-uv-coated-high-resolution-vinyl-print-original-imagcztnt6wxfphz.jpeg?q=20&crop=false",
    about: "Explore painting, sculpture, digital art, and creative techniques in fine arts.",
  },
  {
    title: "Sports & Fitness Training",
    instructor: "David Williams",
    profileUrl: "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1545238540/1545238539.jpg",
    about: "Learn effective training methods, injury prevention, and athletic performance strategies.",
  },
];

const Workshops: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col items-center gap-10 p-4 bg-gradient-to-r from-green-400 to-yellow-300">
        <h1 className="text-4xl font-bold text-center text-teal-600">Upcoming Workshops</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-screen-lg">
          {workshops.map((workshop, index) => (
            <div key={index} className="w-72 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-b from-teal-300 to-teal-500 relative">
              <div className="w-full h-48 flex justify-center items-center bg-gray-100 rounded-t-2xl relative group">
                <img
                  className="object-cover w-full h-full rounded-t-2xl"
                  src={workshop.profileUrl}
                  alt={workshop.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 transition-opacity duration-300">
                  <p className="text-white text-lg font-bold text-center">{workshop.about}</p>
                </div>
              </div>
              <div className="p-4 text-center text-white">
                <h2 className="text-xl font-semibold">{workshop.title}</h2>
                <p className="text-sm mt-1">Instructor: {workshop.instructor}</p>
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workshops;
