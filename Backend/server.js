const express = require('express');
const path = __dirname + '/app/views/';
const cors = require('cors');

const app = express();

app.use(express.static(path));

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require('./app/models');

db.sequelize.sync();


app.get('/',  (req, res) =>  {
   res.sendFile(path + "index.html");
});

require('./app/routes/project.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
