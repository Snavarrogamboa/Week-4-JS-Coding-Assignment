
//1. Making full name using template literals 

function fullName (firstName, lastName){

   return `${firstName} ${lastName}`
}
console.log(fullName("Sofia","Navarro"))


//2. Arrow funtion using template literals

let createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(createFullName("Tim","Valencia"))


//3. Timout and Interval function

setTimeout (() => {alert("Time is up!"); }, 5000);

let askAreWeThereYet = setInterval(() => {
    alert("Are we there yet?!");
}, 10000);


//4. Callback Fucntions

let anyArray = ["One","Two","Three","Four","Five", "Six"]

function processedSplicedValue(anyArray, index, callbackFunction){
    let newArray = anyArray.splice(index,1);
    callbackFunction(newArray); 
}


processedSplicedValue(anyArray,1,console.log);

processedSplicedValue(anyArray,1, alert);

processedSplicedValue(anyArray,1, (newArray) => alert(newArray));


//Ignore below funtion
//processedSplicedValue(anyArray,1,(newArray) => window.confirm(`This is ${newArray}`));

makingWindow = (newArray) => (window.confirm(`This is ${newArray}`));
processedSplicedValue(anyArray,1,makingWindow);

