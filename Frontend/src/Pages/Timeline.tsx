import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBook, FaPencilAlt, FaSchool, FaBriefcase, FaBuilding } from "react-icons/fa";
import { TimelineNavbar } from "../Components";

const Timelines = () => {
  return (
    <>
      <TimelineNavbar />
      <div className="relative min-h-fit p-9 bg-gray-100">
      <h1 className="text-center text-3xl font-bold text-green-600 mb-6">Engineering Roadmap</h1>
        <VerticalTimeline>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaSchool />}>
            <h3 className="vertical-timeline-element-title">Step 1: Choose Science Stream</h3>
            <p>Take Physics, Chemistry, and Mathematics (PCM) after 10th grade.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBook />}>
            <h3 className="vertical-timeline-element-title">Step 2: 11th - 12th Grade Studies</h3>
            <p>Focus on PCM subjects and prepare for engineering entrance exams.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaPencilAlt />}>
            <h3 className="vertical-timeline-element-title">Step 3: Prepare for JEE & State-Level Exams</h3>
            <p>Study for JEE Main, JEE Advanced, or state-level exams like MHT-CET, WBJEE.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaGraduationCap />}>
            <h3 className="vertical-timeline-element-title">Step 4: Appear for JEE Main</h3>
            <p>Qualify for JEE Main to secure admission in NITs, IIITs, and other top institutes.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaGraduationCap />}>
            <h3 className="vertical-timeline-element-title">Step 5: Appear for JEE Advanced</h3>
            <p>If qualified in JEE Main, attempt JEE Advanced for admission into IITs.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }} icon={<FaBuilding />}>
            <h3 className="vertical-timeline-element-title">Step 6: State-Level Engineering Exams</h3>
            <p>Appear for exams like MHT-CET, WBJEE, KCET, BITSAT, or VITEEE.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} icon={<FaBuilding />}>
            <h3 className="vertical-timeline-element-title">Step 7: College Admission</h3>
            <p>Participate in counseling and secure admission in engineering colleges.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} icon={<FaBriefcase />}>
            <h3 className="vertical-timeline-element-title">Step 8: Internships & Placements</h3>
            <p>Gain experience through internships and get placed in companies.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timelines;
