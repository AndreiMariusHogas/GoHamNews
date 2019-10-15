let express = require('express');
     router = express.Router(),
    request = require('request');

//Business
router.get('/business',function(req, res){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1e7b0099347e49bb92b9876bb8694980";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            let news = JSON.parse(body);
            res.render('business',{news:news});
        }
    })
});
//Health
router.get('/health',function(req, res){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=1e7b0099347e49bb92b9876bb8694980";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            let news = JSON.parse(body);
            res.render('health',{news:news});
        }
    })
});
//Science
router.get('/science',function(req, res){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=1e7b0099347e49bb92b9876bb8694980";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            let news = JSON.parse(body);
            res.render('science',{news:news});
        }
    })
});
//Sports
router.get('/sports',function(req, res){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1e7b0099347e49bb92b9876bb8694980";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            let news = JSON.parse(body);
            res.render('sports',{news:news});
        }
    })
});
//Technology
router.get('/technology',function(req, res){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=1e7b0099347e49bb92b9876bb8694980";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            let news = JSON.parse(body);
            res.render('technology',{news:news});
        }
    })
});

module.exports = router;