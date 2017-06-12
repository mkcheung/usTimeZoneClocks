function calculateUTCTime(){
	const date = new Date();
	const localTime = date.getTime();
	const localOffset = date.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	return utc;
}


function runPacificClock(){
	const utc = calculateUTCTime();
	const pacificTime = utc - (3600000*7);
	const pacificDate = new Date(pacificTime);

	let pacificSeconds = pacificDate.getSeconds();
	let pacificMinutes = pacificDate.getMinutes();
	let pacificHours = pacificDate.getHours();

	pacificHours = (pacificHours > 12) ? (pacificHours - 12) : pacificHours;
	let secondsDegrees = (pacificSeconds * 6) + 90;
	let minutesDegrees = (pacificMinutes * 6) + 90;
	let hoursDegrees = (pacificHours * 30) + 90;

	
	pacificSeconds = (pacificSeconds<10)? '0'+pacificSeconds : pacificSeconds;
	pacificMinutes = (pacificMinutes<10)? '0'+pacificMinutes : pacificMinutes;
	pacificHours = (pacificHours<10)? '0'+pacificHours : pacificHours;
	document.getElementById('pacific-digital').innerHTML = pacificHours+':'+pacificMinutes+':'+pacificSeconds;

	let secondHand = document.querySelector(`.hand-second-pacific`);
	let minuteHand = document.querySelector(`.hand-minute-pacific`);
	let hourHand = document.querySelector(`.hand-hour-pacific`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log('Pacific Time: ' + utc + ' ' + pacificDate);
}


function runMountainClock(){
	const utc = calculateUTCTime();
	const mountainTime = utc - (3600000*6);
	const mountainDate = new Date(mountainTime); 

	let mountainSeconds = mountainDate.getSeconds();
	let mountainMinutes = mountainDate.getMinutes();
	let mountainHours = mountainDate.getHours();

	mountainHours = (mountainHours > 12) ? (mountainHours - 12) : mountainHours;
	let secondsDegrees = (mountainSeconds * 6) + 90;
	let minutesDegrees = (mountainMinutes * 6) + 90;
	let hoursDegrees = (mountainHours * 30) + 90;

	mountainSeconds = (mountainSeconds<10)? '0'+mountainSeconds : mountainSeconds;
	mountainMinutes = (mountainMinutes<10)? '0'+mountainMinutes : mountainMinutes;
	mountainHours = (mountainHours<10)? '0'+mountainHours : mountainHours;

	document.getElementById('mountain-digital').innerHTML = mountainHours+':'+mountainMinutes+':'+mountainSeconds;

	let secondHand = document.querySelector(`.hand-second-mountain`);
	let minuteHand = document.querySelector(`.hand-minute-mountain`);
	let hourHand = document.querySelector(`.hand-hour-mountain`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log('Mountain Time: ' + mountainDate);
}

function runCentralClock(){
	const utc = calculateUTCTime();
	const centralTime = utc - (3600000*5);
	const centralDate = new Date(centralTime);

	let seconds = centralDate.getSeconds();
	let minutes = centralDate.getMinutes();
	let hours = centralDate.getHours();

	hours = (hours > 12) ? (hours - 12) : hours;
	let secondsDegrees = (seconds * 6) + 90;
	let minutesDegrees = (minutes * 6) + 90;
	let hoursDegrees = (hours * 30) + 90;

	document.getElementById('central-digital').innerHTML = hours+':'+minutes+':'+seconds;

	let secondHand = document.querySelector(`.hand-second-central`);
	let minuteHand = document.querySelector(`.hand-minute-central`);
	let hourHand = document.querySelector(`.hand-hour-central`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	seconds = (seconds<10)? '0'+seconds : seconds;
	minutes = (minutes<10)? '0'+minutes : minutes;
	hours = (hours<10)? '0'+hours : hours;
	document.getElementById('central-digital').innerHTML = hours+':'+minutes+':'+seconds;

	console.log('Central Time: ' + centralDate);
}

function runEasternClock(){
	const utc = calculateUTCTime();
	const easternTime = utc - (3600000*4);
	const easternDate = new Date(easternTime);

	let seconds = easternDate.getSeconds();
	let minutes = easternDate.getMinutes();
	let hours = easternDate.getHours();
	hours = (hours > 12) ? (hours - 12) : hours;

	let secondsDegrees = (seconds * 6) + 90;
	let minutesDegrees = (minutes * 6) + 90;
	let hoursDegrees = (hours * 30) + 90;

	let secondHand = document.querySelector(`.hand-second-eastern`);
	let minuteHand = document.querySelector(`.hand-minute-eastern`);
	let hourHand = document.querySelector(`.hand-hour-eastern`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	seconds = (seconds<10)? '0'+seconds : seconds;
	minutes = (minutes<10)? '0'+minutes : minutes;
	hours = (hours<10)? '0'+hours : hours;
	document.getElementById('eastern-digital').innerHTML = hours+':'+minutes+':'+seconds;
	console.log('Eastern Time: ' + easternDate);
}

function animateClocks(){
	runPacificClock();
	runMountainClock();
	runCentralClock();
	runEasternClock();
}

setInterval(animateClocks, 1000);

