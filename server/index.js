const db = require("./models");
const app = require('./app');
require('dotenv').config();


const port = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
