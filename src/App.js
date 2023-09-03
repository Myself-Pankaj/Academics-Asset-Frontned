import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//imports My files
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";

//import redux
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";

//import sass
import "./sass/app.scss";
import "./sass/header.scss";
import "./sass/home.scss";
import "./sass/founder.scss";
import "./sass/menu.scss";
import "./sass/services.scss";
import "./sass/footer.scss";
import "./sass/login.scss";
import "./sass/profile.scss";
import "./sass/notesdetail.scss";
import "./sass/shipping.scss";
import "./sass/confirmOrder.scss";
import "./sass/paymentsuccess.scss";
import "./sass/queAns.scss";
import "./sass/contact.scss";
import "./sass/about.scss";
import "./sass/addcourse.scss";
import "./sass/course.scss";
import "./sass/admin.scss";
import "./sass/dashboard.scss";
import "./sass/hiring.scss";
import "./sass/orderDetails.scss";

import Footer from "./components/Layout/Footer";
import { loadUser } from "./redux/actions/userAction";
import { useEffect } from "react";
import Login from "./components/Auth/Login";
import Profile from "./components/Auth/Profile";
import Notes from "./components/Notes/Notes";
import Cart from "./components/Cart/Cart";
import NotesDetail from "./components/Notes/NotesDetail";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Course from "./components/Courses/Course";
import AddCourse from "./components/Courses/AddCourse.jsx";
import PaymentSuccess from "./components/Cart/PaymentSuccess";
import Quaora from "./components/Qura/Quaora";
import AskQue from "./components/Qura/AskQue";
import QuoraDetails from "./components/Qura/QuoraDetails";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import CourseDetails from "./components/Courses/CourseDetails";
import Dashboard from "./components/Admin/Dashboard";
import Users from "./components/Admin/Users";
import Orders from "./components/Admin/Orders";
import AddNotes from "./components/Admin/Notes/AddNotes";
import Hiring from "./components/Hiring/Hiring";
import HiringUpdate from "./components/Admin/Hiring/HiringUpdate";
import HiringDetails from "./components/Hiring/HiringDetails";
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails";
import { CLEAR_ERRORS, CLEAR_MESSAGE } from "./redux/Constants/userConstants";

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: CLEAR_ERRORS,
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: CLEAR_MESSAGE,
      });
    }
  }, [dispatch, error, message]);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getproductdetail" element={<Notes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/qora" element={<Quaora />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/getproductdetail/:id" element={<NotesDetail />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/askQuestion" element={<AskQue />} />
          <Route path="/QueAns/:id" element={<QuoraDetails />} />
          <Route path="/course/:id" element={<CourseDetails />} />

          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/hiringUpdate" element={<HiringUpdate />} />
          <Route path="/hiringUpdate/:id" element={<HiringDetails />} />
        </Route>

        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="/me"
            />
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/addnotes" element={<AddNotes />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
