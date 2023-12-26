const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
const users = [
    {id : 1, name : 'Aminul', email : 'aminul@gmail.com'},
    {id : 2, name : 'Rinku', email : 'rinku@gmail.com'},
    {id : 1, name : 'Razon', email : 'razon@gmail.com'},
    {id : 1, name : 'Mehedi', email : 'mehedi@gmail.com'}
]
app.get("/", (req, res) => {
  res.send("User managament server is running");
});
app.get("/users",(req,res) =>{
    res.send(users);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
