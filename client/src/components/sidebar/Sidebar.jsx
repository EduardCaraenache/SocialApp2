import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link
              to="/messenger"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link
              to="/videos"
              style={{ textDecoration: "none", color: "black" }}
            >
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link
              to="/groups"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link
              to="/saved"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Saved</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/faq" style={{ textDecoration: "none", color: "black" }}>
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">FAQ</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/jobs" style={{ textDecoration: "none", color: "black" }}>
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link
              to="/events"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link
              to="/courses"
              style={{ textDecoration: "none", color: "black" }}
            >
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </Link>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
