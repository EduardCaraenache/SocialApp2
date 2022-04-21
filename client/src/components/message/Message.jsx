import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="conversationImg"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          alt=""
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          facilis ex ea illo quos at nostrum, iste asperiores dolorum debitis
          doloribus. Ex et distinctio delectus suscipit consequuntur iure.
          Adipisci, veritatis.
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
