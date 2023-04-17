const cfg = require("dotenv");
const express = require("express");
const {startUsersRoutes} = require("./app/routes/users.routes.js");
const app = express();
app.use(express.json());
cfg.config();

startUsersRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
