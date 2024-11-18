const express = require("express")
server.use(express.static("front"))
const server = express();

const port = 3000

server.get('/', (req, res)=> {
  
  });
  


server.listen(port, (req, res)=>{
  console.log("Server started @ 3000")
})