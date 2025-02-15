import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {  FaBook, FaPencilAlt, FaSchool, FaBriefcase, FaBuilding } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const Business = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
        <h1 className="text-center text-3xl font-bold text-orange-600 mb-6">Business Management Roadmap</h1>
        <VerticalTimeline>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaSchool />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Commerce Stream</h3>
            <p>Opt for Business Studies, Accountancy, and Economics after 10th grade.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: 11th - 12th Grade Studies</h3>
            <p>Learn about Business Laws, Entrepreneurship, and Economics.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Pursue BBA/BMS</h3>
            <p>Enroll in a Bachelor's degree in Business Administration or Management.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBuilding />}>
            <h3 className="vertical-timeline-element-title">Step 4: Get an MBA</h3>
            <p>Specialize in Marketing, Finance, HR, or Operations through an MBA.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 5: Career in Business Management</h3>
            <p>Work in corporate leadership roles, start your own business, or pursue consulting.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Business;
