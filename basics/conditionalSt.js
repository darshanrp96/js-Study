console.log("conditional statements");
// if else statement
let age=11

if(age>=18)
{
console.log("eligible for votes");
}
else
{
console.log("NOT eligible for votes");
}

console.log("exited");

// greatest numbers find logic

let a=10,b=200,c=30;

if (a>b && a>c)
{
    console.log("a is greater");
}
else if (b>a && b>c)
{
    console.log("b is greater");  
}
else
{
    console.log("c is greater");
}

// day in week find

let day=9;

if (day==1) {
    console.log("day is monday");
    
}
else if (day==2) {
    console.log("day is tuesday");
    
}
else if (day==3) {
    console.log("day is wedenesday");
    
}
else if (day==4) {
    console.log("day is thursday");
    
}
else if (day==5) {
    console.log("day is friday");
    
}
else if (day==6) {
    console.log("day is saturday");
    
}
else if (day==7) {
    console.log("day is sunday");
    
}
else{
    console.log("day is INVALID");
    
}

//swtich case : int

let d=13;

switch(d)
{
    case 1: console.log("monday"); break;
    case 2: console.log("tuesday"); break;
    case 3: console.log("wednesday"); break;
    case 4: console.log("thursady"); break;
    case 5: console.log("friday"); break;
    case 6: console.log("saturday"); break;
    case 7: console.log("sunday"); break;
    default: console.log("INVALID"); 
}

//switch case string:
 
let= travel= "MP";

switch(travel)
{
    case "MH" : console.log("PUNE"); break;
    case "UP" : console.log("AGRA"); break;
    case "MP" : console.log("UJJAIN"); break;
    case "GJ" : console.log("SOMNATH"); break;
    case "RJ" : console.log("JAIPUR"); break;   
    default : console.log("INVALID");
    
}