const cfg = require("dotenv");
const express = require("express");
const cors = require('cors');
const {startUsersRoutes} = require("./app/routes/users.routes.js");
const app = express();
app.use(express.json());
app.use(cors());
cfg.config();

startUsersRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
