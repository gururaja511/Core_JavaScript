
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;


var Bluecat = require('bluecat');
var Api = Bluecat.Api('api');
var Service = new Bluecat.ServiceSync(Api, 'google.com');




var request = require('request');
var zlib = require('zlib');



app.listen(port, function() {
    console.log("Listening on " + port);
    //makeRequest();
    makeBlueCatReq();
});


function makeBlueCatReq()
{
  var url = 'https://www-qa4.asda.com/api/v1/logininfo';
  var headers = {'Accept-Encoding': 'gzip'};


  Service.run(function(){
    //Delete cookies
    			//Service.resetCookie();
          //var url = "api url";
  	       method = 'GET';
           //Service.jar['setCookie']('SSLB=0',url,method);
           //return Service.jar['getCookies'](url);
           //Service.jar['setCookie']('SSLB=0',url,method);
           var r = Service.rawRequest({
             method: method,
             json: true,
             uri: url,
             headers : headers
           });
          // gunzipJSON(r);
           debugger;


           zlib.gunzip(data.Body,function(error, buff){
                     if(error != null){
                        console.log(error)
                     }
                     else{
                      console.log(buff.toString('utf8'))
                     }
                     context.done(null, null);
                   });




           console.log(r.data.body);
           console.log(r.data.rawHeaders);

      });



}// Bluecat

function makeRequest(){

    var url = 'https://www-qa4.asda.com/api/v1/logininfo';
    var headers = {'Accept-Encoding': 'gzip'};

    var response = request(url, headers);

    gunzipJSON(response);
}

function gunzipJSON(response){

    var gunzip = zlib.createGunzip();
    var json = "";

    gunzip.on('data', function(data){
        json += data.toString();
    });

    gunzip.on('end', function(){
        parseJSON(json);
    });

    response.pipe(gunzip);
}

function parseJSON(json){

    var json = JSON.parse(json);
debugger;
    if(json.items.length){

        for(var i in json.items){

            console.log(json.items[i].title + '\n' + json.items[i].link);

        }

    }
}
