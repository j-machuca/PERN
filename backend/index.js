const path = require("path");
const express = require("express");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("app", "admin", "testing", {
  host: "db",
  dialect: "postgres",
});

const app = express();
const port = 80;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database succesfully");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// app.use("static", express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.send("This should be the entry point for the API");
});

app.get("/api/products", (req, res) => {
  res.send("This should be the entry point for the products Endpoint");
});

app.on("listening", () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to the database succesfully");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
