const express = require("express");
const cors = require("cors");

const router = require("./routers/bookRoutes");

const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.json());

app.use("/book", router);
app.listen(8080)
