import React from "react";
import { Navbar } from "../Components/Navbar";

// Workshop data with guaranteed working image URLs
const workshops = [
  {
    title: "Web Development Bootcamp",
    instructor: "Emily Johnson",
    profileUrl: "https://dy7glz37jgl0b.cloudfront.net/advice/images/aca3301460cbabd1712c0cbceb1c4516-woman-blue-shirt-gazes-off_l.jpg",
    about: "A hands-on bootcamp covering HTML, CSS, JavaScript, and React.",
  },
  {
    title: "AI & Data Science Workshop",
    instructor: "Dr. Robert Carter",
    profileUrl: "https://cdn.pixabay.com/photo/2019/07/10/17/46/artificial-intelligence-4326436_1280.jpg",
    about: "Learn machine learning, data analysis, and AI model building.",
  },
  {
    title: "Cybersecurity Fundamentals",
    instructor: "Hannah Lee",
    profileUrl: "https://cdn.pixabay.com/photo/2019/04/14/10/05/security-4126799_1280.jpg",
    about: "Explore ethical hacking, security testing, and digital forensics.",
  },
  {
    title: "Graphic Design & UI/UX",
    instructor: "Sarah Kim",
    profileUrl: "https://cdn.pixabay.com/photo/2018/05/08/08/54/webdesign-3380359_1280.jpg",
    about: "Master Adobe tools and design stunning user interfaces.",
  },
  {
    title: "Cloud & DevOps Masterclass",
    instructor: "Michael Scott",
    profileUrl: "https://cdn.pixabay.com/photo/2016/11/23/14/45/server-1853098_1280.jpg",
    about: "Dive into AWS, Azure, Kubernetes, and CI/CD pipelines.",
  },
  {
    title: "Blockchain & Web3 Development",
    instructor: "Sophia Anderson",
    profileUrl: "https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3090250_1280.jpg",
    about: "Understand smart contracts, decentralized apps, and NFT markets.",
  },
];

const Workshops: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto justify-center items-center min-h-screen flex flex-col gap-10 p-4 overflow-y-auto max-w-screen-lg">
        <h1 className="text-4xl font-bold text-center text-teal-600">Upcoming Workshops</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {workshops.map((workshop, index) => (
            <div key={index} className="card">
              <div className="profile-pic flex justify-center items-center w-full h-full border-2 border-teal-200">
                <img className="object-cover w-full h-full" src={workshop.profileUrl} alt={workshop.title} loading="lazy" />
              </div>

              <div className="bottom">
                <div className="content">
                  <span className="name">{workshop.title}</span>
                  <span className="about-me">Instructor: {workshop.instructor}</span>
                  <p className="text-gray-700 mt-2">{workshop.about}</p>
                </div>
                <div className="bottom-bottom">
                  <button className="button bg-teal-600 hover:bg-teal-700 text-white">Register Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workshops;
