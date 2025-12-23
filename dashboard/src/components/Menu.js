import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Menu = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isProfleDropdownOpen, setIsProfleDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verify = async () => {
      if (!cookies.token) {
        navigate("https://zerodhaclone-1-nwt7.onrender.com/singup");
      }
      const { data } = await axios.post(
        "https://zerodhaclone-qij1.onrender.com",
        {},
        {
          withCredentials: true,
        }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, { position: "top-right" })
        : (removeCookie("token"),
          navigate("https://zerodhaclone-1-nwt7.onrender.com/singup"));
    };

    verify();
  }, [cookies]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("https://zerodhaclone-1-nwt7.onrender.com/singup");
  };

  const handleMenuClick = (idx) => {
    setSelectedMenu(idx);
  };

  const handleProfileClick = () => {
    setIsProfleDropdownOpen(!isProfleDropdownOpen);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" alt="homeimage" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={selectedMenu === 0 ? "activeMenuClass" : "munuClass"}
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p
                className={selectedMenu === 1 ? "activeMenuClass" : "munuClass"}
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p
                className={selectedMenu === 2 ? "activeMenuClass" : "munuClass"}
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p
                className={selectedMenu === 3 ? "activeMenuClass" : "munuClass"}
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p
                className={selectedMenu === 4 ? "activeMenuClass" : "munuClass"}
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p
                className={selectedMenu === 5 ? "activeMenuClass" : "munuClass"}
              >
                Apps
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={handleLogout}
            >
              <p
                className={selectedMenu === 5 ? "activeMenuClass" : "munuClass"}
              >
                Logout
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">{username}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Menu;
