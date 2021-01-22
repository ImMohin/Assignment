
/** 
// Problem No 1: kilometer To Meter 
function kilometerToMeter(kiloMeter) {
    var kiloMeter;
    if (kiloMeter == 0) {
        console.log("Distance 0 Kilo meter calculate is not possible");
    }
    else if(kiloMeter < 0 ){
        console.log("Negative number is not allowed");
    }
    else {
        // we know 1Kilo Meter = 1000 meter 
        var meter = kiloMeter * 1000;
        return meter;
    }

}
var resultMeter = kilometerToMeter(-4);
console.log(resultMeter);

*/

// Problem No-2:  



/** 
// Problem No-3: hotelCost

function hotelCost(dayCount){
    var perDay=100;
    var dayCount;
    var totalCost;

    if(dayCount < 0){
        console.log("Total day count zero or negative number are not allowed");
    }
    else if(dayCount <= 10){
        // 1th to 10th day perDay 100tk cost 
        var firstTenDayCost = dayCount*perDay;
        totalCost = dayCount*perDay;
        
    }
    // 11th day to 20th day per day cost 80tk . (20% disscount)
    else if(dayCount <= 20){
        totalCost = 1000 + (dayCount-10) *(perDay- ((perDay*20)/100));
        
    }
    // 21th day above per day cost 50tk or 50% discount
    else if(dayCount >= 21){
       totalCost = 1800 + (dayCount-20) *(perDay- ((perDay*50)/100)); 
    }
    else{
        console.log("Invalid input");
    }
    return totalCost;
    
}

var totalBill = hotelCost(30);
console.log(totalBill);

*/


// per watch = 50 , phone = 100 , laptop = 500 tk

function budgetCalculator(watch , phone , laptop){
    var perWatchPrice = 50;
    var perPhonePrice = 100;
    var perLaptopPrice = 500;
    if( watch < 0 || phone < 0 || laptop < 0){
        console.log("invalid item");
    }
    else if( watch >= 0 || phone >= 0 || laptop >= 0){
        var totalCost = watch*perWatchPrice + phone*perPhonePrice + laptop*perLaptopPrice;
    }
    else{
        console.log("input error");
    }
    return totalCost;
}
var totalResult = budgetCalculator(0,0);
console.log(totalResult);