let x ;
let adj;
let n;
let word;


function adjecTive(){
    x = Math.random();
    
    if(0 < x && x < 0.35){
        adj = "Crazy";
    }
    else if(0.35 < x && x < 0.7){
        adj = "Amazing";
    }
    else{
        adj = "Fire";
    }
    return adj;
}

function shopName(){
    x = Math.random();
   
    if(0 < x && x < 0.35){
        n = "Engine";
    }
    else if(0.35 < x && x < 0.7){
        n = "Foods";
    }
    else{
        n = "Garments";
    }
    return n;
}

function anotherWord(){
    x = Math.random();
    
    if(0 < x && x < 0.35){
        word = "Bros";
    }
    else if(0.35 < x && x < 0.7){
        word = "Limited";
    }
    else{
        word = "Hub";
    }
    return word;
}

function BusinessName(){
    let a = adjecTive();
    let b = shopName();
    let c = anotherWord();
    return ("Business Name is : " + a + b + c);
}

alert(BusinessName());
