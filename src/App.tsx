import { Routes, Route } from "react-router-dom";
import { Messaging } from "../src/pages/Messaging/Index";
import io from "socket.io-client";

// socket connection with nodejs backend
const socket = io("http://localhost:3123");

console.log("socket= ", socket);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Messaging socket={socket} />}></Route>
    </Routes>
  );
};

export default App;
