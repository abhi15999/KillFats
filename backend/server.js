const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORt || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri =
  "mongodb+srv://abhi:abhi123@cluster0.jkrf5.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection done");
});

connection.on("error", (error) => {
  console.error(error);
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
