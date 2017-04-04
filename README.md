# rpi-temperature-slack
Logs raspberry pi temperature sensor data (from GPIO sensor DS18B20) to a slack channel

Requires you to setup 1-wire temperature sensor on a GIO pin (https://github.com/nickolanack/node-rpio-temperature)

```
git clone https://github.com/nickolanack/rpi-temperature-slack.git
cd rpi-temperature-slack
npm install

# add your Incoming Webhook Url from slack Apps and Integrations
# vi slack.json 

node index.js

```
