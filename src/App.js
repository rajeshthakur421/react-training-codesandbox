import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// using lazy
const Home = lazy(() => import("./pages/Home"));
// const RegisterForm = lazy(() => import("./pages/RegisterForm"));
const Signup = lazy(() => import("./pages/Signup"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
