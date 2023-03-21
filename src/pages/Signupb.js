import React, { useEffect, useState } from "react";
function Signupb() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");

  function saveData() {
    let data = { Name, Email, Mobile, Password };
    // console.warn(data);
    fetch("https://2q4urh-3000.preview.csb.app/users/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  }
  return (
    <div className="container">
      <h1>POST API Example </h1>
      <input
        type="text"
        name="Name"
        value={Name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Name"
      />{" "}
      <br /> <br />
      <input
        type="text"
        name="Email"
        value={Email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />{" "}
      <br /> <br />
      <input
        type="text"
        name="Mobile"
        value={Mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        placeholder="Mobile"
      />{" "}
      <br /> <br />
      <input
        type="text"
        name="Password"
        value={Password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />{" "}
      <br /> <br />
      <button type="button" onClick={saveData}>
        Save New User
      </button>
    </div>
  );
}
export default Signupb;
