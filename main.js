

//colour array
let colors=['blue','yellow','green','red','grey','black','orange','pupple'];
//get button
let button=document.getElementById('button');

//add event listener
button.addEventListener('click',function(){
 var randomColor=colors[Math.floor(Math.random() *colors.length)]

 //get container
 let container=document.getElementById('container');
 //randomizer
 container.style.background=randomColor
})