import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import MainLayout from "../MainLayout";
import Login from "../Component/Login";
import Register from "../Component/Register";
import Home from "../Pages/Home";
import FindTutorByCategory from "../Component/FindTutorByCategory";
import PrivatRoutes from "./PrivatRoutes";
import FindTutor from "../Pages/FindTutor";
import AddTutor from "../Pages/AddTutor";
import TutorDetails from "../Component/TutorDetails";
import MyBook from "../Pages/Mybook";
import ErrorPage from "../Pages/ErrorPage";
import MyTutorials from "../Pages/MyTutorials";
import EditTutorial from "../Component/EditTutorial";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,

      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/find-tutors/:category',
          element:<FindTutorByCategory></FindTutorByCategory>,
      },
       {
        path:'/findtutor',
        element:<FindTutor></FindTutor>,
      },
      {
        path:'/addtutorials',
        element:<PrivatRoutes><AddTutor></AddTutor></PrivatRoutes>,
      },
    
      {
        path:'/tutor/:id',
        element:<PrivatRoutes><TutorDetails></TutorDetails></PrivatRoutes>,
      },
      {
        path:'/booktutor',
        element:<PrivatRoutes><MyBook></MyBook></PrivatRoutes>,
      },
      {
        path:'/Mytutorials',
        element:<PrivatRoutes><MyTutorials></MyTutorials></PrivatRoutes>,
      },
      {
        path:'/edit-tutorial/:id',
        element:<PrivatRoutes><EditTutorial></EditTutorial></PrivatRoutes>,
      },
      ]
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
  },

  ]);

export default router;