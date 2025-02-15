import React from "react";
import { Navbar } from "../Components/Navbar";

// Sessions data (matching Mentors layout)
const sessions = [
  {
    title: "AI & Machine Learning",
    speaker: "Dr. Alice Johnson",
    profileUrl: "https://lh4.googleusercontent.com/proxy/NMybxZe1eKmL1TeTCklX_gI2kruQZTAJp2RB8ixWyac27lwvDugun7f973nqynpFqFkwKhJ9q6V3IxX488oxAQtoLU7jDrUoSrzaKD0E3d03-WoV-RWkdhhtxPeTj08",
    about: "Explore the future of AI and its applications in various industries.",
  },
  {
    title: "Full Stack Development",
    speaker: "Bob Smith",
    profileUrl: "https://source.unsplash.com/300x300/?developer,code",
    about: "A complete guide to becoming a full-stack developer.",
  },
  {
    title: "Cybersecurity Essentials",
    speaker: "Charlie Brown",
    profileUrl: "https://source.unsplash.com/300x300/?hacker,security",
    about: "Learn the fundamentals of ethical hacking and cybersecurity.",
  },
  {
    title: "UI/UX Design Principles",
    speaker: "Diana Prince",
    profileUrl: "https://source.unsplash.com/300x300/?design,ux",
    about: "Understand the importance of user experience in product design.",
  },
  {
    title: "Cloud Computing & DevOps",
    speaker: "George Carter",
    profileUrl: "https://source.unsplash.com/300x300/?cloud,server",
    about: "Master cloud computing and DevOps best practices.",
  },
  {
    title: "Blockchain & Cryptocurrency",
    speaker: "Julia Adams",
    profileUrl: "https://source.unsplash.com/300x300/?bitcoin,blockchain",
    about: "A beginner-friendly introduction to blockchain technology.",
  },
];

const Sessions: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto justify-center items-center min-h-screen flex flex-col gap-10 p-4 overflow-y-auto max-w-screen-lg">
        <h1 className="text-4xl font-bold text-center text-teal-600">Upcoming Sessions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {sessions.map((session, index) => (
            <div key={index} className="card">
              <div className="profile-pic flex justify-center items-center w-full h-full border-2 border-red-200">
                <img className="object-cover w-full h-full" src={session.profileUrl} alt={session.title} />
              </div>

              <div className="bottom">
                <div className="content">
                  <span className="name">{session.title}</span>
                  <span className="about-me">Speaker: {session.speaker}</span>
                  <p className="text-gray-700 mt-2">{session.about}</p>
                </div>
                <div className="bottom-bottom">
                  <button className="button">Join Session</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sessions;
