const express = require("express");
const app = express();
const port = 8000;

const chartData = {
    labels: ['','Week 1', '', 'Week 2', '', 'Week 3', '', 'Week 4',''],
    user1: [null,500, null, 340, null, 200, null, 400,null],
    user2: [null,400, null, 420, null, 300, null, 310,null],
};

const data = {
    "labels": ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    "values": [55, 31, 14],
    "colors": ["#98D89E", "#F6DC7D", "#EE8484"]
}
  
app.get("/bar",(req,res)=>{
    return res.json(chartData);
})

app.get("/pie",(req,res)=>{
    return res.json(data);
})

app.listen(port,()=>{`server started at ${port}`})