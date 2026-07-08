// Live Clock
setInterval(()=>{
document.getElementById("clock").innerHTML=
new Date().toLocaleTimeString();
},1000);

// Greeting
let hour=new Date().getHours();

if(hour<12)
document.getElementById("greeting").innerHTML="🌞 Good Morning";
else if(hour<18)
document.getElementById("greeting").innerHTML="☀ Good Afternoon";
else
document.getElementById("greeting").innerHTML="🌙 Good Evening";

// Name
function showName(){

let name=prompt("Enter your name");

if(name)
document.getElementById("message").innerHTML="Hello, "+name+" 👋";
}

// Quotes
let quotes=[
"Never Give Up!",
"Believe in Yourself.",
"Success Comes with Hard Work.",
"Keep Learning Every Day.",
"Dream Big."
];

document.getElementById("quote").innerHTML=
quotes[Math.floor(Math.random()*quotes.length)];

// Random Background
function changeColor(){

let colors=["#ffebee","#e8f5e9","#fff3e0","#e3f2fd","#f3e5f5"];

document.body.style.background=
colors[Math.floor(Math.random()*colors.length)];
}

// Dark Mode
document.getElementById("modeBtn").onclick=function(){
document.body.classList.toggle("dark");
}

// Visitor Counter
let count=localStorage.getItem("count");

if(count==null)
count=0;

count++;

localStorage.setItem("count",count);

document.getElementById("visitor").innerHTML=count;