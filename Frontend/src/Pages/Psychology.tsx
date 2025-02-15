import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBrain, FaBook, FaPencilAlt, FaUsers, FaBriefcase } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const Psychology = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
        <h1 className="text-center text-3xl font-bold text-teal-600 mb-6">Psychology Roadmap</h1>
        <VerticalTimeline>

          <VerticalTimelineElement iconStyle={{ background: "rgb(150, 50, 243)", color: "#fff" }} icon={<FaBrain />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Arts/Science Stream</h3>
            <p>Take Psychology, Sociology, or Biology in high school.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: Pursue a Bachelor's Degree</h3>
            <p>Get a **BA/B.Sc in Psychology**.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Specialize in Clinical or Counseling Psychology</h3>
            <p>Focus on areas like Therapy, Mental Health, and Counseling.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaUsers />}>
            <h3 className="vertical-timeline-element-title">Step 4: Get a Master's Degree</h3>
            <p>Pursue M.Sc/M.A in Psychology for better career prospects.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 5: Career Opportunities</h3>
            <p>Work as a Clinical Psychologist, Counselor, or Researcher.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Psychology;
