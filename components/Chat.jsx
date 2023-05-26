import Avatar from "./Avatar"

const Chat = () => {
  return (
    <div className="chat">
        <Avatar />
        <div className="info">
            <span className="username">John Doe</span>
            <p>Hi there!</p>
        </div>
    </div>
  )
}
export default Chat