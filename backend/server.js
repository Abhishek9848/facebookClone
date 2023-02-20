require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const {readdirSync} = require('fs')


app.use(cors())
mongoose.set('strictQuery', true);

readdirSync('./routes').map(r => app.use('/' , require("./routes/"+r)));

const db = process.env.DB_URL
const PORT = process.env.PORT || 8080
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
const connect = async () => {
  try {
    await mongoose.connect(db, config)
  } catch (err) {
    throw err
  }
}
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected", () => {
  console.log("Connnected to database")
})
//Server
app.listen(PORT, () => {
  connect()
  console.log(`server is listening on port ${PORT}`)
})

