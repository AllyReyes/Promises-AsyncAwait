// //console.log("Let's Math");

// function getRandomNumber(max) { 
//     return new Promise ((resolve) =>
//     setTimeout (
//         () => 
//     resolve(Math.floor(Math.random() * max)),
//          500));
//     }

//  async function asyncFun() {
// let promise = await getRandomNumber();
//  };

// console.log(asyncFun());


// Write an asynchronous function that accepts 1 parameter
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:

// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test
// (Note: the API will only allow you 2 calls per second, so if you are getting errors and you think you shouldn't be, try calling fetching only ONCE per execution.)

// Then, within your group, please take turns sharing your work. Provide feedback to your teammates on ways to improve what has already been written. 

// Submit a link to a GitHub repo containing your code.

async function f(thisCity) {
    let response = await fetch(`https://geocode.xyz/${thisCity}?json=1`);
    cityLoc = await response.json();
    console.log(`${cityLoc.latt} ${cityLoc.longt}`);
}

f("brazil");
f("Coldwater, Michigan")
