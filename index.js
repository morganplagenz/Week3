//week 3 coding assigment

//question 1

var ages = [3,9,23,64,2,8,28,93];
console.log(ages);

//question 1a

var sos = ages[ages.length -1] - ages[0]; //statements like this will ALWAYS subtract the last element from the first

console.log(sos);

//question 1b

ages.push(754);

var hep = ages[ages.length -1] - ages[0]; //repreating 1a to make sure statement is dynamic

console.log(hep); //we are dynamic

//question 1c

var ageTotal = 0

function average(ages){
    for (i=0; i<ages.length; i++){
        ageTotal +=ages[i];
    }
    return ageTotal/ages.length;
}

console.log(average(ages));

//question 2

var happyNames = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//question 2a
var total = 0;

for(var i=0;i<happyNames.length;i++){ 
    total+=happyNames[i].length;
}

var imTryingMyBest = total/happyNames.length; //taking the total of characters from previous loop & dividing it by the total number of elements

console.log(imTryingMyBest);

//question 2b

for(var i=0;i<happyNames.length;i++){
    console.log(happyNames.join(" "));
}

//question 3
//you access the last element by using "array.length -1"...see example
movies = ["Sandlot", "Annabelle", "Tower Heist"];
var question3 = movies[movies.length - 1];
console.log("The last element is " + question3); // results in "Tower Heist"

//question 4
//you access the first element by using "array[0]", since "0" means the first element...see example
books = ["IT", "Carrie", "Misery"];
var question4 = books[0];
console.log(question4 + " was the first element. I hope the book is better than the movie remakes.");

//question 5

var nameLengths =[];

for (var i=0; i <happyNames.length; i++){
    nameLengths.push(happyNames[i].length);
}

console.log(nameLengths);

//question 6

var totalNameLengths = 0;

for (var i=0; i < nameLengths.length; i++){
    totalNameLengths += nameLengths[i];
}

console.log(totalNameLengths);

//question 7

function repeat(word,times){
    if (times > 0)
        return word.repeat(times);
    else
        return "";
}

console.log(repeat("Bug",10));

//question 8
function question8(firstName,lastName){ //the answer
    return (firstName + " " + lastName);
}

console.log(question8("Morgan","Plagenz")); //just checking my work


//question 9

var bigNumbers = [80, 60, 10];

function greaterThan(numbersArray){
    var sum =0;
    for (var i=0; i<numbersArray.length; i++){
        sum +=bigNumbers[i];
    }
    return (sum > 100);
}

console.log(greaterThan(bigNumbers));


//question 10

var samArray = [1,2,3];

function avg(array){
    var sum = 0;
    for (var i=0; i < array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}

console.log(avg(samArray));

//question 11

var firstArray = [75, 120, 780];
var secondArray = [3,6,7];

function avgGreater(array1, array2){
    var sum1 = 0;
    var sum2 = 0;
    for (var i=0; i < array1.length; i++){
        var av1 = ((sum1 += array1[i])/array1.length);
    }
    for (var i=0; i <array2.length; i++){
        var av2 = ((sum2 += array2[i])/array2.length);
    }
    return(av1 > av2);
}

console.log(avgGreater(firstArray,secondArray));

//question 12

var isHotOutside = true;
moneyInPocket = 14;

function willBuyDrink(temp,money){
    if (temp == true && money > 10.50){
        return true;
    } else {
        return false;
    }
}

console.log(willBuyDrink(isHotOutside,moneyInPocket));

//question 13

//this function is meant to filter data in a CRM (sales database). Here, if we were looking to see if we have "Morgan" in our database, we could search for that name
// I created this because I work alot with CRM's and do work with log records, so it's relevent/interesting to see how I can make some relevant functions myself

var crmData = ["Morgan","Daniel","Kathy","Jerome"]

function question13(array, search){
    return array.includes(search);
}

console.log(question13(crmData, 'Jerome'));


// this isn't a homework problem...I just did the bottom when trying to learn about other functions. Just want to save the work.

var softwareLog = [
    {name: "Morgan", loggedIn: "July 20, 2015 01:45:29"},
    {name: "Daniel", loggedIn: "September 14, 2015 12:03:59"},
    {name: "Morgan", loggedIn: "November 20, 2015 10:41:22"},
    {name: "Kathy", loggedIn: "January 01, 2016 06:23:01"},
    {name: "Jerome", loggedIn: "May 15, 2020 11:30:13"}
];

var filteredName = softwareLog.filter(function(currentElement){
        return currentElement.name == "Morgan";
    });
