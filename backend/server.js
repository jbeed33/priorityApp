require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const taskRouter = require("./routes/taskRouter");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3010;

//need this to override CORS POLICY
app.use(cors());
// Need this to parse incoming strings.
app.use(express.json());

app.use(cookieParser());

//Middleware
app.use("/api/user", authRouter);

app.use("/api/task", taskRouter);

const uri = process.env.MONGO_URI;

async function connectToDB() {
  try {
    await mongoose.connect(uri);
    //console.log("connected to DB...");
  } catch (e) {
    console.error(e);
  }
}

app.get("/", (req, res) => {
  res.send({ msg: "hello world" });
});

//Intializing server only if we are able to connect to the database
connectToDB()
  .then(console.log("connected to DB..."))
  .then(app.listen(port, () => console.log(`listening on port ${port}...`)))
  .catch((err) => console.log(err));
