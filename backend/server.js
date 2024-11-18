const express = require("express")

const server = express();

const port = 3000



server.listen(port, (req, res)=>{
  console.log("Server started @ 3000")
})