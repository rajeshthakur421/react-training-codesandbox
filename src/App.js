import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// using lazy
const Home = lazy(() => import("./pages/Home"));
// const RegisterForm = lazy(() => import("./pages/RegisterForm"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Signupb = lazy(() => import("./pages/Signupb"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/signupb" element={<Signupb />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
