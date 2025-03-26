import React, { useState } from "react";

const Registration = () => {
  const [userInfo, setUserInfo] = useState({
    Email: "",
    pass: "",
    cpass: "",
    fname: "",
    lname: "",
    phno: "",
    adrs: "",
    town: "",
    postcode: "",
    country: "United Kingdom",
    userName: "",
  });

  const [success, setSuccess] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
    if ((userInfo.Email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/) &&
      (userInfo.pass === userInfo.cpass &&
      userInfo.userName.length <= 4)
    ) {
      setSuccess(true);
      setUserInfo({
        Email: "",
        pass: "",
        cpass: "",
        fname: "",
        lname: "",
        phno: "",
        adrs: "",
        town: "",
        postcode: "",
        country: "United Kingdom",
        userName: "",
      });
    } else {
      alert("Invalid input. Please check the fields again.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>User Registration</h2>
      {success && <p style={{ color: "green" }}>Registration Successful!</p>}
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="Email">Email : </label>
              </td>
              <td>
                <input
                  type="email"
                  name="Email"
                  value={userInfo.Email}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pass">Password : </label>
              </td>
              <td>
                <input
                  type="password"
                  name="pass"
                  value={userInfo.pass}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="cpass">Retype Password : </label>
              </td>
              <td>
                <input
                  type="password"
                  name="cpass"
                  value={userInfo.cpass}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="userName">User Name (max 4 chars): </label>
              </td>
              <td>
                <input
                  type="text"
                  name="userName"
                  value={userInfo.userName}
                  onChange={handleChange}
                  maxLength="4"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="fname">First Name : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="fname"
                  value={userInfo.fname}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="lname">Last Name : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="lname"
                  value={userInfo.lname}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="phno">Phone Number : </label>
              </td>
              <td>
                <input
                  type="number"
                  name="phno"
                  value={userInfo.phno}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="adrs">Address</label>
              </td>
              <td>
                <textarea
                  name="adrs"
                  id="adrs"
                  value={userInfo.adrs}
                  onChange={handleChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="town">Town : </label>
              </td>
              <td>
                <input
                  type="text"
                  name="town"
                  value={userInfo.town}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="postcode">Postcode / Zip: </label>
              </td>
              <td>
                <input
                  type="text"
                  name="postcode"
                  value={userInfo.postcode}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="country">Country: </label>
              </td>
              <td>
                <select
                  name="country"
                  value={userInfo.country}
                  onChange={handleChange}
                  required
                >
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="India">India</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Registration;
