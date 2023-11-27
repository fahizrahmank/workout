require("dotenv").config();

const express = require("express");
const app = express();
const workoutRoutes = require("./routes/workout");
const mongoose = require("mongoose");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);

//connect database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening for request
    app.listen(process.env.PORT, () =>
      console.log("connected to db & listening on port ", process.env.PORT)
    );
  })
  .catch((error) => console.log(error));

// app.get('/',(req,res)=>{
//     res.json({msg:'welcome to app'})
// })
