const cfg = require("dotenv");
const express = require("express");
const cors = require('cors');
const {startUsersRoutes} = require("./app/routes/users.routes.js");
const {startQuestionsRoutes} = require("./app/routes/questions.routes.js");
const {startAnswersRoutes} = require('./app/routes/answers.routes.js');
const app = express();
app.use(express.json());
app.use(cors());
cfg.config();

startUsersRoutes(app);
startQuestionsRoutes(app);
startAnswersRoutes(app);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
