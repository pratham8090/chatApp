const express = require("express");
const { METHODS } = require("http");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    // methods: ["GET", "POST"],
    // allowHeaders: ["my-custom-header"],
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("what is socket: ", socket);
  console.log("socket is active to be connected");

  socket.on("chat", (payload) => {
    console.log("what is payload: ", payload);
    io.emit("chat", payload);
  });
});

server.listen(5000, () => {
  console.log("server is listning on port 5000...");
});
