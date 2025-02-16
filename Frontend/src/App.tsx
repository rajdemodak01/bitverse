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
import Timelines from "./Pages/Timeline";
import MedicalTimeline from "./Pages/MedicalTimeline";
import BScTimeline from "./Pages/BScTimeline";
import Commercelibrary from "./Pages/DashBoard/Commercelibrary";
import Accounting from "./Pages/Accounting";
import Business from "./Pages/Business";
import Finance from "./Pages/Finance";
import Artslibrary from "./Pages/DashBoard/Artslibrary";
import FineArts from "./Pages/FineArts";
import Journalism from "./Pages/Journalism";
import Psychology from "./Pages/Psychology";
import StudentCareerQuiz from "./Pages/DashBoard/StudentCareerQuiz"; // ✅ Added Career Quiz
import QuizResults from "./Pages/DashBoard/QuizResults"; // ✅ Added Quiz Results

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

        {/* Science Career Library */}
        <Route path="/career-science" element={<Sciencelibrary />} />

        {/* Engineering, Medical, and B.Sc Timelines */}
        <Route path="/timelines/eng" element={<Timelines />} />
        <Route path="/timelines/medical" element={<MedicalTimeline />} />
        <Route path="/timelines/bsc" element={<BScTimeline />} />

        {/* Commerce Career Library */}
        <Route path="/career-commerce" element={<Commercelibrary />} />
        <Route path="/career-commerce/accounting" element={<Accounting />} />
        <Route path="/career-commerce/finance" element={<Finance />} />
        <Route path="/career-commerce/business" element={<Business />} />

        {/* Arts Career Library */}
        <Route path="/career-arts" element={<Artslibrary />} />
        <Route path="/career-arts/fine-arts" element={<FineArts />} />
        <Route path="/career-arts/journalism" element={<Journalism />} />
        <Route path="/career-arts/psychology" element={<Psychology />} />

        {/* Career Quiz & Results */}
        <Route path="/career-quiz" element={<StudentCareerQuiz />} />
        <Route path="/career-quiz/results" element={<QuizResults />} />
      </Routes>
    </Router>
  );
};

export default App;
