var Slack = require('slack-node');



slack = new Slack();
slack.setWebhook(require('./slack.json').url;



var Temperature = require('../');
(new Temperature()).on('update', function(temp) {
	slack.webhook({

		text: temp.value + ' ' + temp.units
	}, function(err, response) {

		if (err) {
			console.error(err);
		}

	});


});