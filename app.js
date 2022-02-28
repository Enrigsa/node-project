// MODULES
const express = require("express");
const path = require("path");
const ejs = require("ejs");

// DOTENV MODULE TO IMPORT ENV VARIABLES
require("dotenv").config({ path: __dirname + "/.gitignore/.env" });

// SETTING PORT FROM ENVIRONMENT VARIABLE. DEFAULT: 3000 
const port = process.env.PORT || 3000;

// SETTING UP EXPRESS
const app = express();

// EJS CONFIG FOR TEMPLATES
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// INDICATING WHERE TO FIND STATIC FILES THROUGH MIDDLEWARE
app.use(express.static(path.resolve(__dirname, "src")));

// BOOTSTRAP THROUGH MIDDLEWARE
app.use("/css", express.static("node_modules/bootstrap/dist/css"));
app.use("/js", express.static("node_modules/bootstrap/dist/js"));

// SERVING PAGES
app.get("/", (req, res) => {
  // Showing different modes of production
  if (process.env.NODE_ENV === "production") {
    res.render("index1", {modo: "Produccion"});
  } else if (process.env.NODE_ENV === "development"){
    res.render("index1", {modo: "Desarrollo"});
  } else {
    res.render("index1", {modo: "Sin especificar"});
  }
});

app.get("/nosotros", (req, res) => {
  res.render("aboutUs", {});
});

app.get("/servicios", (req, res) => {
  res.render("services", {});
});

app.get("/contacto", (req, res) => {
  res.render("contact", {});
});

app.get("/enrique", (req, res) => {
  res.render("enrique", {});
});

// SERVING PAGES TROUGH REQUEST PARAMS
app.get("/framework", (req, res) => {
  // Fetching framework name: 3 options: react, vue, angular
  const framework = req.query.name;
  res.render(`${framework}`, {});
});

// SERVING 404 ERROR PAGE
app.get("/not-found", (req, res) =>{
  res.status(404).render("404", {});
})

// REDIRECTION TO AVOID DIFFERENT DIRECTORY LEVELS
app.use((req,res,next)=>{
  res.redirect('/not-found')
})

// SETTING UP SERVER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
