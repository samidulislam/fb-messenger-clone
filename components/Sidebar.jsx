import { MdMoreHoriz } from "react-icons/md";
import Link from "next/link";
import Chat from "./Chat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link href={"/"}>
          <img className="logo" src="./messenger-logo.svg" alt="" />
        </Link>
        <div className="right">
          <MdMoreHoriz className="more" />
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="Search Messenger" />
      </div>
      <div className="chats">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
};
export default Sidebar;
