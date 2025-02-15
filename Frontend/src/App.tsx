import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"; 
import Error from "./Pages/Error";
import Mentors from "./Pages/Mentors";
import Sessions from "./Pages/Sessions";
import Workshops from "./Pages/Workshops";
import Dashboard from "./Pages/DashBoard/Dashboard";
import CreateAccount from "./Pages/CreateAccount";
import Signin from "./sign-in/[[...index]]";
import Signup from "./sign-up/[[...index]]";
import Sciencelibrary from "./Pages/DashBoard/Sciencelibrary";
import Timelines from "./Pages/Timeline"; // ✅ Engineering Timeline
import MedicalTimeline from "./Pages/MedicalTimeline"; // ✅ Medical Timeline
import BScTimeline from "./Pages/BScTimeline"; // ✅ B.Sc Timeline
// import StudentCareerQuiz from "./Pages/StudentCareerQuiz"; // ✅ Added Career Quiz

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in/*" element={<Signin />} />
        <Route path="/sign-up/*" element={<Signup />} />
        <Route path="*" element={<Error />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/workshops" element={<Workshops />} />

        {/* Engineering, Medical, and B.Sc Timelines */}
        <Route path="/timelines/eng" element={<Timelines />} />
        <Route path="/timelines/medical" element={<MedicalTimeline />} />
        <Route path="/timelines/bsc" element={<BScTimeline />} />

        {/* Science Career Library */}
        <Route path="/career-science" element={<Sciencelibrary />} />

        {/* ✅ Added Career Quiz Route */}
        {/* <Route path="/career-quiz" element={<StudentCareerQuiz />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
