import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Navbar } from "../Components/Navbar";
import { useUser } from "@clerk/clerk-react";

Modal.setAppElement("#root");

interface Mentor {
  _id: string;
  name: string;
  profileUrl: string;
  about: string;
}

const Mentors: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useUser();
  const userId = user?.id; // Get actual Clerk userId

  useEffect(() => {
    axios
      .get("/api/mentors") // API endpoint
      .then((res) => setMentors(res.data))
      .catch((err) => console.error("Error fetching mentors:", err));
  }, []);

  const openModal = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMentor(null);
    setDate("");
    setTime("");
  };

  const handleBooking = async () => {
    if (!userId) {
      alert("You must be logged in to book a mentor session.");
      return;
    }
    if (!selectedMentor || !date || !time) {
      alert("Please select date and time.");
      return;
    }

    try {
      await axios.post("/api/book", {
        userId,
        mentorId: selectedMentor._id,
        date,
        time,
      });

      alert("Booking successful!");
      closeModal();
    } catch (err) {
      console.error("Error booking session:", err);
      alert("Failed to book the session. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col items-center gap-10 p-4 bg-gradient-to-r from-green-400 to-yellow-300 " >
        <h1 className="text-2xl font-semibold text-center">Mentor Booking</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {mentors.map((mentor) => (
            <div key={mentor._id} className="border p-4 rounded-lg shadow-lg text-center">
              <img className="w-32 h-32 mx-auto rounded-full" src={mentor.profileUrl} alt={mentor.name} />
              <h2 className="text-lg font-semibold mt-2">{mentor.name}</h2>
              <p className="text-sm text-gray-600">{mentor.about}</p>
              <button
                onClick={() => openModal(mentor)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Book Session
              </button>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
        >
          <h2 className="text-xl font-semibold">Book {selectedMentor?.name}</h2>
          <div className="mt-4">
            <label className="block text-sm font-medium">
              Select Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border rounded p-2 mt-1"
              />
            </label>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Time:
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full border rounded p-2 mt-1"
              />
            </label>
          </div>
          <div className="mt-6 flex justify-between">
            <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
            <button onClick={handleBooking} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Confirm</button>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Mentors;
