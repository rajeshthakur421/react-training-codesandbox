import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Signup Pages</h1>
      <Link to="/signup">Signup using formik</Link>

      <h1>Login Pages</h1>
    </>
  );
};
export default Home;
