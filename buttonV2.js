//Button 2.0
//Lab 1.

//Variabelen voor de buttons.
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

//Variable voor de container.
var container = document.getElementById('container');

var count1 = 1;
var count2 = 1;
var count3 = 1;

button1.addEventListener('click',function click1(){
    count1++;
    button1.innerHTML = count1;
    button1.style.backgroundColor = "red";
    container.style.backgroundColor = "red";

    button2.style.backgroundColor = "green";
    button3.style.backgroundColor = "green";
});

button2.addEventListener('click',function click2(){
    button2.style.backgroundColor = "red";
    container.style.backgroundColor = "blue";

    button1.style.backgroundColor = "green";
    button3.style.backgroundColor = "green";
});

button3.addEventListener('click',function click3(){
    button3.style.backgroundColor = "red";
    container.style.backgroundColor = "gray";

    button2.style.backgroundColor = "green";
    button3.style.backgroundColor = "green";
});

document.get