import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul>
        <li style={{ color: "red" }}>Signup Pages</li>

        <li>
          <Link to="/signup">Signup using formik</Link>
        </li>
        <li>
          <Link to="/signupb">Signup from anil sidhu</Link>
        </li>
      </ul>

      <ul>
        <li style={{ color: "red" }}>Login Pages</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
