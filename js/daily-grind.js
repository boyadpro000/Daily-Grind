// alert("It's working!");


/*


pic - image src
alt - the alt tag for the image
desc - a description of the coffee
day - the day of the week for the coffee
color - color associated with coffee
name - the name of the coffee 

*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> 
    ${coffee.day}'s daily coffee special is 
    <strong class="feature">${coffee.name}</strong>,
    ${coffee.desc}
    </p>
    `;

    return myReturn;

}



let myDate = new Date ();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data on queryString, load from queryString

    myDay = urlParams.get("day");
    

}
//converts to integer as its a string from queryString
myDay = parseInt(myDay);

switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            color:"Green",
            name: "Frappaccino", 
            pic: "images/frappaccino.jpg",
            alt: "A picture of a Frappaccino",
            day: "Sunday", 
            desc: `Come end your weekend the right way, with out Frappaccino!`
        };
    break;

    case 1:
        today = "Monday";

        coffee = {
            color:"Orange",
            name: "Caramel Latte", 
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel Latte",
            day: "Monday", 
            desc: `Everyone hate's Mondays, Come grab a Caramel Latte to start off your day!`
        };
    break;


    case 2:
        today = "Tuesday";

        coffee = {
            color:"Yellow",
            name: "Bubble Tea", 
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Tuesday", 
            desc: `Tuesday? Sure feels like a Monday! Come grab a Bubble Tea to start off your day right!`
        };

    break;

    case 3:
        today = "Wednesday";

        coffee = {
            color:"Pink",
            name: "Pumpkin Spice Latte", 
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of Pumpkin Spice Latte",
            day: "Wednesday", 
            desc: `Rain in the forecast? A Pumpkin Spice Latte would make it better!`
        };


    break;

    case 4:
        today = "Thursday";

        coffee = {
            color:"Brown",
            name: "Mocha", 
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            day: "Thursday", 
            desc: `Tomorrow is Friday, end your day witha a delicious Mocha!`
        };


        break;

    case 5:
        today = "Friday";

        coffee = {
            color:"Purple",
            name: "Cold Brew", 
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew",
            day: "Friday", 
            desc: `A nice Cold Brew to start off your Friday!`
        };


    break;


    case 6:
        today = "Saturday";

        coffee = {
            color:"Grey",
            name: "Drip", 
            pic: "images/drip.jpg",
            alt: "A picture of a Drip",
            day: "Saturday", 
            desc: `We know Friday nights can get crazy. That's why our strong drip coffee will get you in the right tracks!`
        };


    break;


    default:
        today = "Something went wrong!";
}

//let coffeeData = coffeeTemplate(coffee);

//alert(coffee.pic);


document.getElementById( "coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
//console.log(coffee);