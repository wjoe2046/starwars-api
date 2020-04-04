const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./routes/api.js");

//SECTION COMMENT OUT
app.use("/assets", express.static(path.join(__dirname, "../client/assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

/**
 * handle parsing request body
 */

/**
 * handle requests for static files
 */

/**
 * define route handlers
 */

app.use("/api", router);

// route handler to respond with main app

// catch-all route handler for any requests to an unknown route

app.use((req, res, next) => {
  return res.status(404).send("Page Not Found!");
});

/**
 * configire express global error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
// eslint-disable-next-line no-unused-vars

app.use((err, req, res, next) => {
  let defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  let errorObj = Object.assign(defaultErr, err);
});
/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
