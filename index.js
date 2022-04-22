// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
   return drivers.slice(0,2) 
}

function returnLastTwoDrivers() {
    return drivers.slice(-2,)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(){
        return number*number
    }
}
const fareDoubler = number => number*2

function fareTripler(number){
    return number*3
}

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}