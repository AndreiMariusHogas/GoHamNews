let express = require('express');
     router = express.Router(),
    request = require('request');

router.get('/',function(req,res){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=1e7b0099347e49bb92b9876bb8694980";
    request(url,function(error, response, body){
        if(!error && response.statusCode == 200){
            let news = JSON.parse(body);
            res.render('landing',{news:news});
        }
    })
})


module.exports = router;