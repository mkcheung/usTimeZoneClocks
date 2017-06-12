function calculateTimeRelativeToUTC(offset){
	const date = new Date();
	const localTime = date.getTime();
	const localOffset = date.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const time = utc - (3600000*offset);
	return time;
}

function adjustDigitalTimeUnitCosmetics(hours, minutes, seconds){
	const theTime = [hours, minutes, seconds];

	const letZeroAheadTime = theTime.map((unit) => 
		((unit<10)? '0'+unit : unit)
	);

	return letZeroAheadTime[0]+':'+letZeroAheadTime[1]+':'+letZeroAheadTime[2];
}

function adjust24HoursTo12Hours(hours){
	return (hours > 12) ? (hours - 12) : hours;
}


function runPacificClock(){
	let pacificTime = calculateTimeRelativeToUTC(7);
	let pacificDate = new Date(pacificTime);

	let pacificSeconds = pacificDate.getSeconds();
	let pacificMinutes = pacificDate.getMinutes();
	let pacificHours = pacificDate.getHours();

	pacificHours = adjust24HoursTo12Hours(pacificHours);

	let secondsDegrees = (pacificSeconds * 6) + 90;
	let minutesDegrees = (pacificMinutes * 6) + 90;
	let hoursDegrees = (pacificHours * 30) + 90;
	
	document.getElementById('pacific-digital').innerHTML = adjustDigitalTimeUnitCosmetics(pacificHours, pacificMinutes, pacificSeconds);

	let secondHand = document.querySelector(`.hand-second-pacific`);
	let minuteHand = document.querySelector(`.hand-minute-pacific`);
	let hourHand = document.querySelector(`.hand-hour-pacific`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


function runMountainClock(){
	let mountainTime = calculateTimeRelativeToUTC(6);
	let mountainDate = new Date(mountainTime); 

	let mountainSeconds = mountainDate.getSeconds();
	let mountainMinutes = mountainDate.getMinutes();
	let mountainHours = mountainDate.getHours();

	mountainHours = adjust24HoursTo12Hours(mountainHours);
	let secondsDegrees = (mountainSeconds * 6) + 90;
	let minutesDegrees = (mountainMinutes * 6) + 90;
	let hoursDegrees = (mountainHours * 30) + 90;

	document.getElementById('mountain-digital').innerHTML = adjustDigitalTimeUnitCosmetics(mountainHours, mountainMinutes, mountainSeconds);

	let secondHand = document.querySelector(`.hand-second-mountain`);
	let minuteHand = document.querySelector(`.hand-minute-mountain`);
	let hourHand = document.querySelector(`.hand-hour-mountain`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function runCentralClock(){
	let centralTime = calculateTimeRelativeToUTC(5);
	let centralDate = new Date(centralTime);

	let centralSeconds = centralDate.getSeconds();
	let centralMinutes = centralDate.getMinutes();
	let centralHours = centralDate.getHours();

	centralHours = adjust24HoursTo12Hours(centralHours);
	let secondsDegrees = (centralSeconds * 6) + 90;
	let minutesDegrees = (centralMinutes * 6) + 90;
	let hoursDegrees = (centralHours * 30) + 90;

	document.getElementById('central-digital').innerHTML = adjustDigitalTimeUnitCosmetics(centralHours, centralMinutes, centralSeconds);

	let secondHand = document.querySelector(`.hand-second-central`);
	let minuteHand = document.querySelector(`.hand-minute-central`);
	let hourHand = document.querySelector(`.hand-hour-central`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	centralSeconds = (centralSeconds<10)? '0'+centralSeconds : centralSeconds;
	centralMinutes = (centralMinutes<10)? '0'+centralMinutes : centralMinutes;
	centralHours = (centralHours<10)? '0'+centralHours : centralHours;
}

function runEasternClock(){
	let easternTime = calculateTimeRelativeToUTC(4);
	let easternDate = new Date(easternTime);

	let easternSeconds = easternDate.getSeconds();
	let easternMinutes = easternDate.getMinutes();
	let easternHours = easternDate.getHours();
	easternHours = adjust24HoursTo12Hours(easternHours);

	let secondsDegrees = (easternSeconds * 6) + 90;
	let minutesDegrees = (easternMinutes * 6) + 90;
	let hoursDegrees = (easternHours * 30) + 90;

	document.getElementById('eastern-digital').innerHTML = adjustDigitalTimeUnitCosmetics(easternHours, easternMinutes, easternSeconds);

	let secondHand = document.querySelector(`.hand-second-eastern`);
	let minuteHand = document.querySelector(`.hand-minute-eastern`);
	let hourHand = document.querySelector(`.hand-hour-eastern`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	easternSeconds = (easternSeconds<10)? '0'+easternSeconds : easternSeconds;
	easternMinutes = (easternMinutes<10)? '0'+easternMinutes : easternMinutes;
	easternHours = (easternHours<10)? '0'+easternHours : easternHours;
}

function animateClocks(){
	runPacificClock();
	runMountainClock();
	runCentralClock();
	runEasternClock();
}

setInterval(animateClocks, 1000);

