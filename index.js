const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
const users = [
    {id : 1, name : 'Aminul', email : 'aminul@gmail.com'},
    {id : 2, name : 'Rinku', email : 'rinku@gmail.com'},
    {id : 3, name : 'Razon', email : 'razon@gmail.com'},
    {id : 4, name : 'Mehedi', email : 'mehedi@gmail.com'}
]
app.get("/", (req, res) => {
  res.send("User managament server is running");
});
app.get("/users",(req,res) =>{
    res.send(users);
})
app.post("/users",(req,res) =>{
  console.log('post api hitting');
  console.log(req.body);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
