import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBook, FaPencilAlt, FaSchool, FaBriefcase, FaCalculator } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const Accounting = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
        <h1 className="text-center text-3xl font-bold text-blue-600 mb-6">Accounting Roadmap</h1>
        <VerticalTimeline>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaSchool />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Commerce Stream</h3>
            <p>Select Commerce with Accountancy and Business Studies after 10th grade.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: 11th - 12th Grade Studies</h3>
            <p>Focus on Accountancy, Economics, and Mathematics.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Appear for CA/CS/CMA Entrance Exams</h3>
            <p>Register for CA Foundation, CS Foundation, or CMA Foundation exams.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaGraduationCap />}>
            <h3 className="vertical-timeline-element-title">Step 4: Pursue B.Com/BBA</h3>
            <p>Enroll in a Bachelor's degree in Accounting, Finance, or Commerce.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaCalculator />}>
            <h3 className="vertical-timeline-element-title">Step 5: Complete CA/CS/CMA</h3>
            <p>Clear CA Intermediate, Articleship, and Final exams to become a Chartered Accountant.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 6: Career Opportunities</h3>
            <p>Work as an Accountant, Auditor, Financial Analyst, or Tax Consultant.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Accounting;
