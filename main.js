let cnt=0;
const counter=document.getElementById('counter');
const increasebutton=document.getElementById('increase');
increasebutton.addEventListener('click',function(){
   cnt=cnt+1;
   counter.innerText=cnt;
});