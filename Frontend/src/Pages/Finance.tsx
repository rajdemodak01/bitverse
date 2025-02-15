import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBook, FaPencilAlt, FaSchool, FaBriefcase, FaChartLine } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const Finance = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
        <h1 className="text-center text-3xl font-bold text-green-600 mb-6">Finance Roadmap</h1>
        <VerticalTimeline>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaSchool />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Commerce/Science Stream</h3>
            <p>Select Commerce with Business Studies and Accountancy OR Science with Mathematics.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: 11th - 12th Grade Studies</h3>
            <p>Learn Financial Mathematics, Economics, and Business Studies.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Pursue B.Com/BBA in Finance</h3>
            <p>Enroll in B.Com or BBA with a specialization in Finance.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaChartLine />}>
            <h3 className="vertical-timeline-element-title">Step 4: Get Certified (CFA/FRM)</h3>
            <p>Complete certifications like CFA, FRM, or CFP for better career prospects.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 5: Career Opportunities</h3>
            <p>Work in Investment Banking, Stock Market Analysis, or Corporate Finance.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Finance;
