// import './App.css';
// import MyNavbar from './component/NavBar/MyNavbar';
// import { About } from './component/About/About';
// import Courses from './component/Courses/Courses';
// import Projects from './component/Projects/Projects';
// import Contacts from './component/Contact/Contacts';
// import Footer from './component/Footer/Footer';
// import Copyrights from './component/Footer/Copyrights';
// import SignInPage from './component/SignIn/SignInPage';  // Import SignInPage
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <MyNavbar />
//       <Routes>
//         <Route path="/" element={<About />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contacts />} />
//         <Route path="/signin" element={<SignInPage />} />  {/* Define SignIn route */}
//       </Routes>
//       <Footer />
//       <Copyrights />
//     </Router>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HomePage from './Components/homepage';
import Courses from './Components/Courses';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
// import AdminDashBoardComponent from './Components/AdminDashBoardComponent';
// import Student from './Components/Student';
// import Teacher from './Components/Teacher';
// import Course from './Components/Course';
// import AddBatch from './Components/AddBatch';
// import AddCourse from './Components/AddCourse';
// import AddStudents from './Components/AddStudents';
// import AddTeacher from './Components/AddTeacher';
// import TrainerDashBoardComponent from './Components/TrainerDashBoardComponent';
// import StudentDashBoardComponent from './Components/StudentDashboardComponent';
import SignInPage from './Components/SignInPage';
import StudentNewUser from './Components/StudentNewUser';
import Footer from './Components/Footer';
import MyNavbar from './Components/MyNavbar';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <>
      <MyNavbar />
      <ScrollToTop />
  <Outlet/>
      <Footer />
      </>
  );
}

export default App;


{/* <Routes>
<Route path="/" element={<HomePage />} /> 
<Route path="/courses" element={<Courses />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contacts />} />
{/* <Route path="/AdminDash" element={<AdminDashBoardComponent />} />
<Route path="/AddBatch" element={<AddBatch />} />
<Route path="/AddCourse" element={<AddCourse />} />
<Route path="/AddStudents" element={<AddStudents />} />
<Route path="/AddTeacher" element={<AddTeacher />} />
<Route path="/Course" element={<Course />} />
<Route path="/Teacher" element={<Teacher />} />
<Route path="/Student" element={<Student />} /> */}
{/* <Route path="/TrainerDash" element={<TrainerDashBoardComponent />} />
<Route path="/StudentDash" element={<StudentDashBoardComponent />} /> */}
{/* <Route path="/signin" element={<SignInPage />} />  
<Route path="/SignUp" element={<StudentNewUser />} />  
</Routes> */} 