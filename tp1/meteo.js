var request = require('request');
var restify = require('restify');
var builder = require('botbuilder');

//---------------------------------------------------------
// Configuration
//---------------------------------------------------------

// Connector
var connectorAppId = '3bedb808-ad3f-4c36-8cec-c8437af05ba5';
var connectorAppPassword = 'jeks8okGibymit4r8bvpYaq';


// Open Weather Map
var openWeatherMapAppId = 'd0c4e9ad435b3a5a337d72ccadab70ce';


//---------------------------------------------------------
// Setup
//---------------------------------------------------------

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create connector and bot

var connector = new builder.ChatConnector({
    appId: connectorAppId,
    appPassword: connectorAppPassword
});

var bot = new builder.UniversalBot(connector);

server.post('/api/messages', connector.listen());

// Create the intent recognizer

var dialog = new builder.IntentDialog();
bot.dialog('/', dialog);

//---------------------------------------------------------
// Dialogs
//---------------------------------------------------------

dialog.matches(/^bonjour/i, [
        function (session) {
            builder.Prompts.text(session, 'De quelle ville voulez-vous connaître la météo ?');
        },
        function (session, results) {        
            openweathermap(results.response, function(success, previsions) {
                if (!success) return session.send('Une erreur s\'est produite, veuillez réessayer.');
                
                var message = 'Voici la météo pour :' + results.response + ' :\n\n' +
                              '_ Température : ' + previsions.temperature + '°C\n\n' + 
                              '_ Humidité : ' + previsions.humidity + '%\n\n' +
                              '_ Vent : ' + previsions.wind + 'km/h';
                              
                session.send(message);
            });
        }
]);

dialog.onDefault(function (session) {
    session.send('bonjour !');
});

//---------------------------------------------------------
// Open Weather Map
//---------------------------------------------------------

var openweathermap = function(city, callback){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&lang=fr&units=metric&appid=' + openWeatherMapAppId;
    
    request(url, function(err, response, body){
        try{        
            var result = JSON.parse(body);
            
            if (result.cod != 200) {
                callback(false);
            } else {
                var previsions = {
                    temperature : Math.round(result.main.temp),
                    humidity : result.main.humidity,
                    wind: Math.round(result.wind.speed * 3.6),
                    city : result.name,
                };
                        
                callback(true, previsions);
            }
        } catch(e) {
            callback(false); 
        }
    });
}