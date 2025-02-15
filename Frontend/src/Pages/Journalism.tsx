import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaNewspaper, FaBook, FaPencilAlt, FaMicrophone, FaBriefcase } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const Journalism = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
        <h1 className="text-center text-3xl font-bold text-blue-600 mb-6">Journalism & Media Roadmap</h1>
        <VerticalTimeline>

          <VerticalTimelineElement iconStyle={{ background: "rgb(150, 50, 243)", color: "#fff" }} icon={<FaNewspaper />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Arts Stream</h3>
            <p>Focus on subjects like English, Political Science, and Mass Media.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: Pursue a Bachelor's Degree</h3>
            <p>Get a **BJMC (Bachelor of Journalism & Mass Communication)** degree.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Internships & Freelancing</h3>
            <p>Gain experience through media houses, blogging, and journalism internships.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaMicrophone />}>
            <h3 className="vertical-timeline-element-title">Step 4: Build a Portfolio</h3>
            <p>Create a strong resume by publishing articles, videos, or podcasts.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 5: Career Opportunities</h3>
            <p>Work as a Journalist, News Anchor, or Digital Media Specialist.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Journalism;
