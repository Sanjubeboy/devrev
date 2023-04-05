import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const temp = JSON.parse(localStorage.getItem("user"));
  const user_id = temp.id;
  console.log(user_id);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="friend">Frendify</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <div className="user">
          

              <Link
                to={`/profile/logout`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="logout">Log out</span>
              </Link>
          {/* <span>{currentUser.name}</span> */}
        </div>
        {/* <EmailOutlinedIcon /> */}
        {/* <NotificationsOutlinedIcon /> */}
        <div className="user">
          <img
            src={"/upload/" + currentUser.profilePic}
            alt=""
          />

              <Link
                to={`/profile/${user_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{currentUser.name}</span>
              </Link>
          {/* <span>{currentUser.name}</span> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
