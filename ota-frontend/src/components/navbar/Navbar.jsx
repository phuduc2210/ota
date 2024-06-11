// import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../axiosConfig";
// import { AuthContext } from "../context/authContext";

const Navbar = () => {
  //   const { currentUser, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const res = await axiosInstance.get("/users/all");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUser();
  }, []);
  console.log("users", users);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLJklFaRZjXBpTuBtfpYqVei8F5UYvBZV2A&s"
              alt=""
            />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Update OTA Firmware</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>Manage Device</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>Products</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>Import OTA Package</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>More Information</h6>
          </Link>
          {/* <span>{currentUser?.username}</span> */}
          {/* {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
          <Link className="link" to="/login">
            Login
          </Link>
          <span className="write">
            <Link className="link" to="/register">
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
