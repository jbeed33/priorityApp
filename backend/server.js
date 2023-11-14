require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Need this to parse incoming strings.
app.use(express.json());

//Middleware
app.use("/user", authRouter);

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
  .then(app.listen(port, () => console.log("listening on port 3000")))
  .catch((err) => console.log(err));
