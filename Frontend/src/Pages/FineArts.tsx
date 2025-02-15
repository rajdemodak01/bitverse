import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaPaintBrush, FaBook, FaPencilAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const FineArts = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
        <h1 className="text-center text-3xl font-bold text-purple-600 mb-6">Fine Arts Roadmap</h1>
        <VerticalTimeline>

          <VerticalTimelineElement iconStyle={{ background: "rgb(150, 50, 243)", color: "#fff" }} icon={<FaPaintBrush />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Arts Stream</h3>
            <p>Study Fine Arts, Drawing, and Visual Arts in high school.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: Pursue a Bachelor's Degree</h3>
            <p>Get a **BFA (Bachelor of Fine Arts)** or equivalent degree.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Specialization</h3>
            <p>Choose a focus like Painting, Sculpture, or Digital Arts.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaGraduationCap />}>
            <h3 className="vertical-timeline-element-title">Step 4: Get an MFA (Optional)</h3>
            <p>Enhance skills with a Master’s degree in Fine Arts.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 5: Career Opportunities</h3>
            <p>Become a Professional Artist, Illustrator, or Graphic Designer.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default FineArts;
