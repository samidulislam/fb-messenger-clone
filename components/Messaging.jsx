import {
  MdAddCircle,
  MdEmojiEmotions,
  MdGifBox,
  MdPhotoLibrary,
  MdThumbUpAlt,
} from "react-icons/md";
import Avatar from "./Avatar";
import Header from "./Header";

const Messaging = () => {
  return (
    <div className="messaging">
      <Header />
      <main>
        <Avatar />
        <span className="username">John Doe</span>
        <div className="msg-container">
          <div className="search">
            {" "}
            {/* Change className */}
            <div className="item">
              <MdAddCircle />
            </div>
            <div className="item">
              <MdPhotoLibrary />
            </div>
            <div className="item">
              <MdEmojiEmotions />
            </div>
            <div className="item">
              <MdGifBox />
            </div>
            <form>
              <input type="text" placeholder="Aa" />
            </form>
            <div className="item">
              <MdThumbUpAlt />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Messaging;
