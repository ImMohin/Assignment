

// Problem No 1: kilometerToMeter
// input kilo meter calculate Meter. 
// 1Km = 1000m
function kilometerToMeter(kiloMeter) {
    var kiloMeter;
    if (kiloMeter == 0) {
        console.log("Distance 0 Kilo meter calculate is not possible");
    }
    else if(kiloMeter < 0 ){
        console.log("Distance is not allowed negative Number");
    }
    else {
        // we know 1Kilo Meter = 1000 meter 
        var meter = kiloMeter * 1000;
        return meter;
    }

}
var resultMeter = kilometerToMeter(1);
console.log(resultMeter);



// Problem No-:2
// Given all product price. induvidually multiply product price and  summation all total Cost 

function budgetCalculator(watch , phone , laptop){
    //decalre all varialbe price 
    var perWatchPrice = 50;
    var perPhonePrice = 100;
    var perLaptopPrice = 500;
    //checking all product quantity by if else condition
    if( watch < 0 || phone < 0 || laptop < 0){
        console.log("invalid item");
    }else if( watch >= 0 || phone >= 0 || laptop >= 0){
        var totalCost = watch*perWatchPrice + phone*perPhonePrice + laptop*perLaptopPrice;
    }else{
        console.log("input error");
    }
    //return total cost
    if(totalCost){
        return totalCost;
    }else{
        console.log("error missing");
    }
    // return totalCost ? totalCost : "error";
}
var totalResult = budgetCalculator(0,5,1);   //function called 
console.log(totalResult);





// Problem No-3: hotelCost

function hotelCost(dayCount){
    var perDay=100;
    var dayCount;
    var totalCost=0;

    if(dayCount <= 0){
        console.log("Total day count zero or negative number are not allowed");
    }
    else if(dayCount <= 10){
        // 1th to 10th day perDay 100tk cost 
        totalCost = dayCount*perDay;
    }
    // 11th day to 20th day per day cost 80tk . (20% disscount)
    else if(dayCount <= 20){
        totalCost = (10*perDay) + (dayCount-10) *(perDay- ((perDay*20)/100));
        
    }
    // 21th day above per day cost 50tk or 50% discount
    else if(dayCount >= 21){
       totalCost = (10*perDay)+(10*(perDay-((perDay*20)/100))) + (dayCount-20) *(perDay- ((perDay*50)/100)); 
    }
    else{
        console.log("Invalid input");
    }
    return totalCost;
    
}

var totalBill = hotelCost(21);
console.log(totalBill);




// Problem No-4: megaFriend
// create Array name list and access by loop 
// individually checking  max string by if else conditon 

function megaFriend(nameList) {
    if (nameList == "") {
        return "Name List should not be empty.";
    } else {
        var maxName = nameList[0];
        for (var i = 0; i < nameList.length; i++) {
            var element = nameList[i];
            if (element.length > maxName.length) {
                maxName = element;
            }
        }
        return maxName;
    }

}
var nameList = ["mohin", "Ala uddin", "karimuddin", "kazi zia uddin Alo", "akmal uddin"];
var result = megaFriend(nameList);
console.log(result);

