import { MdInfo, MdPhone, MdVideoCameraBack } from "react-icons/md"
import Avatar from "./Avatar"

const Header = () => {
  return (
    <div className="header">
        <div className="left">
            <Avatar />
            <span>John Doe</span>
        </div>
        <div className="right">
            <MdPhone />
            <MdVideoCameraBack />
            <MdInfo />
        </div>
    </div>
  )
}
export default Header