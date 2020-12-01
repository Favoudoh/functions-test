const cad = 34
const cod = 54;
var sum = cad+cod;

function happy(x){
    sum = sum + x
   console.log(sum)
}//adds the value of the sum of "cad" and "cod" to the number specified and gives output//
happy(999);


function ker(t){
    if(happy){
        temp = sum * 21
        console.log(temp)
    }
}
ker(4578888);


var toll = 783;
function hadd(x){
    y = x*89
    console.log(y)
}
hadd(299229);


function rust(number){
    addup=number*678
    console.log(addup)
}  //^^just testing}
rust (89);



function cTof(celcius) {
    x=9/5
    y=celcius*x
    z=y+32
    console.log( `${celcius} deg celcius is equal to ${z} deg fahrenheit ` )
}//^^converts input that's in degree celcius to deg farenheit//

cTof(78);



function fullname(x) {
    x=[peep.firstname + "  " + peep.lastname]
    console.log(x)
}


var peep=
    {
    firstname : "miles",
    lastname : "morales"
    }

/* ^^gets the value for first name and 
adds to the the value of last name, 
prints*/
fullname(peep);



function allname(x) {
    x = x.brand + "  " + x.model
    console.log (x)    
}; /* ^^gets the value for brand 
adds to the the value of model,
for specified object,and  
prints*/


car = {
    brand : "honda",
    model : "civic"
}

boat = {
    brand : "rolce royce",
    model : "hybrid 1"
}
plane = {
    brand : "boeing",
    model : "747"
}
allname(boat)
allname(car)
allname(plane)
