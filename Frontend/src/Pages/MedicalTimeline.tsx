import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBook, FaPencilAlt, FaSchool, FaBriefcase, FaHospital, FaUserGraduate } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const MedicalTimeline = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
      <h1 className="text-center text-3xl font-bold text-green-600 mb-6">Medical Roadmap</h1>
        <VerticalTimeline>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaSchool />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Science Stream</h3>
            <p>Take Physics, Chemistry, and Biology (PCB) after 10th grade.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: 11th - 12th Grade Studies</h3>
            <p>Focus on PCB subjects and prepare for medical entrance exams.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Prepare for NEET & AIIMS</h3>
            <p>Study for NEET, AIIMS, and other medical entrance exams.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaGraduationCap />}>
            <h3 className="vertical-timeline-element-title">Step 4: Appear for NEET</h3>
            <p>Qualify NEET to secure admission in MBBS/BDS courses.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaHospital />}>
            <h3 className="vertical-timeline-element-title">Step 5: MBBS/BDS Admission</h3>
            <p>Join a medical college and start your journey in the medical field.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 6: Internship & Residency</h3>
            <p>Complete 1 year of internship and prepare for specialization.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaUserGraduate />}>
            <h3 className="vertical-timeline-element-title">Step 7: Specialization (MD/MS)</h3>
            <p>Pursue MD/MS in a specialized field like Surgery, Cardiology, or Neurology.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default MedicalTimeline;
