import { FC, useEffect, useState } from "react";
import { NavbarComponent } from "../../components/Navbar/Index";
import icon from "../../assets/messageicon.png";
import './Messaging.css'

interface IProps {
  socket: any;
}

export const Messaging: FC<IProps> = ({ socket }) => {
  const [newMessage, setNewMessage] = useState<any[]>([]);

  // Receives the initial "OK" and Timestamp.
  socket.on("connection created", (message: any) => {
    console.log(message);
  });

  // Server echos to client the same string as above that was written to Console
  socket.on("get message", (message: any) => {
    setNewMessage([...newMessage, message]);
  });

  // Client responds with random Text
  const handleSubmit = (event: any) => {
    event.preventDefault();
    socket.emit("new message", {
      newMessage: event.target[0].value,
      socketID: socket.id,
    });
  };

  return (
    <>
      <NavbarComponent />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <span className="glyphicon glyphicon-comment"></span>
                <div className="btn-group pull-right"></div>
              </div>
              <div className="panel-body">
                <ul className="chat">
                  {newMessage.map((message) => (
                    <li className="left clearfix">
                      <span className="chat-img pull-left">
                        <img width={35} src={icon} alt="user_avatar" />
                      </span>
                      <div className="chat-body clearfix">
                        <p>{message.message}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="panel-footer">
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      id="btn-input"
                      type="text"
                      className="form-control input-sm"
                      placeholder="Type your message here..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-warning btn-sm" id="btn-chat">
                        Send
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
