var fs = require('fs');
var Cylon = require('cylon');
console.log('starting the drone');
var droneName = fs.readFileSync('drone_name.txt');
console.log('Hello, my name is '+droneName);

Cylon.robot({
	connections: {
		ardrone: { adaptor: 'ardrone', port: '192.168.1.1' }
	},

	devices: {
		drone: { driver: 'ardrone' }
	},

	work: function(my) {
		my.drone.takeoff();
		after((10).seconds(), function() {
			my.drone.land();
		});
		after((15).seconds(), function() {
			my.drone.stop();
		});
	}
}).start();