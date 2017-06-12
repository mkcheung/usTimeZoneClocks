
function runMountainClock(){
	const date = new Date();
	const localTime = date.getTime();
	const localOffset = date.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const mountainTime = utc - (3600000*6);
	const mountainDate = new Date(mountainTime); 

	let mountainSeconds = mountainDate.getSeconds();
	let mountainMinutes = mountainDate.getMinutes();
	let mountainHours = mountainDate.getHours();

	mountainHours = (mountainHours > 12) ? (mountainHours - 12) : mountainHours;
	let secondsDegrees = (mountainSeconds * 6) + 90;
	let minutesDegrees = (mountainMinutes * 6) + 90;
	let hoursDegrees = (mountainHours * 30) + 90;

	let secondHand = document.querySelector(`.hand-second-mountain`);
	let minuteHand = document.querySelector(`.hand-minute-mountain`);
	let hourHand = document.querySelector(`.hand-hour-mountain`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log('Mountain Time: ' + mountainDate);
}

function runCentralClock(){
	const date = new Date();
	const localTime = date.getTime();
	const localOffset = date.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const centralTime = utc - (3600000*5);
	const centralDate = new Date(centralTime);

	let seconds = centralDate.getSeconds();
	let minutes = centralDate.getMinutes();
	let hours = centralDate.getHours();

	hours = (hours > 12) ? (hours - 12) : hours;
	let secondsDegrees = (seconds * 6) + 90;
	let minutesDegrees = (minutes * 6) + 90;
	let hoursDegrees = (hours * 30) + 90;

	let secondHand = document.querySelector(`.hand-second-central`);
	let minuteHand = document.querySelector(`.hand-minute-central`);
	let hourHand = document.querySelector(`.hand-hour-central`);

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	console.log('Central Time: ' + centralDate);
}

function animateClocks(){
	runMountainClock();
	runCentralClock();
}

setInterval(animateClocks, 1000);

// date = new Date();

// localTime = date.getTime();
// localOffset = date.getTimezoneOffset() * 60000;
// utc = localTime + localOffset;
// mountainTime = utc - (3600000*6);
// easternTime = utc - (3600000*4);
// centralTime = utc - (3600000*5);
// mountainDate = new Date(mountainTime); 
// easternDate = new Date(easternTime); 
// centralDate = new Date(centralTime); 

// console.log(mountainDate);
// console.log(easternDate);
// console.log(centralDate);
