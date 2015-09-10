var fs = require('fs');
var args = process.argv.slice(2, process.argv.length);



/* 
if any moods are true, mood != happy.
if mood is false, action is not allowed.
*/

var sleepInterval;
var sleepyIncrease;
var zCounter = 1;
var tiredMeter = 0;


var printOut = function(reaction){
	console.log('\n~~~~ %s  ~~~~\n', reaction);
};

var create = function(petName){
	fs.open('./' + petName, 'a', function opened(err, fd){
		if (err){
			console.log('failed to find your pet.');
			return;
		} else {
			var pet = '{"name":"' + petName + '", "mood" : "happy", "isHungry" : true, "isBored" : true, "isTired" : false}';
			var buffer = new Buffer(pet),
				bufferPosition = 0,
				bufferLength = buffer.length,
				filePosition = null;
			fs.write(fd, buffer, bufferPosition, bufferLength, filePosition,
				function wrote(err, written){
					if (err)
						console.log("oh no! We couldn't create your pet");
						return;
				});
			}
		});
};

var moodCheck = function(petName){
	if (!petName){
		console.log("What's your pets name?");
	} else {
		fs.readFile(petName, 'utf8', function opened(err, data){
			if (err) {
				console.log("Hm, your pet seems to have run away");
			} else {
				var pet = JSON.parse(data);

				//determine mood
				if (pet.isHungry === true || pet.isBored === true || pet.isTired === true)
					pet.mood = 'not happy';
				else
					pet.mood = 'happy';

				//display mood
				if (pet.mood !== 'happy')
					printOut("😿");
				else
					printOut("😺");
			}
		});//end readFile
	}
};//end status

var sleep = function(petName){
	fs.readFile(petName, 'utf8', function(err, data){
		if (!err){
			var pet = JSON.parse(data);
			tiredMeter = 0;
			
			printOut('⭐️ 🌛 ⭐️');
			printOut('😴');
			console.log("*yawn*");
			sleepInterval = setInterval(function(){
				if (zCounter % 2 === 0){
					console.log("  ZZZzzzzzZZ");
					zCounter++;
				} else {
					console.log("zzzzZZZZ");
					zCounter++;
				}
			}, 1000); //end sleepInterval

			var that = pet;
			setTimeout(function(){
				//stop sleeping
				clearInterval(sleepInterval);

				//update pets tired status
				pet.isTired = false;
				fs.writeFile(petName, JSON.stringify(pet), function(err){
					if (err)
						console.log('Oh no, your pet had some terrible nightmares...');
				});//end writeFile

				//'waking up'
				console.log("Good morning!");
				printOut('⛅️');
				printOut('😸');

			}, 10000); //end setTimeout
		}//end if (!err)
	});//end fs.readFile
};//end sleep();







if(process.argv[2] === 'create'){
	create(process.argv[3]);
}

if(args.join(' ') === "how are you " + args[args.length-1]){
	moodCheck(args[args.length-1]);
}

if(args.join(' ') === "go to sleep " + args[args.length-1]){
	sleep(args[args.length-1]);
}