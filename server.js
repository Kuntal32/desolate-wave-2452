var express = require("express");
var app=express();
app.use('/app',express.static(__dirname+'/app'));
app.use('/rsrc/unity/lib/sdk_6.2/CanvasFacebook.dll',express.static(__dirname+'/rsrc/unity/lib/sdk_6.2/CanvasFacebook.dll'));
app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html');

});
app.post('/*', function(request, response) {
  response.redirect('/');
});

app.listen(process.env.PORT || 5000,function(){
	console.log("running");
});