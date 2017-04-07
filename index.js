var Slack = require('slack-node');



slack = new Slack();
slack.setWebhook(require('./slack.json').url);

var temps={}
var counter=0;

var Temperature = require('node-rpio-temperature');
(new Temperature()).on('update', function(temp) {

	temps[temp.device]=temp;

	if(counter%10==0){
		slack.webhook({
			text: + 'Devices: '+ Object.keys(temps).map(function(name){
				return name.substring(name.length-6);
			}).join(', ');
		}, function(err, response) {

			if (err) {
				console.error(err);
			}

		});
		counter++;
	}

	

	slack.webhook({
		text: Object.keys(temps).map(function(name){
			return temps[name].value;
		}).join(', ')+ temp.units
	}, function(err, response) {

		if (err) {
			console.error(err);
		}

	});


});