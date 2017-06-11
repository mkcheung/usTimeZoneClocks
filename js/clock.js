date = new Date();

localTime = date.getTime();
localOffset = date.getTimezoneOffset() * 60000;
utc = localTime + localOffset;
mountainTime = utc - (3600000*6);
easternTime = utc - (3600000*4);
centralTime = utc - (3600000*5);
mountainDate = new Date(mountainTime); 
easternDate = new Date(easternTime); 
centralDate = new Date(centralTime); 

console.log(mountainDate);
console.log(easternDate);
console.log(centralDate);
