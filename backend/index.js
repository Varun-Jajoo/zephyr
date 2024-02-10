const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
mongoose.connect("mongodb+srv://varunjajoo18:cdvutJLAbcbX5BGl@cluster0.6q3svxa.mongodb.net/");
app.use(cors({
  origin: 'http://localhost:3000'
}));
//cdvutJLAbcbX5BGl

app.use("/api/auth", require("./routes/auth"));
// app.use("/api/clothes", require("./routes/clothes"));
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
