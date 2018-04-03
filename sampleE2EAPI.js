var Bluecat = require('bluecat');
var Api = Bluecat.Api('api');
var Service = new Bluecat.ServiceSync(Api, 'google.com');
describe("TestModule"function(){

it("TestCaseName get",function(){
Service.run(function(){
  //Delete cookies
  			Service.resetCookie();
        var url = "api url";
	       method = 'GET';
         //Service.jar['setCookie']('SSLB=0',url,method);
         //return Service.jar['getCookies'](url);
         Service.jar['setCookie']('SSLB=0',url,method);
         var r = Service.rawRequest({
           method: method,
           json: false,
           uri: url,
           headers : {
             'HeaderKey1':'value1',
             'HeaderKey2':'value2'
           }
         });
         console.log(r.data.body);
         console.log(r.data.rawHeaders);

    });


    it("TestCaseName Post",function(){
    Service.run(function(){
      //Delete cookies
      			Service.resetCookie();
            var url = "api url";
    	       method = 'POST';
             //Service.jar['setCookie']('SSLB=0',url,method);
             //return Service.jar['getCookies'](url);
             Service.jar['setCookie']('SSLB=0',url,method);
             var r = Service.rawRequest({
               method: method,
               json: false,
               uri: url,
               headers : {
                 'HeaderKey1':'value1',
                 'HeaderKey2':'value2'
               },
               body:{

               }
             });
             console.log(r.data.body);
             console.log(r.data.rawHeaders);

        });

  });







});
