import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBook, FaPencilAlt, FaSchool, FaBriefcase, FaUniversity } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const BScTimeline = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
      <h1 className="text-center text-3xl font-bold text-green-600 mb-6">BSC Roadmap</h1>
        <VerticalTimeline>
          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaSchool />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Science Stream</h3>
            <p>Take Physics, Chemistry, and Mathematics (PCM) or Biology (PCB) after 10th grade.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: 11th - 12th Grade Studies</h3>
            <p>Focus on Science subjects based on your interest (PCM or PCB).</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Choose a Specialization</h3>
            <p>Decide on a B.Sc. field such as Physics, Chemistry, Mathematics, Biotechnology, Agriculture, IT, etc.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaGraduationCap />}>
            <h3 className="vertical-timeline-element-title">Step 4: Apply for B.Sc. Admissions</h3>
            <p>Choose a university or college and complete the admission process.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaUniversity />}>
            <h3 className="vertical-timeline-element-title">Step 5: Complete Your B.Sc. Degree</h3>
            <p>Study your chosen specialization and engage in research projects.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 6: Job Placement or Higher Studies</h3>
            <p>Get a job in research, technology, or science-related industries, or pursue M.Sc./MBA.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default BScTimeline;
