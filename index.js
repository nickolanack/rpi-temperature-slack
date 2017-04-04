var Slack = require('slack-node');



slack = new Slack();
slack.setWebhook(require('./slack.json').url);



var Temperature = require('node-rpio-temperature');
(new Temperature()).on('update', function(temp) {
	slack.webhook({

		text: temp.value + ' ' + temp.units
	}, function(err, response) {

		if (err) {
			console.error(err);
		}

	});


});