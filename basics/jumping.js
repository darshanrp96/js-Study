console.log("jumping statements");

for (let i = 1; i<=10; i++) {
    
    if (i==5) 
        break;
//as soon as condition satisfied it will break the loop and come out of the loop
    console.log(i);

    
}

for (let i = 1; i<=10; i++) {
    
    if (i==5 || i==7)  
        continue;
// skipped the condtion becomes true- 5 will not be printed
    console.log(i);
    
}
