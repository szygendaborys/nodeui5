var path = require('path');
var express = require('express');
var app = express();

app.use('/app', express.static(path.join(__dirname, 'app', 'webapp')));

app.get('/getDummyText', function(req,res) {
   const dataToReturn = [];

   const dummyData = {
      title: "Testowy tytuł",
      message: "Testowa wiadomość"
   };

   dataToReturn.push(dummyData);

   return res.status(200).json({results: dataToReturn});
})

app.listen(3000);

console.info("Serwer uruchomiony.")