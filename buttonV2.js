//Button 2.0
//Lab 1.

//Variabelen voor de buttons die in de html body staan.
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

//Variabelen voor de images die in de html body staan.
var container = document.getElementById('container');

//Variablen voor de counters.
var count1 = 1;
var count2 = 1;
var count3 = 1;

button1.addEventListener('click',function(){
    button1.innerHTML = count1++;  //Elke keer als er op 1 van de buttons worden gedrukt gaat er steeds 1 bij komen.
    button1.style.backgroundColor = "red";

    //If statement als er een button rood word worden de rest van de buttons groen.
    if(button1.style.backgroundColor == "red"){
        button2.style.backgroundColor = "green";
        button3.style.backgroundColor = "green";
        button1.disabled = true;
        button2.disabled = false;
    } 
});

button2.addEventListener('click',function(){
    button2.innerHTML = count2++;//Zie regel 20!.
    button2.style.backgroundColor = "red";

    if(button2.style.backgroundColor == "red"){
        button1.style.backgroundColor = "green";
        button3.style.backgroundColor = "green";
        button1.disabled = false;
        button2.disabled = true;
        button3.disabled = false;
    } 

});

button3.addEventListener('click',function(){
    button3.innerHTML = count3++;//Zie regel 20!.
    button3.style.backgroundColor = "red";

    if(button3.style.backgroundColor == "red"){
        button1.style.backgroundColor = "green";
        button2.style.backgroundColor = "green";
        button2.disabled = false;
        button3.disabled = true;
    } 
});
