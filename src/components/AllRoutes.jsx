import { Routes, Route } from "react-router-dom";
import Courses from "../pages/Courses";
import Learn from "../pages/Learn";
import Fees from "../pages/Fees";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";

export default function AllRoutes() {
  return (
    <Routes>
       <Route path="/courses" element={<Courses />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/:user_id" element={<UserDetails />} />
    </Routes>
  );
}
