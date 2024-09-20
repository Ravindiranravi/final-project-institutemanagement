import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Components/homepage";
import Courses from "../Components/Courses";
import Projects from "../Components/Projects";
import Contacts from "../Components/Contacts";
import SignInPage from "../Components/SignInPage";
import StudentNewUser from "../Components/StudentNewUser";
import AdminDashBoardComp from "../Components/AdminDashBoardComp";
import TeacherDashboard from "../Components/TeacherDashboard";
import StudentDashboard from "../Components/StudentDashboard";
import PageNotFound from "../Components/PageNotFound";



const router = createBrowserRouter([

{
    path:"",
    element:<App/>,
    children:[
        {
            path:"",
            element:<HomePage/>
        },
        {
            path : "courses",
            element :<Courses/>
        },
        {
            path : "projects",
            element : <Projects/>
        },
        {
            path:"contact",
            element : <Contacts/>
        },
        {
            path:"signin",
            element : <SignInPage/>
        },
        {
            path : "signup",
            element : <StudentNewUser/>
        }
       
    ]
},

{
    path :"/AdminDashboard",
    element : <AdminDashBoardComp/>
},
{
    path:"/TeacherDashboard",
    element :<TeacherDashboard/>
}
,
{
    path:"/studentDashboard",
    element :<StudentDashboard/>
}

])


export default router