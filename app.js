let express = require('express'),
        app = express(),
    request = require('request'),
       port = process.env.PORT || 3000;
      
//Settings
app.set("view engine","ejs");
app.use(express.static(__dirname+ "/public"));

//Routes
let landingRoute = require('./routes/landing');
let optionsRoute = require('./routes/options')


app.use(landingRoute);
app.use(optionsRoute);



app.listen(process.env.PORT || 3000, function(){
    console.log("NewsApp Started")
});